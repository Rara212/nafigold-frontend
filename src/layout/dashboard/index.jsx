import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-full overflow-hidden ">
      {/* <DashboardNavbar /> */}
      <DashboardSidebar />
    </div>
  );
}
