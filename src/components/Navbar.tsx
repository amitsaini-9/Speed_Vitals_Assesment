import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { ModeToggle } from "./ModeToggle";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <nav className="shadow-lg">
      <div className="border-b ">
        <div className="flex h-16 items-center px-4 container mx-auto justify-evenly">
          <Link
            href="/"
            className="flex items-center gap-1 md:gap-2 font-semibold text-lg md:text-2xl mr-4 md:mr-6 hover:opacity-80 transition-opacity"
          >
            ⚡ Assessment
            <span className="rounded bg-green-400 px-1.5 py-0.5 text-xs font-medium -translate-y-3 ">
              PRO
            </span>
          </Link>
          <DesktopNavbar></DesktopNavbar>
          <MobileNavbar></MobileNavbar>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
