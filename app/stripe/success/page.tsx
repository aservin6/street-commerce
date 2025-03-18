import Link from "next/link";
import { LuCheckCheck } from "react-icons/lu";

export default function StripeSuccess() {
  return (
    <div className="">
      <div className="mx-auto mt-12 md:max-w-[50vw]">
        <LuCheckCheck className="mx-auto my-6 h-16 w-16 text-green-600" />
        <div className="space-y-3 text-center">
          <h3 className="text-center text-base font-semibold text-stone-800 md:text-2xl">
            Payment Done!
          </h3>
          <p className="text-stone-500">Thank you for your purchase!</p>
          <button className="w-full max-w-3xs cursor-pointer bg-stone-800 py-3 font-medium text-stone-100 uppercase">
            <Link href="/">Go back</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
