import { buttonVariants } from "@/Components/ui/button";
import { UserAuthForm } from "./auth-form";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";
import logo from "../../assets/postify-logo.png";

/**
 * Renders the Login page.
 *
 * @returns The JSX element representing the Login page.
 */
function Login() {
  const { pathname } = useLocation();
  return (
    <>
      <div className="container h-[calc(100vh_-_5rem)] relative hidden flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <a
          href={pathname === "/login" ? "/sign-up" : "/login"}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          {pathname === "/login" ? "Sign Up" : "Login"}
        </a>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-primary" />
          <div className="relative z-20 flex items-center text-xxl font-medium">
            You ask, we deliver.
          </div>
          <div className="z-20 flex items-center justify-center h-full">
            <img src={logo} alt="logo" className="max-h-full max-w-full" />
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Best delivery platform in North America.&rdquo;
              </p>
              <footer className="text-sm">Sofia Davis</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                {pathname === "/login" ? "Welcome Back!" : "Create an Account"}
              </h1>
              <p className="text-sm text-muted-foreground">
                {pathname === "/login"
                  ? "Enter back your credentials"
                  : "Enter your name and email to create an account."}
              </p>
            </div>
            <UserAuthForm isLogin={pathname === "/login"} />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <a
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
