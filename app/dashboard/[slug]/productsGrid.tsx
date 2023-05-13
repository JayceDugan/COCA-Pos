import ProductsGridItem from "@/app/dashboard/[slug]/productsGridItem";
import { faker } from '@faker-js/faker';
export interface Product {
  id: string,
  image: string,
  title: string,
  price: string
}

const generateRandomProduct = () => ({
  id: faker.string.uuid(),
  image: faker.image.urlLoremFlickr({ category: 'food' }),
  title: faker.commerce.productName(),
  price: faker.commerce.price()
})

const getProducts = () => {
  const data: Product[] = []

  return () => {
    if (data.length > 0) return data;

    for (let i = 0; i < 20; i++) {
      data.push(generateRandomProduct())
    }

    return data;
  }
}

export default function ProductsGrid() {
  const productsLoader = getProducts();
  const products = productsLoader();

  if (!products.length) return null;

  return (
    <ul className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 p-4 bg-slate-100 pb-36">
      { products.map((product) => <ProductsGridItem { ...product } />)}
    </ul>
  );
}
