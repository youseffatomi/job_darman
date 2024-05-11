import { useState } from "react";
import { Input } from "@/components/FormComponents";
import { Button } from "@/components/FormComponents";

const Tab = ({ showSignUp, SetShowSignUp }) => (
  <div className="text-label text-[14px] font-regular grid grid-cols-2">
    <button
      onClick={() => SetShowSignUp(true)}
      className={`py-[25px] uppercase border-b-[3px] border-solid transition-all ${
        showSignUp ? "border-label" : "border-[#EBEAED]"
      } `}
    >
      Sign Up
    </button>
    <button
      onClick={() => SetShowSignUp(false)}
      className={`py-[25px] uppercase border-b-[3px] border-solid transition-all ${
        !showSignUp ? "border-label" : "border-[#EBEAED]"
      }`}
    >
      Login
    </button>
  </div>
);

const SignUp = () => (
  <form className="pt-[69px] pb-[79px] px-[70px]">
    <div className="grid gap-[30px]">
      <Input placeholder="Your email" />
      <Input placeholder="Your password" />
    </div>

    <Button className="mt-[40px]" color="#25DAC5">
      Create an Account
    </Button>

    <div className="flex items-center gap-[16px] my-[30px]">
      <hr className="flex-grow border-[#141414] opacity-10" />
      <span className="text-[#141414]">or</span>
      <hr className="flex-grow border-[#141414] opacity-10" />
    </div>

    <Button color="#1DA1F2">Login via Twitter</Button>
  </form>
);

const Login = () => (
  <form className="pt-[69px] pb-[79px] px-[70px]">
    <div className="grid gap-[30px]">
      <Input placeholder="Your email" />
      <Input placeholder="Your password" />
    </div>

    <Button className="mt-[40px]" color="#25DAC5">
      Login
    </Button>
  </form>
);

export default function AuthForm() {
  const [showSignUp, SetShowSignUp] = useState(true);

  return (
    <div className="rounded-[5px] bg-white">
      <Tab {...{ showSignUp, SetShowSignUp }} />

      {showSignUp ? <SignUp /> : <Login />}
    </div>
  );
}
