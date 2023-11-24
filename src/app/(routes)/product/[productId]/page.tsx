import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Container from "@/components/container";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import ProductList from "@/components/product-list";

export const revalidate = 0;

const ProductPage = async ({
  params,
}: {
  params: {
    productId: string;
  };
}) => {
  const product = await getProduct(params.productId);

  const suggestedProducts = await getProducts({
    categoryId: product.category.id,
  });

  return (
    <div className="bg-white">
      <Container>
        <div className="px-6 py-10 md:px-4 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <div className="mt-16 px-0 md:mt-10 md:px-4 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-16 border-gray-200" />
          <ProductList
            title="Suggested Products"
            products={suggestedProducts}
          />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
