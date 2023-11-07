"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { Category } from "../../types";
import { cn } from "@/lib/utils";

export type Route = {};

const MainNavRoutes = ({ data }: { data: Category[] }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className={"flex items-center mx-6 space-x-4 lg:space-x-6"}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            route.active
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNavRoutes;
