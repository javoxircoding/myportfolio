function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 50px",
        borderBottom: "1 solid  #ddd",
        alignItems: "center",
      }}
    >
      <div className="logo">
        <h1>Javoxir</h1>
      </div>
      <ul style={{ display: "flex", listStyle: "none", gap: "50px" }}>
        <li>
          <a href="#home"></a>Home
        </li>
        <li>
          <a href="about"></a>About
        </li>
        <li>
          <a href="skills"></a>Skills
        </li>
        <li>
          <a href="projects"></a>Project
        </li>
        <li>
          <a href="experians"></a>Experians
        </li>
        <li>
          <a href="Roadmap"></a>Roadmap
        </li>
        <li>
          <a href="contact"></a>Contakt
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
