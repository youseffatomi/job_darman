import PricingBG from "@/assets/images/Pricing-Table.png";
import Check from "@/assets/icons/Check-Icon.png";
import { Button } from "@/components/FormComponents";

const PricingTable = ({ heading, price, data, CTA }) => (
  <div className="border-2 border-solid border-[#ffffff31] rounded-[10px] px-[44px] pt-[64px] pb-[56px]">
    {/* price */}
    <div>
      <p className="font-regular text-[22px]">{heading}</p>
      <div className="flex items-start gap-[10px]">
        <span className="font-regular text-[58px]">{price}</span>
        <span>$</span>
      </div>
    </div>

    {/* options */}

    <div className="grid gap-[10px] mb-[30px]">
      {data &&
        data.map(({ isCheck, text }, i) => (
          <div key={i} className="flex items-center gap-[12px]">
            <div className="w-[12px]">
              {isCheck && <img src={Check} alt="check icon" />}
            </div>
            <span className={`${!isCheck && "opacity-70"}`}>{text}</span>
          </div>
        ))}
    </div>

    {/* button */}
    <Button
      color="#E93A7D"
      className={`mx-auto !py-[17px] !px-[60px] ${
        !CTA && "!bg-transparent border-2 border-solid border-[#ffffff31]"
      }`}
    >
      Get Started
    </Button>
  </div>
);

export default function Pricing() {
  const Options = [
    {
      isCheck: true,
      text: "2 GB of space",
    },
    {
      isCheck: true,
      text: "14 days of backups",
    },
    {
      isCheck: true,
      text: "Social integrations",
    },
    {
      isCheck: true,
      text: "Client billing",
    },
    {
      isCheck: true,
      text: "Remote access",
    },
    {
      text: "Custom domain",
    },
    {
      text: "24 hours support",
    },
    {
      text: "Admin tools",
    },
    {
      text: "Collaboration tools",
    },
    {
      text: "User management",
    },
  ];

  return (
    <section
      className=" grid place-items-center"
      style={{
        background: `url(${PricingBG}) no-repeat`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container py-[100px]">
        <div className="flex flex-col items-center text-center gap-[30px]">
          <h2 className="text-[42px] font-bold">Plans & Pricing</h2>
          <p className="text-[22px] max-w-[586px]">
            Startup Framework is free forever — you only pay for custom domain
            hosting or to export your site.
          </p>
        </div>
        <div className="grid gap-[30px] grid-cols-3 mt-[56px]">
          <PricingTable heading="Starter" price="9.99" data={Options} />
          <PricingTable
            heading="Professional"
            price="19.99"
            data={Options}
            CTA={true}
          />
          <PricingTable heading="Team" price="49.99" data={Options} />
        </div>
      </div>
    </section>
  );
}
