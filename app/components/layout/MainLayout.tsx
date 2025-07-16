import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div style={{ display: "flex" }}>
      <aside style={{ width: "250px", borderRight: "1px solid #ddd" }}>
        <h2>KUROCO AI</h2>
        <nav>
          <ul>
            <li>Home</li>
            <li>Team & Project Management</li>
          </ul>
        </nav>
      </aside>

      <main style={{ flex: 1, padding: "1rem" }}>
        <header
          style={{ marginBottom: "1rem", borderBottom: "1px solid #ddd" }}
        >
          <h1>Project Overview</h1>
        </header>

        <Outlet />
      </main>
    </div>
  );
}
