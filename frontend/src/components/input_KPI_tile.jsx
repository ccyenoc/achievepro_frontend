function InputKPITitle() {
  return (
    <div
      style={{
        marginBottom: "20px"
      }}
    >
      <label style={{ fontWeight: "bold" }}>KPI Title</label>

      <input
        type="text"
        placeholder="Enter KPI title"
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "6px",
          borderRadius: "8px",
          border: "1px solid #ccc"
        }}
      />
    </div>
  )
}

export default InputKPITitle