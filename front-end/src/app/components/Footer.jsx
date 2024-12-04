import { WidthWrapper } from "./WidthWrapper";
import { Address } from "./Address";
import { SocialLinks } from "./SocialLinks";
import { HelpLinks } from "./HelpLinks";
import { KnowUsLinks } from "./KnowUsLinks";
import { LegalLinks } from "./LegalLinks";
import { BuyerLinks } from "./BuyerLinks";
import { PaymentIcons } from "./PaymentIcons";
import { FooterBottom } from "./FooterBottom";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="bg-backgroundFooter">
      <WidthWrapper className="flex flex-col xl:flex-row gap-5 pt-14 justify-between">
        <div>
          <Image
            src="/images/logo/Logo.svg"
            width={300}
            height={150}
            alt="Logo image"
          />
          <p className="py-8 w-3/4">
            Vivamus ut leo maximuor. Donec gravida eleifend nisi id luctus.
            Vivamus fermentum.
          </p>
          <Address />
          <SocialLinks />
        </div>
        <HelpLinks />
        <KnowUsLinks />
        <LegalLinks />
        <BuyerLinks />
      </WidthWrapper>
      <FooterBottom />
    </div>
  );
};
