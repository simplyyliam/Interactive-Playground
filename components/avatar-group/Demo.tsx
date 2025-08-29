"use client";
import { useRef, useEffect, useState } from "react";
import Profile from "./ui/Profile";
import { ProfileData } from "./data";
import gsap from "gsap";
import ProfileCard from "./ui/ProfileCard";

function Demo() {
  const avatarsRef = useRef<(HTMLDivElement | null)[]>([]);
  const cardRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [cardPos, setCardPos] = useState({ x: 0, y: 0 });

  // Animate ProfileCard mount/unmount
useEffect(() => {
  if (cardRef.current) {
    if (hoveredIndex !== null) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 20, scale: 0.85 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "elastic.out(1, 0.5)", // springy, smooth
        }
      );
    } else {
      gsap.to(cardRef.current, {
        opacity: 0,
        y: 20,
        scale: 0.95,
        duration: 0.3,
        ease: "back.in(1.2)", // clean tuck away
      });
    }
  }
}, [hoveredIndex]);


  // When hovering an avatar
  const handleMouseEnter = (i: number) => {
    const el = avatarsRef.current[i];
    if (!el) return;

    // Get position for ProfileCard
    const rect = el.getBoundingClientRect();
    setCardPos({
      x: rect.left + rect.width / 2,
      y: rect.top - rect.height / 2,
    });

    setHoveredIndex(i);

    // Animate neighbors
    avatarsRef.current.forEach((avatar, idx) => {
      if (!avatar) return;

      if (idx === i) {
        // Hovered avatar gets lift & scale
        gsap.to(avatar, {
          y: -10,
          scale: 1.2,
          duration: 0.3,
          ease: "power3.out",
        });
      } else {
        // Distance-based push effect
        const distance = Math.abs(idx - i);
        const offset = distance === 1 ? 25 : distance === 2 ? 15 : 0;

        gsap.to(avatar, {
          x: idx < i ? -offset : offset, // push left or right
          scale: 0.95,
          duration: 0.3,
          ease: "power3.out",
        });
      }
    });
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);

    // Reset all avatars
    avatarsRef.current.forEach((avatar) => {
      if (!avatar) return;
      gsap.to(avatar, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power3.out",
      });
    });
  };

  return (
    <div className="flex items-center justify-center relative">
      {ProfileData.map((p, i) => (
        <div
          key={i}
          ref={(el) => {
            avatarsRef.current[i] = el;
          }}
          className={i !== 0 ? "-ml-[2em]" : ""}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
        >
          <Profile src={p.display} alt={p.alt} />
        </div>
      ))}

      {hoveredIndex !== null && (
        <div
          ref={cardRef}
          className="fixed transform -translate-x-1/2 -translate-y-full z-50"
          style={{ left: cardPos.x, top: cardPos.y - 70 }}
        >
          <ProfileCard profile={ProfileData[hoveredIndex]} />
        </div>
      )}
    </div>
  );
}

export default Demo;
