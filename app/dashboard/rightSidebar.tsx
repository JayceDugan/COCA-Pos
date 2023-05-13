import CheckoutOrderDetails from "@/app/dashboard/checkoutOrderDetails";
import CheckoutPriceDetails from "@/app/dashboard/checkoutPriceDetails";
const BuyPanel = () => {
  return (
    <div>
      <h2 className="text-xl my-4 font-medium">Customer Information</h2>

      <section className="bg-slate-200 p-1 rounded-full mb-2">
        <input type="text" className="bg-white p-3 w-full rounded-full border-none outline-none" placeholder="Customer Name" />
      </section>

      <section className="bg-slate-200 p-1 rounded-full">
        <input type="text" className="bg-white p-3 w-full rounded-full border-none outline-none" placeholder="Select Table" />
      </section>

      <button type="submit" className="bg-orange-100 text-orange-500 rounded-full w-full p-4 font-bold mt-3">
        Add note
      </button>
    </div>
  )
}

const RightSidebar = () => {
  return (
    <div className="w-[360px] h-full border-l border-gray-300 mb-10">
      <div className="px-6 py-4">
        <section className="bg-slate-200 rounded-3xl grid grid-cols-2 p-2">
          <button className="rounded-3xl bg-white py-2">
            Buy
          </button>
          <button className="rounded-3xl py-2">
            Reservation
          </button>
        </section>

        <BuyPanel />
      </div>

      <div className="w-full h-0.5 bg-slate-200 mb-4" />

      <CheckoutOrderDetails />
      <CheckoutPriceDetails />
      <div className="px-3">
        <button className="h-[48px] bg-orange-500 w-full px-6 py-4 rounded-full text-white leading-3">Pay Now</button>
      </div>
    </div>
  )
}

export default RightSidebar
