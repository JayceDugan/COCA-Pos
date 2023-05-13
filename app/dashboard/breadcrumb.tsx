"use client";

import cx from "classnames";
import { usePathname } from "next/navigation";

export const DashboardBreadcrumb: React.FC = () => {
  const pathname = usePathname()
  const paths = pathname.split('/').slice(1);
  const breadcrumbItems = paths.map((path, index) => {
    return (
      <li key={path} className={
        cx('capitalize', {
          'text-orange-500': index !== paths.length - 1
        })
      }>
        { path }
        { index !== paths.length - 1 && <span className="ml-2">/</span>}
      </li>
    )
  })


  return (
    <nav className="border-b border-gray-300 py-2 px-6">
      <ul className="flex row items-center gap-2">
        { breadcrumbItems }
      </ul>
    </nav>
  )
}
