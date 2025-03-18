import { client } from "../lib/sanity";
import { simplifiedProduct } from "../interface";
import ProductList from "../components/ProductList";

async function getData(category: string) {
  let query;
  if (category.toLocaleLowerCase() === "all") {
    query = `*[_type == "product"] {
  _id, price, name, "slug": slug.current,
    "categoryName": category->name,
    "imageUrl": images[0].asset->url
}`;
  } else {
    query = `*[_type == "product" && category->name == "${category}"] {
    _id,
      price,
      name,
      "slug": slug.current,
      "categoryName": category->name,
      "imageUrl": images[0].asset->url
  }`;
  }

  const data = await client.fetch(query);
  return data;
}

export const dynamic = "force-dynamic";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const data: simplifiedProduct[] = await getData(category);
  return (
    <section id={category} className="mt-10">
      <h2 className="mb-10 border-b-2 border-stone-800 text-2xl font-bold uppercase">
        {category}
      </h2>
      <ProductList products={data} />
    </section>
  );
}
