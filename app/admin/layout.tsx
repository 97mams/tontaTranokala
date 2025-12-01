import { Sidebar } from "./_components/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full max-h-screen">
      <Sidebar />
      {children}
    </div>
  );
}
