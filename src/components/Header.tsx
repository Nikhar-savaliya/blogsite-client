import { Menu, PenBox, Search } from "lucide-react";
import { Input } from "./ui/input";
import { Link } from "react-router-dom";
import logo from "@/assets/Logo.svg";
import { Button } from "./ui/button";
import { routes } from "@/routes/routeObj";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <div className="z-10 sticky top-0 h-20 w-screen border-b-2">
      <div className="container flex items-center justify-between py-4 h-full">
        {/* SEARCH BOX */}
        <div className="flex items-center gap-8">
          <Link to={"/"} className="">
            <img
              src={logo}
              alt="brand logo"
              className=" h-8 md:h-10 object-contain"
            />
          </Link>
          <form className=" flex-1 sm:flex-initial max-md:w-full">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search" className="pl-9" />
            </div>
          </form>
        </div>
        {/* MOBILE NAV */}
        <nav className="md:hidden ml-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="p-1 bg-accent rounded-sm">
              <Menu width={20} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-4 ">
              <DropdownMenuItem>
                <Link to={"/editor"} className="flex gap-2 items-center">
                  <PenBox width={16} />
                  Write
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to={routes.register} className="text-start">
                  Register
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to={routes.login} className="text-start">
                  Login
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        {/* DESKTOP */}
        <nav className="flex items-center gap-6 max-md:hidden">
          <Link to={"/editor"}>
            <Button variant={"ghost"} className="flex gap-2 items-center">
              <PenBox width={16} />
              Write
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <Button variant={"outline"}>
              <Link to={routes.register}>Register</Link>
            </Button>
            <Button variant={"default"}>
              <Link to={routes.login}>Login</Link>
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
