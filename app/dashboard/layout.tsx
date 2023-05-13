import { DashboardBreadcrumb } from "@/app/dashboard/breadcrumb";
import RightSidebar from "@/app/dashboard/rightSidebar";
import DashboardSidebar from "@/app/dashboard/sidebar";
import TopBar from "@/app/dashboard/topbar";

export default function DashboardLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-screen w-screen flex flex-col">
      <TopBar />

      <section className="grid grid-cols-[auto_1fr_auto] h-full">
        <DashboardSidebar />

        <div className="overflow-auto">
          <DashboardBreadcrumb />

          { children }
        </div>

        <div className="overflow-auto">
          <RightSidebar />
        </div>
      </section>
    </section>
  );
}
