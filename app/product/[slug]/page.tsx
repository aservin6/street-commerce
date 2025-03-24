import { fullProduct } from "@/app/interface";
import { client, urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import { ImStarEmpty, ImTruck } from "react-icons/im";
import AddToCart from "@/app/components/AddToCart";

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0]{
  _id,
    images,
    price,
    name,
    description,
    "slug": slug.current,
    "categoryName": category->name,
    price_id
}`;

  const data = await client.fetch(query);
  return data;
}

function ProductRating() {
  return (
    <div className="flex items-center space-x-2">
      <div className="flex w-fit items-center justify-between space-x-3 border border-stone-800 px-1.5 shadow-[-2px_2px_0px_0px_#292524]">
        <span className="font-semibold">4.6</span>
        <ImStarEmpty className="size-4" />
      </div>
      <span>(23) ratings</span>
    </div>
  );
}

function ShippingDetails() {
  return (
    <div className="mt-4 flex items-center justify-end space-x-3 text-sm text-stone-500 sm:mt-0 sm:justify-start">
      <ImTruck />
      <span>2-5 Day Shipping</span>
    </div>
  );
}

function Description() {
  return (
    <div className="mt-12">
      <h3 className="font-semibold text-stone-500 uppercase">Description:</h3>
      <p className="text-sm leading-relaxed text-stone-800">
        Lorem ipsum odor amet, consectetuer adipiscing elit. Est parturient
        nascetur massa ante; platea luctus potenti. Consequat egestas nulla
        pharetra integer euismod at; sodales fusce leo? Suscipit lobortis
        laoreet purus semper aliquet egestas cubilia montes fermentum.
      </p>
    </div>
  );
}

function ProductDetails(data: fullProduct) {
  const { name, price, categoryName, images, _id, price_id } = data;
  return (
    <div className="mt-3 w-full px-3 sm:mt-0">
      <div className="flex items-center justify-between sm:flex-col-reverse sm:items-start sm:space-y-1.5">
        <h1 className="text-lg font-bold">{name}</h1>
        <p className="text-sm text-stone-500 italic">{categoryName}</p>
      </div>
      <div className="flex items-center justify-between space-y-3 sm:flex-col-reverse sm:items-start">
        <p className="text-lg sm:mt-12 sm:mb-8 sm:text-xl sm:font-bold">
          ${price}
        </p>
        <ProductRating />
      </div>
      <ShippingDetails />
      <AddToCart
        name={name}
        price={price}
        currency="USD"
        image={images[0]}
        key={_id}
        price_id={price_id}
      />
      <Description />
    </div>
  );
}

function ProductImage({ name, imageUrl }: { name: string; imageUrl: string }) {
  return (
    <div className="relative block border-2 border-stone-800 shadow-[-5px_5px_0px_0px_#292524] sm:max-w-md">
      <Image
        src={imageUrl}
        alt={name}
        width={900}
        height={1600}
        quality={100}
        className="w-full object-contain"
      />
    </div>
  );
}

export const dynamic = "force-dynamic";
//
// Main component
export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data: fullProduct = await getData(slug);

  return (
    <div>
      {data && (
        <div className="flex flex-col sm:flex-row sm:gap-x-8">
          <ProductImage
            imageUrl={urlFor(data.images[0]).url()}
            name={data.name}
          />
          <ProductDetails {...data} />
        </div>
      )}
    </div>
  );
}
