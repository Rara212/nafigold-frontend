import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";
import { DashboardSidebarData } from "../../assets/data";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-full overflow-hidden ">
      {/* <DashboardNavbar /> */}
      <DashboardSidebar sidebarData={DashboardSidebarData} />
    </div>
  );
}
