const CheckoutPriceDetails = () => {
  return (
    <div className="px-6 py-10">
      <ul className="mb-4">
        <li className="flex items-center justify-between gap-2 mb-3">
          <span className="text-sm text-slate-400">Sub Total</span>
          <span className="font-bold">$62.13</span>
        </li>
        <li className="flex items-center justify-between gap-2">
          <span className="text-sm text-slate-400">Tax (10%)</span>
          <span className="font-bold">$1.87</span>
        </li>
      </ul>
      <div className="border-dotted border-b border-gray-300 mb-4" />
      <div className="flex items-center justify-between gap-2">
        <span className="text-sm text-slate-400">Total</span>
        <span className="font-bold text-orange-500">$64.00</span>
      </div>
    </div>
  )
}

export default CheckoutPriceDetails
