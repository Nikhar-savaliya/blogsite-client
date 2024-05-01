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
import { routes } from "@/routes/routeObj";
import { KeyIcon, Mail, User } from "lucide-react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="w-full h-cover flex items-center justify-center ">
      <Card className="w-full max-w-lg border-none shadow-none">
        <CardHeader>
          <CardTitle className="text-3xl tracking-tight font-serif font-bold text-center">
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
              placeholder="email address"
              className="pl-10 py-6"
            />
          </div>
          <div className="relative">
            <KeyIcon className="absolute left-4 top-[18px] h-4 w-4 text-muted-foreground" />
            <Input
              type="password"
              id="password"
              placeholder="password"
              className="pl-10 py-6"
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-center gap-2 justify-center text-sm text-muted-foreground">
          <Button className="w-full">login</Button>
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
