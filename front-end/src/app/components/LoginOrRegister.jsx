import Link from "next/link";
import { Button } from "./Button";

export const LoginOrRegister = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 ">
      <div className="border-r-2 px-10">
        <h2>Login</h2>
        <form action="GET" className="flex flex-col gap-5 py-8">
          <label htmlFor="usernameLogin">
            Username or email addres *
            <input
              type="text"
              id="usernameLogin"
              className="w-full px-4 py-3 rounded-xl border-2"
            />
          </label>

          <label htmlFor="passwordLogin">
            Password *
            <input
              type="password"
              id="passwordLogin"
              className="w-full px-4 py-3 rounded-xl border-2"
            />
          </label>

          <label htmlFor="rememberMe">
            <input type="checkbox" id="rememberMe" className="mr-2" />
            Remember me
          </label>
          <Button color="second">Login</Button>
        </form>
        <Link href="/">Lost your password?</Link>
      </div>
      <div className="px-10">
        <h2>Register</h2>
        <form action="GET" className="flex flex-col gap-5 py-8">
          <label htmlFor="usernameRegister">
            Username
            <input
              type="text"
              id="usernameRegister"
              className="w-full px-4 py-3 rounded-xl border-2"
            />
          </label>

          <label htmlFor="emailRegister">
            Email
            <input
              type="email"
              id="emailRegister"
              className="w-full px-4 py-3 rounded-xl border-2"
            />
          </label>

          <label htmlFor="passwordRegister">
            Password
            <input
              type="password"
              id="passwordRegister"
              className="w-full px-4 py-3 rounded-xl border-2"
            />
          </label>

          <Button color="second">Register</Button>
        </form>
      </div>
    </div>
  );
};
