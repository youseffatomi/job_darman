import ContactBG from "@/assets/images/Contact.png";

import Building from "@/assets/icons/fa-building-o.svg";
import Envelope from "@/assets/icons/fa-envelope.svg";
import Phone from "@/assets/icons/fa-phone.svg";
import {
  Input,
  Button,
  Textarea,
  Select,
  Checkbox,
} from "@/components/FormComponents";

const FormContact = () => (
  <form className="bg-white rounded-[5px] py-[58px] px-[49px] grid gap-[35px]">
    <div className="grid grid-cols-5 gap-[30px]">
      <div className="col-span-3">
        <Input placeholder="First name" label="YOUR NAME" />
      </div>
      <div className="col-span-2">
        <Select label="BUDGET">
          <option>500$</option>
          <option>100$</option>
        </Select>
      </div>
    </div>

    <Input placeholder="name@mail.com" label="INPUT FIELD" />

    <Textarea placeholder="Message" label="YOUR MESSAGE" />

    <div className="flex items-center justify-between">
      <div className="flex items-center ">
        <Checkbox />
        <span className="text-[#15143966]">Send me a copy</span>
      </div>

      <Button color="#25DAC5">send</Button>
    </div>
  </form>
);

const ContactItem = ({ icon, children }) => (
  <div className="flex items-start gap-[15px]">
    <img src={icon} className="w-[20px]" />
    <span>{children}</span>
  </div>
);

export default function Contact() {
  return (
    <section
      className=" grid place-items-center"
      style={{
        background: `url(${ContactBG}) no-repeat`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container py-[100px] flex justify-center gap-[130px]">
        {/* side left */}
        <div className="grid place-items-center">
          <div className="w-[400px] ">
            <h2
              className="text-[42px] font-bold"
              style={{ lineHeight: "52px" }}
            >
              Let’s Keep in Touch
            </h2>
            <p className="mt-[32px] text-[22px]">
              We have created a new product that will help designers, developers
              and companies create websites for their startups quickly and
              easily.
            </p>

            <div className="mt-[52px] grid gap-[40px] max-w-[282px]">
              <ContactItem icon={Phone}>+1 555 505 5050</ContactItem>
              <ContactItem icon={Envelope}>info@designmodo.com</ContactItem>
              <ContactItem icon={Building}>
                San Francisco, CA560 Bush St & 20th Ave, Apt5 San Francisco,
                230909
              </ContactItem>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-[470px]">
          <FormContact />
        </div>
      </div>
    </section>
  );
}
