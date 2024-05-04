import { LogOut, Menu, PenBox, Search, User2 } from "lucide-react";
import { Input } from "./ui/input";
import { Link } from "react-router-dom";
import logo from "@/assets/Logo.svg";
import { Button } from "./ui/button";
import { routes } from "@/routes/routeObj";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useContext, useEffect, useState } from "react";
import {
  UserContext,
  UserContextType,
  UserDataType,
} from "@/contexts/UserContext"; // Make sure this path is correct
import { clearUserDataFromSession } from "@/helpers/session";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Header = () => {
  //@ts-ignore
  const { updateUser, userData }: UserContextType = useContext(UserContext);
  const isLoggedIn = Boolean(userData.accessToken);
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Update username or other user data as needed
    if (userData) {
      setUsername(userData.username);
    }
  }, [userData]);

  const handleLogout = () => {
    clearUserDataFromSession();
    let resetUserData: UserDataType = {
      profileImg: "",
      fullname: "",
      username: "",
      accessToken: "",
    };
    updateUser(resetUserData); // Clear user data in context
  };

  return (
    <div className="z-10 sticky top-0 h-20 w-screen border-b-2 bg-background">
      <div className="container flex items-center justify-between py-4 h-full">
        <div className="flex items-center gap-8">
          <Logo />
          <HeaderSearch />
        </div>

        {/* MOBILE NAV */}
        <MobileNavigation />

        {/* DESKTOP */}
        <DesktopNavigation
          isLoggedIn={isLoggedIn}
          username={username}
          handleLogout={handleLogout}
        />
      </div>
    </div>
  );
};

// LOGO component
const Logo = () => {
  return (
    <Link to={"/"} className="">
      <img
        src={logo}
        alt="brand logo"
        className=" h-8 md:h-10 object-contain"
      />
    </Link>
  );
};

// SEARCH component
const HeaderSearch = () => {
  return (
    <form className=" flex-1 sm:flex-initial max-md:w-full">
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          type=""
          placeholder="Search"
          className="pl-9 bg-secondary placeholder:text-muted-foreground"
        />
      </div>
    </form>
  );
};

// MOBILE NAV component
const MobileNavigation = () => {
  return (
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
  );
};

// DESKTOP NAV component
const DesktopNavigation = ({
  username,
  isLoggedIn,
  handleLogout,
}: {
  username: string;
  isLoggedIn: boolean;
  handleLogout: any;
}) => {
  return (
    <nav className="flex items-center gap-6 max-md:hidden">
      <Link to={"/editor"}>
        <Button variant={"ghost"} className="flex gap-2 items-center">
          <PenBox width={16} />
          Write
        </Button>
      </Link>
      {isLoggedIn ? (
        <AvatarDropDown username={username} handleLogout={handleLogout} />
      ) : (
        <div className="flex items-center gap-2">
          <Button variant={"outline"}>
            <Link to={routes.register}>Register</Link>
          </Button>
          <Button variant={"default"}>
            <Link to={routes.login}>Login</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

// Avatar component
const AvatarDropDown = ({
  username,
  handleLogout,
}: {
  username: string;
  handleLogout: any;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className=" rounded-full outline-none border-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-4 ">
        <DropdownMenuItem className="m-0.5 hover:bg-secondary">
          <Link to={`/user/${username}`} className="flex gap-1 items-center">
            <User2 width={16} />
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button
            variant={"link"}
            className=" flex items-center gap-1 text-destructive p-0 m-0"
            onClick={handleLogout}
          >
            <LogOut width={16} />
            <span>Logout</span>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Header;
