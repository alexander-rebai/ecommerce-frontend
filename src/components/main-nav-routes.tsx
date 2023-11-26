"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Category } from "../../types";
import { CategoryDropover } from "./ui/category-dropover";

const MainNavRoutes = ({ data }: { data: Category[] }) => {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={"flex items-center mx-6 space-x-4 lg:space-x-6"}>
      {isMobile ? (
        <CategoryDropover categories={routes} />
      ) : (
        routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              route.active
                ? "text-primary dark:text-white"
                : "text-muted-foreground"
            )}
          >
            {route.label}
          </Link>
        ))
      )}
    </nav>
  );
};

export default MainNavRoutes;
