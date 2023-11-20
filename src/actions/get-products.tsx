import queryString from "query-string";
import { Product } from "../../types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

type Query = {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: string;
};

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = queryString.stringifyUrl({
    url: URL,
    query,
  });

  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export default getProducts;
