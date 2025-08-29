"use client";
import gsap from "gsap";
import { HtmlHTMLAttributes, useEffect, useRef } from "react";

export const Button: React.FC<HtmlHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {
  const ref = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const el = ref.current
    if (!el) return;
    const HandleMouseEnter = () => {
        gsap.to(el, {
            scale: 0.9,
            duration: 0.3,
            ease: "power2.out"
        })
    }
    const HandleMouseLeave = () => {
        gsap.to(el, {
            scale: 1,
            duration: 0.3,
            ease: "back.out(2)"
        })
    }

    el.addEventListener('mousedown', HandleMouseEnter)
    el.addEventListener('mouseup', HandleMouseLeave)

    return () => {
        el.removeEventListener('mousedown', HandleMouseEnter)
        el.removeEventListener('mouseup', HandleMouseLeave)
    }
  }, []);

  return (
    <button
      ref={ref}
      className={`flex items-center justify-center bg-zinc-100 text-black px-6 py-[15px] rounded-2xl cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
