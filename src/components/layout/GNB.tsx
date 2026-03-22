"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/constants";
import type { NavItem } from "@/types";

interface GNBProps {
  scrolled: boolean;
}

export function GNB({ scrolled }: GNBProps) {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-2">
      {NAV_ITEMS.map((item) => (
        <NavMenuItem key={item.id} item={item} scrolled={scrolled} pathname={pathname} />
      ))}
    </nav>
  );
}

function NavMenuItem({
  item,
  scrolled,
  pathname,
}: {
  item: NavItem;
  scrolled: boolean;
  pathname: string;
}) {
  const isActive = pathname === item.href || pathname.startsWith(item.href + "/");

  return (
    <div className="relative group">
      <Link
        href={item.href}
        className={`px-3 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
          isActive
            ? "text-amber-500"
            : scrolled
            ? "text-gray-700 hover:text-amber-600"
            : "text-white/90 hover:text-white"
        }`}
      >
        {item.label}
      </Link>

      {/* Dropdown */}
      {item.children && item.children.length > 0 && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-44 overflow-hidden">
            {item.children.map((child) => (
              <Link
                key={child.id}
                href={child.href}
                className={`block px-4 py-2.5 text-sm transition-colors ${
                  pathname === child.href
                    ? "bg-amber-50 text-amber-700 font-medium"
                    : "text-gray-700 hover:bg-gray-50 hover:text-amber-600"
                }`}
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
