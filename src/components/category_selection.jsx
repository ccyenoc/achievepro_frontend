function CategorySelection({ }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "20px"
      }}
    >
      <label style={{ fontWeight: "bold", marginBottom: "6px" }}>
        Category
      </label>

      <select
        style={{
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          background: "#fff",
          cursor: "pointer"
        }}
      >
        <option value="">Select Unit</option>
        <option value="RM">RM</option>
        <option value="%">%</option>
        <option value="units">units</option>
        <option value="days">days</option>
        <option value="months">months</option>
      </select>
    </div>
  )
}

export default CategorySelection