import { WidthWrapper } from "./WidthWrapper";
import { PaymentIcons } from "./PaymentIcons";

export const FooterBottom = () => (
  <WidthWrapper className="flex border-t-2 py-6">
    <div className="flex-grow">©Designthemes all rights Reserved</div>
    <div className="flex gap-3 items-center">
      <PaymentIcons />
      <p className="py-0">Terms & Condition | Privacy Policy</p>
    </div>
  </WidthWrapper>
);
