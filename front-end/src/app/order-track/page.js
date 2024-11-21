import { Button } from "../components/Button";
import { SubPageBar } from "../components/SubPageBar";
import { WidthWrapper } from "../components/WidthWrapper";

export default function Home() {
  return (
    <main className=" flex-grow">
      <SubPageBar title="Order Track" />
      <WidthWrapper className="py-20 flex flex-col justify-center items-center text-center">
        <h2>Track Your Order</h2>
        <p className="w-1/2">
          To track your order please enter your Order ID in the box below and
          press the "Track" button. This was given to you on your receipt and in
          the confirmation email you should have received.
        </p>
        <form className="grid gap-5 w-1/2">
          <label htmlFor="orderId" className="grid gap-1 w-full">
            Order ID
            <input
              id="orderId"
              type="text"
              className="border-2 rounded-xl px-4 py-3 w-full"
            />
          </label>
          <label htmlFor="email" className="grid gap-1">
            Billing Email
            <input
              id="email"
              type="email"
              className="border-2 rounded-xl px-4 py-3"
            />
          </label>
          <Button color="second" type="fullWidth" className="rounded-xl py-2">
            Track
          </Button>
        </form>
      </WidthWrapper>
    </main>
  );
}
