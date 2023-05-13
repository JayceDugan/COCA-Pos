"use client";

import { HomeIcon } from "@heroicons/react/24/outline";
import cx from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardSidebarItems = [
  {
    icon: <HomeIcon className="w-5 h-5" />,
    label: 'Coffee',
    route: '/dashboard/coffee'
  },
  {
    icon: <HomeIcon className="w-5 h-5" />,
    label: 'Beverages',
    route: '/dashboard/beverages'
  },
  {
    icon: <HomeIcon className="w-5 h-5" />,
    label: 'Food',
    route: '/dashboard/food'
  },
  {
    icon: <HomeIcon className="w-5 h-5" />,
    label: 'Appetizer',
    route: '/dashboard/appetizers'
  },
  {
    icon: <HomeIcon className="w-5 h-5" />,
    label: 'Bread',
    route: '/dashboard/bread'
  },
  {
    icon: <HomeIcon className="w-5 h-5" />,
    label: 'Snack',
    route: '/dashboard/snack'
  },
]

const DashboardSidebar = () => {
  const pathname = usePathname();

  return (
    <div className="w-[125px] border-r border-gray-300 py-10 px-6">
      <ul className="flex flex-col justify-center text-center gap-2">
        { DashboardSidebarItems.map((item) => (
          <Link
            key={`sidebar-${item.route}`}
            href={item.route}
            className={cx('text-center flex flex-col justify-center items-center py-4 gap-1 font-medium text-xs transition-all', {
              'background-gradient text-white rounded-md': pathname === item.route,
              'text-slate-400': pathname !== item.route,
            })}
          >
            { item.icon }
            { item.label }
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default DashboardSidebar
