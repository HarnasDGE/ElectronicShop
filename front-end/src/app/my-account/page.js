import { BarAppears } from "../components/BarAppears";
import { LoginOrRegister } from "../components/LoginOrRegister";
import { SubPageBar } from "../components/SubPageBar";
import { WidthWrapper } from "../components/WidthWrapper";

export default function Home() {
  return (
    <main className=" flex-grow">
      <BarAppears />
      <SubPageBar title="My Account" />
      <WidthWrapper className="py-20">
        <LoginOrRegister />
      </WidthWrapper>
    </main>
  );
}
