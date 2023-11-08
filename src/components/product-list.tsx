import Image from "next/image";
import { Product } from "../../types";
import NoResults from "./no-results";
import { Card, CardContent, CardFooter } from "./ui/card";
import IconButton from "./icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import { priceFormatter } from "@/lib/utils";

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
          <Card key={product.id} className="hover:cursor-pointer group">
            <CardContent className="p-3">
              <div className="aspect-square relative bg-gray-100">
                <Image
                  src={product.images[0].url}
                  alt="product"
                  fill
                  className="rounded-xl object-cover"
                />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                  <div className="flex gap-x-6 justify-center">
                    <IconButton
                      icon={<Expand size={20} className="text-gray-600" />}
                    />
                    <IconButton
                      icon={
                        <ShoppingCart size={20} className="text-gray-600" />
                      }
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex flex-col">
                <p className="font-semibold text-lg">{product.name}</p>
                <p className="text-muted-foreground text-sm">
                  {product.category.name}
                </p>
                <div className="font-semibold">
                  {priceFormatter(Number(product.price))}
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
