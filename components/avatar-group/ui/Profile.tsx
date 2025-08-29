
import Image from "next/image";

interface props {
  src: string;
  alt: string;
}

function Profile({ src, alt }: props) {
  return (
    <div className="w-20 h-20 relative overflow-hidden cursor-pointer">
      <Image
        src={src}
        fill
        quality={100}
        alt={alt}
        className="rounded-full object-cover"
      />
    </div>
  );
}

export default Profile;
