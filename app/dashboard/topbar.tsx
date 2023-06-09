"use client";

import Logo from "@/app/Logo";
import { logoutCurrentUser } from "@/data-access/redux/features/currentUser/currentUser";
import { useAppDispatch } from "@/data-access/redux/hooks";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import Navigation from './navigation';

 const TopBar = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const handleLeaveClick = () => {
    dispatch(logoutCurrentUser());
    router.push('/login');
  }

  return (
    <div className="p-4 grid grid-cols-[auto_auto_1fr] gap-6 items-center row border-b border-gray-300">
      <button className="border rounded-full p-2 col-auto" onClick={handleLeaveClick}>
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
