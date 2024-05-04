import { registerUser } from "@/api/user";
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
import { KeyIcon, Mail, User } from "lucide-react";
import { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const { updateUser } = useContext(UserContext);
  let navigate = useNavigate();

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: any) {
    e.preventDefault();
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    // validating data from frontend
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password

    if (!name || !email || !password) {
      return toast({
        variant: "destructive",
        title: "All fields are required",
        description: "please fill all 3 fields to register your accound",
        duration: 1500,
      });
    }
    if (name && name.length < 3) {
      return toast({
        variant: "destructive",
        title: "name must be more than 3 letters",
        duration: 1500,
      });
    }

    if (email && !emailRegex.test(email)) {
      return toast({
        variant: "destructive",
        title: "Invalid email",
        duration: 1500,
      });
    }
    ``;
    if (password && !passwordRegex.test(password)) {
      return toast({
        variant: "destructive",
        title: "Invalid Password",
        description:
          "password must be 6 to 20 characters long and consists atleast one digit, one lowercase and one uppercase letter",
        duration: 1500,
      });
    }

    // API CALL
    try {
      const response = await registerUser({ name, email, password });
      if (response.status == 201) {
        const userData: UserDataType = {
          profileImg: response.data.profileImg || "",
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
          description: `Welcome, ${userData.fullname}`,
          duration: 1500,
        });
      }
    } catch (error: any) {
      console.log();
      if (error.response.data.message.split(" ")[0] == "E11000") {
        return toast({
          variant: "destructive",
          title: "User already exist with this email",
          description:
            "are you sure you dont have registered before with this account",
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
      }
    }
  }

  return (
    <div className="w-full h-cover flex items-center justify-center">
      <Card className="w-full max-w-lg border-none shadow-none pb-16">
        <CardHeader>
          <CardTitle className="text-4xl tracking-tight font-serif font-bold text-center">
            Register
          </CardTitle>
          <CardDescription className="text-center">
            Enter details below to join us today.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 mt-6">
          <div className="relative">
            <User className="absolute left-4 top-[18px] h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              id="text"
              ref={nameRef}
              placeholder="full name"
              className="pl-10 py-6"
            />
          </div>
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
              type="password"
              id="password"
              ref={passwordRef}
              placeholder="password"
              className="pl-10 py-6"
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-center gap-2 justify-center text-sm text-muted-foreground">
          <Button className="w-full" type="submit" onClick={handleSubmit}>
            register
          </Button>
          <p>
            <span className="mx-1">already have an account?</span>
            <Link to={routes.login} className="underline">
              login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegisterForm;
