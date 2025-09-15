import { GroupeSiteForm } from "@/components/groupForm";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex w-full h-[calc(100vh-7rem)] flex-col sm:flex-row">
      <div className="container flex flex-col items-center justify-center gap-4">
        <Image width={200} height={200} alt="log" src={"/tranokalaMd.png"} />
        <p className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Continue à enrichir ta collection.
        </p>
        <GroupeSiteForm />
      </div>
      <div className="w-md">{/* //void */}</div>
    </div>
  );
}
