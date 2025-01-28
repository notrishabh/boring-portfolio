import { CirclePlus, CircleUserRound, House } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <section className="rounded-lg bg-mainbg p-2 border border-mainborder text-gray-300 flex justify-between">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <House />
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <CircleUserRound />
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div>
        <Button
          asChild
          className="p-2 text-xs font-semibold bg-secondbg text-white rounded-lg hover:bg-medbg"
        >
          <Link href="/contact">
            <CirclePlus />
            Hire Me
          </Link>
        </Button>
      </div>
    </section>
  );
}
