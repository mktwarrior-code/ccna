"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { GNB } from "./GNB";
import { MobileNav } from "./MobileNav";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/img/ccna-logo.png"
              alt="문화민족선진화위원회 로고"
              width={36}
              height={36}
              className="rounded-full"
            />
            <span
              className={`font-bold text-sm lg:text-base transition-colors ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              문화민족선진화위원회
            </span>
          </Link>

          {/* Desktop GNB */}
          <div className="hidden lg:flex flex-1 justify-center">
            <GNB scrolled={scrolled} />
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
<Link href="/membership/apply" className="hidden lg:flex">
              <Button
                size="sm"
                className="bg-amber-600 hover:bg-amber-700 text-white text-xs"
              >
                회원가입
              </Button>
            </Link>

            {/* Mobile hamburger */}
            <Sheet>
              <SheetTrigger
                className="lg:hidden"
                render={
                  <button
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      scrolled ? "text-gray-700" : "text-white hover:bg-white/10"
                    )}
                    aria-label="메뉴 열기"
                  />
                }
              >
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-0">
                <MobileNav />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
