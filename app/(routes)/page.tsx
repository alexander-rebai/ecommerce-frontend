import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import Container from "@/components/container";
import ProductList from "@/components/product-list";

const HomePage = async () => {
  const billboard = await getBillboard("cloe8eppd000442l4iuz5do0f");
  const products = await getProducts({
    isFeatured: "true",
  });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
      <div className="flex flex-col gap-y-8 px-4 md:px-6 lg:px-8">
        <ProductList title="Featured Products" products={products} />
      </div>
    </Container>
  );
};

export default HomePage;
