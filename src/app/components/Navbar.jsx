"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  House,
  Palette,
  Clapperboard,
  UserRound,
} from "lucide-react";

const navItems = [
  {
    name: "Home",
    href: "/",
    icon: House,
  },
  {
    name: "Design",
    href: "/design",
    icon: Palette,
  },
  {
    name: "Stories",
    href: "/stories",
    icon: Clapperboard,
  },
  {
    name: "About",
    href: "/about",
    icon: UserRound,
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <nav className="fixed left-1/2 top-5 z-50 hidden -translate-x-1/2 md:block">
        <div className="flex items-center gap-1 rounded-full border border-black/10 bg-white/60 p-2 shadow-lg backdrop-blur-xl">
          
          <Link
            href="/"
            className="px-4 py-2 font-semibold"
          >
            ByMayank.
          </Link>

          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  active
                    ? "bg-black text-white"
                    : "text-black/60 hover:bg-black/5 hover:text-black"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* MOBILE TAB BAR */}
      <nav className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-24px)] -translate-x-1/2 md:hidden">
        <div className="flex items-center justify-around rounded-[28px] border border-black/10 bg-white/70 px-2 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.12)] backdrop-blur-2xl">

          {navItems.map((item) => {
            const active = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex min-w-[64px] flex-1 flex-col items-center justify-center gap-1 rounded-[20px] px-2 py-2 transition-all duration-300 ${
                  active
                    ? "bg-black text-white"
                    : "text-black/50 hover:bg-black/5"
                }`}
              >
                <Icon
                  size={19}
                  strokeWidth={active ? 2.3 : 1.8}
                />

                <span className="text-[11px] font-medium">
                  {item.name}
                </span>
              </Link>
            );
          })}

        </div>
      </nav>
    </>
  );
}