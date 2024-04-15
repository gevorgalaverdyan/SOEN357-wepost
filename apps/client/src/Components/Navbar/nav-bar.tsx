import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import logo from "../../assets/logo.png";
import { routePaths } from "@/Routes/Routes";
import { UserNav } from "./user-nav";

export function NavBar() {
  const email = localStorage.getItem("email");
  console.log(email);
  return (
    <header className="bg-primary flex h-20 w-full shrink-0 items-center px-4 md:px-6 border-b-2">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <a className="mr-6 hidden lg:flex" href="/">
            <Logo className="h-6 w-6" />
            <span className="sr-only">WePost</span>
          </a>
          <div className="grid gap-2 py-6">
            <a
              className="flex w-full items-center py-2 text-lg font-semibold"
              href={routePaths.home}
            >
              Home
            </a>
            <a
              className="flex w-full items-center py-2 text-lg font-semibold"
              href={routePaths.deliveries}
            >
              Deliveries
            </a>
            {!email && (<a
              className="flex w-full items-center py-2 text-lg font-semibold"
              href={routePaths.login}
            >
              Log in
            </a>)}
            
            <a
              className="flex w-full items-center py-2 text-lg font-semibold"
              href={routePaths.signUp}
            >
              Sign up
            </a>
            <a
              className="flex w-full items-center py-2 text-lg font-semibold"
              href={routePaths.quotation}
            >
              Find a rate
            </a>
          </div>
        </SheetContent>
      </Sheet>
      <a className="mr-6 hidden lg:flex" href="/">
        <Logo className="w-12" />
        <span className="sr-only">WePost</span>
      </a>
      <nav className="hidden lg:flex gap-6 items-center ml-auto">
        <a
          className="font-medium hover:text-gray-200 transition-colors text-white text-xl"
          href={routePaths.home}
        >
          Home
        </a>
        <a
          className="font-medium hover:text-gray-200 transition-colors text-white text-xl"
          href={routePaths.deliveries}
        >
          Deliveries
        </a>
        {!email && (<a
          className="font-medium hover:text-gray-200 transition-colors text-white text-xl"
          href={routePaths.login}
        >
          Log in
        </a>)}
        
        <a
          className="font-medium hover:text-gray-200 transition-colors text-white text-xl"
          href={routePaths.quotation}
        >
          Find a rate
        </a>
        {!email && (<UserNav />)}
        
      </nav>
    </header>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function Logo(props) {
  return (
    <img
      {...props}
      src={logo}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
}
