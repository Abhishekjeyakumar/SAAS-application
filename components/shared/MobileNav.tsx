"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SignedOut } from "@clerk/nextjs";


const MobileNav = () => {
  const pathname = usePathname();
  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image
          src="/assets/images/deeppixx.jpeg"
          alt="logo"
          width={100}
          height={100}
        />
      </Link>
      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
          <Sheet>
            <SheetTrigger>
              <Image
                src="/assets/icons/menu.svg"
                alt="menu"
                width={35}
                height={35}
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <>
                <Image
                  src="/assets/images/deeppixx.jpeg"
                  alt="logo"
                  width={100}
                  height={100}
                />
                <ul className="header-nav_elements">
                  {navLinks.map((link) => {
                    const isActive = link.route === pathname;

                    return (
                      <li
                        className={`${isActive && "gradient-text"}
                       p-18 flex whitespace-nowrap text-dark-700`}
                        key={link.route}
                      >
                        <Link
                          className="sidebar-link"
                          cursor-pointer
                          href={"link.route"}
                        >
                          <Image
                            src={link.icon}
                            alt="logo"
                            width={24}
                            height={24}
                          />
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>
         <SignedOut>
                    <Button asChild className = "button bg-purple-gradient bg-cover">
                      <Link href="/sign-in">Login</Link>
                    </Button>
                  </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav;
