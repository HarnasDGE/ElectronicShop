import { SubPageBar } from "../components/SubPageBar";
import { WidthWrapper } from "../components/WidthWrapper";

import LocationIcon from "../assets/icons/location.svg";
import MailUsIcon from "../assets/icons/mailUs.svg";
import SpeechBubbleIcon from "../assets/icons/speechBubble.svg";
import PhoneIcon from "../assets/icons/phone.svg";
import { Button } from "../components/Button";
import Link from "next/link";
import { CtaThird } from "../components/CtaThird";
import { BarAppears } from "../components/BarAppears";

export default function Home() {
  const contactItems = [
    {
      icon: <LocationIcon />,
      title: "Our Location",
      description: "Seestrasse St, Zurich, CH",
    },
    {
      icon: <MailUsIcon />,
      title: "Mail Us",
      description: "support@electkadai.com",
    },
    {
      icon: <SpeechBubbleIcon />,
      title: "Chat With Us",
      description: "Get live chat support",
    },
    {
      icon: <PhoneIcon />,
      title: "Call Us",
      description: "+956 675 3757",
    },
  ];
  return (
    <main className="flex-grow flex flex-col">
      <BarAppears />
      <SubPageBar title="Contact Us" />
      <WidthWrapper className="flex flex-col xl:flex-row py-20 gap-10 flex-grow">
        <div>
          <h2>Reach Out to Us. We're Just a Click Away!</h2>
          <p className="w-3/4 text-gray-600 mt-4">
            Sed rutrum sed turpis sed gravida. Donec vestibulum placerat
            pharetra. Suspendisse ut nulla et mi sagittis gravida.
          </p>
          <ul className="grid grid-cols-2 gap-6 mt-10">
            {contactItems.map((item, index) => (
              <li key={index} className="flex p-3 gap-3 ">
                <div className="bg-secondary w-20 aspect-square flex justify-center items-center rounded-3xl text-mainText">
                  {item.icon}
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-black/70">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <form className="flex flex-col w-1/2 gap-6 bg-gray rounded-3xl p-8">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Your Name"
              id="name"
              className="border border-gray p-3 rounded-md flex-grow"
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              id="telephone"
              className="border border-gray p-3 rounded-md flex-grow"
            />
          </div>
          <input
            type="email"
            placeholder="Your Email Address"
            id="email"
            className="border border-gray p-3 rounded-md"
          />
          <textarea
            id="message"
            placeholder="Message"
            className="border border-gray p-3 rounded-md h-32"
          />
          <div className="flex items-center gap-4 mt-4">
            <Button color="second" className="rounded-xl">
              Send Message
            </Button>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="termsAgree" />
              <label htmlFor="termsAgree" className="text-sm">
                I agree with the{" "}
                <Link
                  href="/terms-and-condition"
                  className="font-bold text-secondary"
                >
                  terms & conditions
                </Link>
              </label>
            </div>
          </div>
        </form>
      </WidthWrapper>
      <CtaThird />
    </main>
  );
}
