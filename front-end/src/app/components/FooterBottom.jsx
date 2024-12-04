import { WidthWrapper } from "./WidthWrapper";
import { PaymentIcons } from "./PaymentIcons";

export const FooterBottom = () => (
  <WidthWrapper className="flex flex-col xl:flex-row border-t-2 py-6 text-center">
    <div className="flex-grow mb-4 xl:mb-0">
      ©Designthemes all rights Reserved
    </div>
    <div className="flex flex-col xl:flex-row gap-3 items-center">
      <PaymentIcons />
      <p className="py-0">Terms & Condition | Privacy Policy</p>
    </div>
  </WidthWrapper>
);
