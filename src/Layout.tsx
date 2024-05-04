import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { Toaster } from "./components/ui/toaster";

const Layout = () => {
  return (
    <main>
      <Header />
      <Toaster />
      <div className="container w-full h-cover">
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
