import { experiments } from "@/lib/meta";
import Link from "next/link";

function Playground({ params }: { params: { slug: string } }) {
  const index = experiments.findIndex((e) => e.slug === params.slug); // This would check if the exp (experiments meta slug is === to the params.slug)
  const exp = experiments[index]
  if (!exp)
    return (
      <div className="flex items-center justify-center">
        Something went wrong...
      </div>
    ); //This checks if there is no slug within the components meta.ts, which in return would display the not found text.

  const Demo = exp.component; //This attaches the component object of experiments meta.ts to a variable of Demo (e.g. AvatarGroup)

  //These are the controls to switch between slugs using the index and just incrementing/decrementing it.
  const Prev = experiments[index - 1]
  const Next = experiments[index + 1]

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">{exp.title}</h1>
      <div className="mt-6">
        <Demo />
      </div>

      <div className="flex flex-col gap-2">
        {/* These is the link to the slugs using Previsou and Next operations */}
        {Prev ? <Link href={`/playground/${Prev.slug}`}>{Prev.title}</Link> : <div/>} 
        {Next ? <Link href={`/playground/${Next.slug}`}>{Next.title}</Link> : <div/>}
      </div>
    </main>
  );
}

export default Playground;
