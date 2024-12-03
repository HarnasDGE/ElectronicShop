import Link from "next/link";
import { Button } from "./Button";
import Image from "next/image";
import { TextWithHorizontalLine } from "./TextWithHorizontalLine";

export const LoginModal = ({ onClose }) => {
  return (
    <div className="fixed bg-black/75 top-0 left-0 w-full h-full z-[9999] flex justify-center items-center">
      <div className="relative bg-background rounded-3xl p-20 flex flex-col justify-center items-center min-w-[800px] ">
        <h2 className="font-bold">Create Your Account</h2>
        <p>Let's get started with your 30days free trial</p>

        <Button color="none" className="rounded-full w-full my-8">
          <Image
            src="/images/icons/google.png"
            height={55}
            width={55}
            alt="Google icon"
          />{" "}
          Login with Google
        </Button>
        <TextWithHorizontalLine>Or</TextWithHorizontalLine>
        <form className="flex flex-col w-full py-8">
          <label htmlFor="loginEmail" className="ml-8">
            Enter your E-mail
          </label>
          <input
            type="email"
            id="loginEmail"
            className="w-full bg-lightGray p-4 rounded-full"
          />
          <label htmlFor="loginPassword" className="ml-8 mt-3 ">
            Password
          </label>
          <input
            type="password"
            id="loginPassword"
            className="w-full bg-lightGray p-4 rounded-full"
          />
          <div className="flex justify-between py-2 font-bold">
            <div className="flex items-center">
              <input type="checkbox" id="loginRemember" />
              <label htmlFor="loginRemember" className="ml-2">
                Remember me
              </label>
            </div>
            <Link href="/reset-password">Forgot Password?</Link>
          </div>
          <Button
            color="second"
            type="fullWidth"
            className="rounded-full p-4 mt-8"
          >
            Log In
          </Button>
        </form>
        <TextWithHorizontalLine>Or</TextWithHorizontalLine>
        <Button color="none" className="rounded-full w-full py-4 my-8">
          <Image
            src="/images/icons/facebook.png"
            height={30}
            width={30}
            alt="Facebook Icon"
          />
          Login with Facebook
        </Button>
        <Button color="none" border={false}>
          Don't have an account ? Create an account
        </Button>
        <button
          className="absolute top-6 right-8 p-3 text-gray text-3xl font-bold transition-all hover:text-black "
          onClick={onClose}
        >
          X
        </button>
      </div>
    </div>
  );
};
