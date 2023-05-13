import { useId } from "react";
import { NavigationItemLink } from "@/app/dashboard/navigationItemLink";

export interface NavigationItemProps {
  route: string;
  label: string;
  icon?: React.ReactNode
}

const NavigationItem: React.FC<NavigationItemProps> = (props) => {
  const id = useId();

  return (
    <li id={id}>
      <NavigationItemLink { ...props } />
    </li>
  )
}

export default NavigationItem;
