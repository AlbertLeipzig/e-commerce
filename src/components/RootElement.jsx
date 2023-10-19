import { Outlet } from "react-router-dom";

export const RootElement = () => {
  return (
    <div className="body">
      <header>
        <h2>Router Site</h2>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
