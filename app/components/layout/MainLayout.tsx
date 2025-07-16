import { Outlet, Link } from "react-router";

export default function MainLayout() {
  return (
    // Main wrapper for the entire page
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* 1. Header is now at the top, spanning the full width */}
      <header
        style={{
          padding: "0.5rem 1rem",
          borderBottom: "1px solid #e0e0e0",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 style={{ margin: 0 }}>KUROCO AI</h2>
          <div>English ▾</div>
        </div>
      </header>

      {/* 2. A new flex container for the content below the header */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        {/* 3. Sidebar on the left */}
        <aside
          style={{
            width: "240px",
            borderRight: "1px solid #e0e0e0",
            padding: "1rem",
            overflowY: "auto",
          }}
        >
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Team & Project Management</li>
              {/* Add other navigation links here */}
            </ul>
          </nav>
        </aside>

        {/* 4. Main content area on the right */}
        <main style={{ flex: 1, padding: "1.5rem", overflowY: "auto" }}>
          {/* The dynamic page content will be rendered here */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}
