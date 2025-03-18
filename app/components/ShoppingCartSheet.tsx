"use client";

import { useShoppingCart } from "use-shopping-cart";
import { ImCross } from "react-icons/im";
import Image from "next/image";

export default function ShoppingCartModal() {
  const {
    cartCount,
    shouldDisplayCart,
    handleCloseCart,
    cartDetails,
    removeItem,
    totalPrice,
    handleCartClick,
    redirectToCheckout,
  } = useShoppingCart();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function handleCheckoutClick(event: any) {
    event.preventDefault();
    try {
      const result = await redirectToCheckout();
      if (result?.error) {
        console.log(result);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div
        className={`${shouldDisplayCart ? "right-0" : "-right-full"} absolute top-0 z-10 h-full min-h-screen w-full max-w-xs border-l-4 border-stone-800 bg-stone-100 transition-all sm:max-w-md`}
      >
        <div className="flex justify-end">
          <button
            onClick={() => {
              handleCloseCart();
              document.body.classList.remove("overflow-hidden");
            }}
            className="cursor-pointer p-4"
          >
            <ImCross className="text-2xl" />
          </button>
        </div>
        <div className="flex flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="divide-y border-t">
              {cartCount === 0 ? (
                <h1>You have {cartCount} items.</h1>
              ) : (
                <>
                  {Object.values(cartDetails ?? {}).map((entry) => (
                    <li key={entry.id} className="flex px-2 py-3">
                      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden border border-stone-800">
                        <Image
                          src={entry.image as string}
                          alt="Product image"
                          fill={true}
                          quality={30}
                          sizes={"100%"}
                          className="object-cover"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-stone-800">
                            <h3>{entry.name}</h3>
                            <p className="ml-4">${entry.price}</p>
                          </div>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-stone-500">
                            QTY: {entry.quantity}
                          </p>
                          <div className="flex">
                            <button
                              type="button"
                              onClick={() => removeItem(entry.id)}
                              className="font-medium text-stone-500 hover:cursor-pointer hover:text-stone-800"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
          <div className="border-t border-stone-500 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-semibold text-stone-800">
              <p>Subtotal:</p>
              <p>${totalPrice?.toFixed(2)}</p>
            </div>
            <p className="mt-0.5 text-sm text-stone-500">
              Shipping and taxes are calculated at checkout.
            </p>
            <div className="mt-6">
              <button
                onClick={handleCheckoutClick}
                className="w-full cursor-pointer bg-stone-800 py-3 font-medium text-stone-100 uppercase"
              >
                Checkout
              </button>
            </div>
            <div className="flex flex-col justify-center text-center text-sm text-stone-500">
              <p className="mt-3">OR</p>
              <button
                onClick={() => {
                  handleCartClick();
                }}
                className="py-3 font-medium text-stone-500 hover:cursor-pointer hover:text-stone-800"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>

      {shouldDisplayCart && (
        <div
          onClick={() => {
            handleCloseCart();
            document.body.classList.remove("overflow-hidden");
          }}
          className="absolute top-0 left-0 h-screen w-screen bg-stone-800 opacity-30"
        ></div>
      )}
    </>
  );
}
