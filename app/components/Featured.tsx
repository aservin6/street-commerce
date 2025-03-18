import { client } from "../lib/sanity";
import { simplifiedProduct } from "../interface";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const query = `*[_type == "product"][0...4] | order(_createdAt desc) {
        _id,
          price,
        name,
          "slug": slug.current,
          "categoryName": category->name,
          "imageUrl": images[0].asset->url
      }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Featured() {
  const data: simplifiedProduct[] = await getData();
  return (
    <div className="px-3 lg:px-0">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Featured
          </h2>

          <Link
            className="text-primary flex items-center gap-x-1 hover:underline"
            href="/all"
          >
            See All
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product, index) => (
            <Link href={`/product/${product.slug}`} key={index}>
              <div
                key={product._id}
                className="group relative border-2 shadow-[-5px_5px_0px_0px_#292524]"
              >
                <div className="w-full overflow-hidden border-b-2 bg-gray-200 group-hover:opacity-75 lg:h-80">
                  <Image
                    src={product.imageUrl}
                    alt="Product image"
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    width={300}
                    height={300}
                  />
                </div>

                <div className="space-y-3 p-3">
                  <div className="flex flex-col justify-between">
                    <span className="font-bold">{product.name}</span>
                    <span>${product.price.toFixed(2)}</span>
                  </div>
                  <div>
                    <span className="text-stone-500 italic">
                      {product.categoryName}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
