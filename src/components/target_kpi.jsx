function TargetKPISelection(){

    return(
        <div
         className="d-flex"
         style={{
            flexDirection:"column"
         }}>

            <h3>Target KPI</h3>

            {/*kpi and unit*/}
            <div
              className="d-flex"
              style={{
                flexDirection:"row"
              }}>
                <input>
                 type="text"
                 placeholder="Enter KPI"
                 style={{
                   width: "100%",
                   padding: "10px",
                   marginTop: "6px",
                   borderRadius: "8px",
                   border: "1px solid #ccc"
                }}
                </input>

                <select
                 style={{
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  background: "#fff",
                  cursor: "pointer"
                 }}>
                  <option value="">Select category</option>
                  <option value="sales">Sales Performance</option>
                  <option value="lead">Lead Generation</option>
                  <option value="property">Property Management</option>
                  <option value="marketing">Marketing Performance</option>
                  <option value="customer">Customer Experience</option>
                </select>
            </div>
         </div>
    )
}

export default TargetKPISelection