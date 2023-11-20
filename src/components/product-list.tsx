import { Product } from "../../types";
import NoResults from "./no-results";
import ProductCard from "./product-card";

type ProductListProps = {
  title: string;
  products: Product[];
};

const ProductList = ({ title, products }: ProductListProps) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {products.length === 0 && <NoResults />}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
