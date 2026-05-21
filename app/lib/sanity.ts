import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "53qay9zh",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source);
}

export function optimizeSanityImageUrl(
  url: string,
  { width = 800, quality = 75 }: { width?: number; quality?: number } = {},
) {
  if (!url.includes("cdn.sanity.io")) return url;

  const imageUrl = new URL(url);
  imageUrl.searchParams.set("auto", "format");
  imageUrl.searchParams.set("fit", "max");
  imageUrl.searchParams.set("w", width.toString());
  imageUrl.searchParams.set("q", quality.toString());

  return imageUrl.toString();
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function optimizedSanityImage(source: any, width = 800, quality = 75) {
  return urlFor(source)
    .width(width)
    .quality(quality)
    .fit("max")
    .auto("format")
    .url();
}
