import ManagerSidebar from "../components/manager_sidebar"
import PageTitle from "../components/page_title"
import InputKPITitle from "../components/input_KPI_tile"
import CategorySelection from "../components/category_selection"
import { useState} from "react";
import TargetKPISelection from "../components/target_kpi"
import Deadline from "../components/deadline"
import KPIAssignStaff from "../components/kpi_assign_staff"

function CreateKPI(){
    const [category, setCategory] = useState("")
    const [title, setTitle] = useState("")

    const KPI_TEMPLATES = {
    sales: ["Monthly Sales Revenue", "Closed Deals", "Conversion Rate"],
    lead: ["New Leads", "Cost per Lead", "Qualified Leads"],
    property: ["Occupancy Rate", "Tenant Retention", "Maintenance Response Time"],
    marketing: ["Campaign Conversion Rate", "CTR", "Traffic Growth"],
    customer: ["CSAT", "NPS", "Response Time"]
    }

    return(
        <div
          className="d-flex justify-content-center"
          style={{
            flexDirection:"column",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}>
            <ManagerSidebar/>
            <PageTitle title="Create KPI" subtitle="Create a key performance indicator and assign to a staff"/>

            {/*title and category contanier*/}
            <div 
              className="d-flex"
              style={{
                flexDirection:"row",
                font:"16px",
              }}>

                <InputKPITitle />
                <CategorySelection />
            </div>

            {/*kpi and deadline contanier*/}
            <div 
              className="d-flex"
              style={{
                flexDirection:"row",
                font:"16px",
              }}>

                <TargetKPISelection />
                <Deadline />
            </div>   

             {/* assign staff contanier*/}
            <div 
              className="d-flex"
              style={{
                flexDirection:"row",
                font:"16px",
              }}>

                <TargetKPISelection />
                <Deadline />
            </div>   

            <KPIAssignStaff />
        </div>
    )
}

export default CreateKPI