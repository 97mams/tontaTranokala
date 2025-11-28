import { Chart } from "./_components/chart";
import { ListUsers } from "./_components/listUsers";
import { Sidebar } from "./_components/sidebar";
import { Users } from "./_components/users";

export default function Page() {
  return (
    <div className="flex w-full max-h-screen">
      <Sidebar />
      <div className="w-full overflow-scroll pt-8 px-20 flex flex-col gap-4">
        <Users />
        <Chart />
        <ListUsers />{" "}
      </div>
    </div>
  );
}
