import { GroupeSiteForm } from "@/components/groupForm";

export default function Page() {
  return (
    <div className="flex w-full h-[calc(100vh-7rem)] border flex-col sm:flex-row">
      <div className="container flex flex-col items-center justify-center gap-4">
        <p className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Continue à enrichir ta collection.
        </p>
        <GroupeSiteForm />
      </div>
      <div className="w-md">{/* //void */}</div>
    </div>
  );
}
