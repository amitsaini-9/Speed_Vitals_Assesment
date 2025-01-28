import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

const DesktopNavbar = () => {
  return (
    <div className=" hidden md:flex relative  gap-10">
      <NavigationMenu>
        <NavigationMenuList>
          {/* About Us */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <span className="font-bold text-base">About Us</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <Link href="/aboutus">About Us page Link</Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Learn More */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <span className="font-bold text-base">Learn More</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <Link href="/learnmore">Learn More page Link</Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Privacy Policy */}
          <NavigationMenuItem>
            <Link
              href="/privacypolicy"
              className={navigationMenuTriggerStyle()}
            >
              <span className="font-bold text-base">Privacy Policy</span>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="">
        <ModeToggle></ModeToggle>
      </div>
    </div>
  );
};

export default DesktopNavbar;
