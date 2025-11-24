import Link from "next/link";

export function Sidebar() {
  const menuItems = [
    { name: "Dashboard", href: "/admin/dashboard" },
    { name: "Users", href: "/admin/users" },
    { name: "Settings", href: "/admin/settings" },
  ];
  return (
    <div className="w-sm h-screen pt-8">
      <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Tonta-tranokala
      </h1>
      <ul className="flex flex-col p-4 space-y-4">
        {menuItems.map((item) => (
          <li key={item.href}>
            <Link
              href={"#" + item.name}
              className="hover:bg-accent font-bold py-2 px-3 rounded"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
