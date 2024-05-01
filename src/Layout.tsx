import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const Layout = () => {
  return (
    <main>
      <Header />
      <div className="container w-full h-cover">
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
