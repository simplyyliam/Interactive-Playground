import { Button } from "@/shared-components/Button";
import Link from "next/link";

export default function Home() {
  return (
   <>
    <main className="flex flex-col gap-8 items-center justify-center w-screen h-screen bg-[#010101] text-white">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="font-Dm font-semibold text-7xl">Playground</h1>
        <p className="font-medium">Interactive components built by @simplyliam</p>
      </div>
      <Button>
        <Link href="./playground/avatar-group">Enter</Link>
      </Button>
    </main> 
  </>
  );
}
