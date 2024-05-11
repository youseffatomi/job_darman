import { Link } from "react-router-dom";
import Behance from "./../../assets/icons/fa-behance.svg";
import Dribbble from "./../../assets/icons/fa-dribbble.svg";

export default function Nav() {
  const List = [
    { name: "Home", link: "", isActive: true },
    { name: "Features", link: "", isActive: false },
    { name: "Pricing", link: "", isActive: false },
    { name: "Blog", link: "", isActive: false },
    { icon: Behance, link: "" },
    { icon: Dribbble, link: "" },
  ];

  return (
    <nav className="container">
      <ul className="flex items-center gap-[43px]  absolute top-[85px] left-1/2 -translate-x-1/2">
        {List.map((L, i) => (
          <li key={i} className={L.isActive && "opacity-30"}>
            <Link to={L.link} className="text-[18px] ">
              {L?.name && L.name}
              {L?.icon && <img src={L.icon} />}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
