import Link from "next/link";
import Container from "./container";
import MainNavRoutes from "./main-nav-routes";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";
import { Category } from "../../types";

const Navbar = ({ categories }: { categories: Category[] }) => {
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <MainNavRoutes data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
