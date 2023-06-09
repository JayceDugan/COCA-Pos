import NavigationItem from "@/app/dashboard/navigationItem";
import { BookmarkIcon, DocumentChartBarIcon, DocumentIcon, HomeIcon, UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const navigationItems = [
  {
    route: "/dashboard",
    label: "Home",
    icon: <HomeIcon className="h-8 w-8" />
  },
  {
    route: "/dashboard/orders",
    label: "Orders",
    icon: <DocumentChartBarIcon className="h-8 w-8" />
  },
  {
    route: "/dashboard/history",
    label: "History",
    icon: <BookmarkIcon className="h-8 w-8" />
  },
  {
    route: "/dashboard/bills",
    label: "Bills",
    icon: <DocumentIcon className="h-8 w-8" />
  },
  {
    route: "/dashboard/customers",
    label: "Customers",
    icon: <UserIcon className="h-8 w-8" />
  },
]

const NavigationItems = navigationItems.map((item) => <NavigationItem key={`navigation-item-${item.label}`} { ...item } />);

const Navigation = () => {
  return (
    <nav>
      <ul className="flex row items-center justify-end gap-7">
        { NavigationItems }
      </ul>
    </nav>
  )
}

export default Navigation
