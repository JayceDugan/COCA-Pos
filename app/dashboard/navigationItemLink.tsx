"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import cx from 'classnames';

export interface NavigationItemLinkProps {
  route: string;
  label: string;
  icon?: React.ReactNode
}

export const NavigationItemLink: React.FC<NavigationItemLinkProps> = ({ route, icon, label }) => {
  const pathname = usePathname()
  const isActive = pathname === route;

  return (
    <Link href={route} className={
      cx('flex flex-row items-center gap-2', {
        'text-slate-400': !isActive,
        'font-bold text-orange-500': isActive
      })
    }>
      { icon }
      { label }
    </Link>
    )
}

