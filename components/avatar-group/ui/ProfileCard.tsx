import Image from "next/image";
import Profile from "./Profile";
import { Button } from "@/shared-components/Button";

interface Profile {
  name: string;
  tag: string;
  display: string;
  from: string;
  to: string;
}

interface ProfileData {
  profile: Profile;
}

function ProfileCard({ profile }: ProfileData) {
  return (
    <div
      className="flex p-[3px] rounded-4xl text-black shadow-[0px_4px_21px_-9px_#01010125] border-[0.5px] border-[#EBEBEB]"
      style={
        {
          // background: `linear-gradient(90deg, ${profile.from} 0%, ${profile.to} 100%)`,
        }
      }
    >
      <div className="flex items-center w-full px-3 py-2 gap-3 rounded-4xl ">
        {/* Avatar */}
        <div className="w-12 h-12 relative overflow-hidden rounded-full">
          <Image
            src={profile.display}
            fill
            quality={100}
            alt="Profile"
            className="object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col flex-1">
          <h1 className="text-sm font-medium leading-tight">{profile.name}</h1>
          <p className="text-xs opacity-50">{profile.tag}</p>
        </div>

        {/* Button */}
        <button className="flex items-center justify-center gap-[2px] px-5 py-2.5 text-xs font-medium bg-[#f2f2f2] hover:bg-white/30 transition rounded-full backdrop-blur-sm">
          <svg
            width="20"
            height="20"
            viewBox="0 0 7 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.28835 1.65097V5.15147"
              stroke="black"
              stroke-width="0.375"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.03859 3.40147H1.53809"
              stroke="black"
              stroke-width="0.375"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Follow
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;
