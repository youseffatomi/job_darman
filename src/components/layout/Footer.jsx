import { Link } from "react-router-dom";
import Facebook from "@/assets/icons/fa-facebook-square.svg";
import Google from "@/assets/icons/fa-google-plus.svg";
import Twitter from "@/assets/icons/fa-twitter.svg";

export default function Footer() {
  const List = [
    { name: "Privacy Policy", link: "" },
    { name: "Terms", link: "" },

    { icon: Twitter, link: "" },
    { icon: Google, link: "" },
    { icon: Facebook, link: "" },
  ];

  const List2 = [
    { name: "Tour", link: "" },
    { name: "Features", link: "" },
    { name: "Pricing Plans", link: "" },
    { name: "Our Works", link: "" },
    { name: "Brands", link: "" },
    { name: "Contacts", link: "" },
  ];

  return (
    <footer className="bg-footer py-[50px]">
      <div className="container">
        <div className="flex items-center justify-between">
          <p>Startup 3</p>

          <div className="flex items-center gap-[27px]">
            {List.map(({ name, icon, link }, i) => (
              <Link to={link} key={i}>
                {name && <span>{name}</span>}
                {icon && <img src={icon} />}
              </Link>
            ))}
          </div>
        </div>
        {/*  */}
        <hr className="my-[48px]" />
        {/*  */}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[27px]">
            {List2.map(({ name, link }, i) => (
              <Link to={link} key={i}>
                {name}
              </Link>
            ))}
          </div>
          <p>© 2017 Designmodo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
