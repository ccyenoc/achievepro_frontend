function KPIAssignStaff(){
    const [kpiValue, setKpiValue] = useState(100)

    return (
     <div
       className="d-flex"
       style={{
        flexDirection:"column"
       }}>
       
       {/*choose staff*/}
       <div
         className="d-flex"
         style={{
         flexDirection:"column"}}>
            <h3>Assign Staff</h3>
            <input
            type ="text"
            placeholder="  Search Staff... "
            style={{
              marginTop:"10px"}}
            />

       </div>

        <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 0",
          borderBottom: "1px solid #eee"
        }}
      >

        {/* LEFT: Staff Info */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <strong>John Smith</strong>
          <span style={{ color: "#666", fontSize: "0.9rem" }}>
            john.smith@company.com
          </span>
        </div>

        {/* RIGHT: KPI INPUT */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          
          <input
            type="number"
            value={kpiValue}
            onChange={(e) => setKpiValue(Number(e.target.value))}
            style={{
              width: "100px",
              padding: "8px",
              borderRadius: "8px",
              border: "1px solid #ccc"
            }}
          />

          <span>units</span>
        </div>
      </div>

      {/* Suggestion Box */}
      <div
        style={{
          background: "#fff7cc",
          border: "1px solid #facc15",
          padding: "12px",
          borderRadius: "10px",
          width: "350px"
        }}
      >
        <strong>💡 Suggestion: 50 units</strong>
        <div style={{ fontSize: "0.85rem", color: "#555" }}>
          Suggestions are made based on staff performance
        </div>
      </div>
     </div>
    )
}

export default KPIAssignStaff