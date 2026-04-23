
import DashboardNavbar from "../components/DashboardNavbar";
import Sidebar from "../components/DashboardSidebar";
import DashboardContent from "../components/Dashboard";
import DashboardTransaction from "../components/DashboardTransaction";
export default function DashboardPage() {
    return(
        <div className="bg-white"> 
            <DashboardNavbar />
            <div className="hidden md:flex">
                <Sidebar />
                <DashboardContent /> 
            </div>
            <div className="md:hidden">
                <Sidebar />
                <DashboardContent /> 
            </div>
        </div>
    )
}