import Logo from "@/app/Logo";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import Navigation from './navigation';

 const TopBar = () => {
  return (
    <div className="p-4 grid grid-cols-[auto_auto_1fr] gap-6 items-center row border-b border-gray-300">
      <button className="border rounded-full p-2 col-auto">
        <ArrowLeftIcon className="text-slate-400 h-6 w-6" />
      </button>

      <div className="h-10 w-0.5 bg-slate-200" />

      <div className="grid grid-cols-2 items-center justify-between">
        <div className="flex items-center gap-6">
          <Logo />

          <div>
            <p className="font-bold">Walk-In</p>
            <p className="text-slate-400">Coco coffeetalk</p>
          </div>
        </div>

        <Navigation />
      </div>
    </div>
  )
}

export default TopBar;
