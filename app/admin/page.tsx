import { Chart } from "./_components/chart";
import { Sidebar } from "./_components/sidebar";
import { Users } from "./_components/users";

export default function Page() {
  return (
    <div className="flex w-full h-screen">
      <Sidebar />
      <div className="w-full pt-8 px-20 flex flex-col gap-4">
        <Users />
        <Chart />
      </div>
    </div>
  );
}
