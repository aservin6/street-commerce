import { client, optimizedSanityImage } from "../lib/sanity";
import Image from "next/image";

async function getData() {
  const query = "*[_type == 'heroImage'][0]";
  const data = await client.fetch(query);
  return data;
}

export default async function Hero() {
  const data = await getData();
  return (
    <div className="relative bg-stone-800 sm:bg-transparent">
      <div className="relative mx-auto block w-2/3 sm:w-full">
        <Image
          src={optimizedSanityImage(data.image1, 900, 80)}
          alt="Hero image"
          className="object-contain"
          priority
          width={900}
          height={1600}
          sizes="(max-width: 640px) 67vw, 50vw"
          quality={80}
        />
      </div>
    </div>
  );
}
