import Link from "next/link";
import { Category } from "../../types";
import Container from "./container";
import MainNavRoutes from "./main-nav-routes";
import NavbarActions from "./navbar-actions";

const Navbar = ({ categories }: { categories: Category[] }) => {
  return (
    <div className="border-b sticky left-0 top-0 z-50 bg-white">
      <Container>
        <div className=" px-2 md:px-4 lg:px-8 flex h-16 items-center">
          <Link href="/" className="md:ml-4 flex lg:ml-0 gap-x-2">
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
