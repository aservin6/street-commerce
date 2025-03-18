import { simplifiedProduct } from "../interface";
import Image from "next/image";
import Link from "next/link";

function ProductCard({ productData }: { productData: simplifiedProduct }) {
  return (
    <li className="border-2 border-stone-800 shadow-[-5px_5px_0px_0px_#292524] hover:bg-stone-200">
      <Link href={`/product/${productData.slug}`}>
        <div className="relative h-72 w-full border-b sm:h-96">
          <Image
            src={productData.imageUrl}
            alt={productData.name}
            fill={true}
            sizes={"50%"}
            quality={75}
            className="object-contain"
          />
        </div>
        <div className="space-y-3 p-3">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold">{productData.name}</span>
            <span className="text-stone-500 italic">
              {productData.categoryName}
            </span>
          </div>
          <div>
            <span className="text-lg">${productData.price.toFixed(2)}</span>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default function ProductList({
  products,
}: {
  products: simplifiedProduct[];
}) {
  return (
    <div>
      <ul className="grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-8">
        {products.map((product) => {
          return <ProductCard key={product._id} productData={product} />;
        })}
      </ul>
    </div>
  );
}
