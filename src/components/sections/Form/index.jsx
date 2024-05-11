import FormBG from "@/assets/images/form-bg.png";
import AuthForm from "./AuthForm";

export default function FormSection() {
  return (
    <section
      className=" grid place-items-center"
      style={{
        background: `url(${FormBG}) no-repeat`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container py-[100px] flex justify-center gap-[130px]">
        {/* heading */}

        <div className="grid place-items-center">
          <div className="w-[369px] ">
            <h2
              className="text-[42px] font-bold"
              style={{ lineHeight: "52px" }}
            >
              We solve digital problems with an outstanding creative flare
            </h2>
            <p className="mt-[32px]">
              We have created a new product that will help designers, developers
              and companies create websites for their startups quickly and
              easily.
            </p>
          </div>
        </div>

        {/* Auth Form */}
        <div className="w-[470px]">
          <AuthForm />
        </div>
      </div>
    </section>
  );
}
