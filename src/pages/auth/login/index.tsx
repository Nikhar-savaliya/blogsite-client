import { loginUser } from "@/api/user";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { UserContext, UserDataType } from "@/contexts/UserContext";
import { storeInSession } from "@/helpers/session";
import { routes } from "@/routes/routeObj";
import { Eye, EyeOff, KeyIcon, Mail } from "lucide-react";
import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { updateUser } = useContext(UserContext);

  let navigate = useNavigate();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [isVisible, setIsvisible] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    if (!email || !password) {
      return toast({
        variant: "destructive",
        title: "All fields are required",
        description: "please provide all details to login your account",
        duration: 1500,
      });
    }

    try {
      const response = await loginUser({ email, password });
      if (response.status == 200) {
        const userData: UserDataType = {
          profileImg: undefined,
          username: response.data.username,
          fullname: response.data.fullname,
          accessToken: response.data.accessToken,
        };
        storeInSession(userData);
        updateUser(userData);
        navigate("/");
        return toast({
          variant: "success",
          title: "Login Successful",
          description: `Welcome Back, ${userData.fullname}`,
          duration: 1500,
        });
      }
    } catch (error: any) {
      if (error.response.status == 400) {
        return toast({
          variant: "destructive",
          title: error.response.data.message,
          description:
            "the email or password you provided doesn't match with details from server.",
          duration: 1500,
        });
      }
      if (error.response.status == 500) {
        return toast({
          variant: "destructive",
          title: "server error",
          description: "we are working on this error, please try again later.",
          duration: 1500,
        });
      } else if (error.response.status == 404) {
        return toast({
          variant: "destructive",
          title: error.response.data.message,
          description:
            "No user found with this email. please enter valid email address",
          duration: 1500,
        });
      }
    }
  }

  return (
    <div className="w-full h-cover flex items-center justify-center ">
      <Card className="w-full max-w-lg border-none shadow-none pb-16">
        <CardHeader>
          <CardTitle className="text-4xl tracking-tight font-serif font-bold text-center">
            Login
          </CardTitle>
          <CardDescription className="text-center">
            Enter details below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 mt-6">
          <div className="relative">
            <Mail className="absolute left-4 top-[18px] h-4 w-4 text-muted-foreground" />
            <Input
              type="email"
              id="email"
              ref={emailRef}
              placeholder="email address"
              className="pl-10 py-6"
            />
          </div>
          <div className="relative">
            <KeyIcon className="absolute left-4 top-[18px] h-4 w-4 text-muted-foreground" />
            <Input
              type={isVisible ? "text" : "password"}
              id="password"
              ref={passwordRef}
              placeholder="password"
              className="pl-10 py-6"
            />
            <Button
              variant={"secondary"}
              className="absolute top-[8px] right-1 bg-transparent shadow-none transition-all duration-200"
              onClick={() => {
                setIsvisible((isVisible) => !isVisible);
                console.log(isVisible);
              }}
            >
              {!isVisible ? (
                <Eye className="h-5 w-5 text-muted-foreground" />
              ) : (
                <EyeOff className="h-5 w-5 text-muted-foreground" />
              )}
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-center gap-2 justify-center text-sm text-muted-foreground">
          <Button className="w-full" type="submit" onClick={handleSubmit}>
            login
          </Button>
          <p>
            <span className="mx-1">don't have an account?</span>
            <Link to={routes.register} className="underline">
              register
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginForm;
