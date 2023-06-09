import CheckoutOrderDetails from "@/app/dashboard/checkoutOrderDetails";
import CheckoutPriceDetails from "@/app/dashboard/checkoutPriceDetails";
const BuyPanel = () => {
  return (
    <div>
      <h2 className="text-xl my-4 font-medium">Customer Information</h2>

      <section className="bg-slate-100 p-0.5 rounded-full mb-2">
        <input type="text" className="bg-white py-2 w-full rounded-full border-none outline-none text-sm text-slate-100" placeholder="Customer Name" />
      </section>

      <section className="bg-slate-100 p-0.5 rounded-full">
        <input type="text" className="bg-white py-2 w-full rounded-full border-none outline-none text-sm text-slate-100" placeholder="Select Table" />
      </section>

      <button type="submit" className="bg-orange-100 text-orange-500 rounded-full w-full py-2 font-medium mt-3">
        Add note
      </button>
    </div>
  )
}

const RightSidebar = () => {
  return (
    <div className="w-[360px] h-full border-l border-gray-300 mb-10 grid grid-rows-[auto_auto_1fr_min-content] overflow-hidden">
      <div className="px-6 py-4">
        <section className="bg-slate-100 rounded-3xl grid grid-cols-2 p-1">
          <button className="rounded-3xl bg-white py-1 text-sm">
            Buy
          </button>
          <button className="rounded-3xl py-2 text-sm">
            Reservation
          </button>
        </section>

        <BuyPanel />
      </div>

      <div className="w-full h-0.5 bg-slate-100 mb-4" />

      <CheckoutOrderDetails />

      <div className="min-h-[296px] pt-4">
        <CheckoutPriceDetails />

        <div className="px-3 mt-6">
          <button className="h-[48px] bg-orange-500 w-full px-6 py-4 rounded-full text-white leading-3">Pay Now</button>
        </div>
      </div>
    </div>
  )
}

export default RightSidebar
