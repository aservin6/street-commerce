import Link from "next/link";

export default function Header() {
  return (
    <div className="flex w-full max-w-lg flex-col space-y-8 p-3">
      <h1 className="text-4xl font-bold uppercase">
        <p>Wear the Culture.</p>
        <p>Own the Streets.</p>
      </h1>
      <p className="text-lg font-bold">
        Step into a world where fashion meets attitude. Our streetwear
        isn&apos;t just clothing—it&apos;s a movement. Designed for those who
        dare to stand out, our pieces blend urban culture, modern trends, and
        raw authenticity.
      </p>
      <button className="w-full max-w-3xs cursor-pointer bg-stone-800 py-3 font-medium text-stone-100 uppercase">
        <Link href="/all">Start Shopping</Link>
      </button>
    </div>
  );
}
