
import DashboardNavbar from "../components/DashboardNavbar";
import Sidebar from "../components/DashboardSidebar";
import DashboardContent from "../components/Dashboard";
export default function DashboardPage() {
    return(
        <div className="bg-white"> 
            <DashboardNavbar />
            <div className="flex">
                <Sidebar />
                <DashboardContent />    
            </div>
        </div>
    )
}