import { Outlet, Link } from "react-router";
import Header from "./Header";

export default function MainLayout() {
  return (
    // Main wrapper for the entire page
    <div className="flex flex-col h-svh">
      {/* 1. Header is now at the top, spanning the full width */}
      <Header />
      {/* 2. A new flex container for the content below the header */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        {/* 3. Sidebar on the left */}
        <aside className="w-[240px], border-r p-4 overflow-y-auto">
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
