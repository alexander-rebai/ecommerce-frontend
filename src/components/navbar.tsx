import Link from "next/link";
import { Category } from "../../types";
import Container from "./container";
import MainNavRoutes from "./main-nav-routes";
import NavbarActions from "./navbar-actions";

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
