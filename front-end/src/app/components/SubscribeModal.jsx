import { Button } from "./Button";

export const SubscribeModal = ({ onClose }) => {
  return (
    <div className="fixed bg-black/75 top-0 left-0 w-full h-full z-[9999] flex justify-center items-center">
      <div className="relative bg-transparent  grid grid-cols-2 justify-center items-center w-[80%]  max-w-[800px]   ">
        <div
          className="bg-center bg-no-repeat bg-cover w-full h-full rounded-l-3xl shadow-2xl shadow-white/30"
          style={{
            backgroundImage: "url(/images/newsletter/newsletter-image.jpg)",
          }}
        />
        <div className="bg-secondary h-full px-10 text-mainText py-10 rounded-r-3xl shadow-2xl shadow-white/30">
          <div className="border-2 w-fit px-3 py-1 rounded-3xl">
            Answers needed
          </div>
          <h2 className="font-bold">
            Subscribe Now to get Stay in tech heaven
          </h2>
          <p>
            Sed rutrum sed turpis sed gravida. Donec vestibulum placerat
            pharetra. Suspendisse ut nulla et mi sagittis gravida.{" "}
          </p>
          <form className="flex flex-col gap-5">
            <input
              type="email"
              id="newsletterEmail"
              placeholder="Your Email Address"
              className="p-3 rounded-full"
            />
            <Button color="black" type="fullWidth" className="p-3 rounded-full">
              Subscribe
            </Button>
            <div>
              <input type="checkbox" id="newsletterUpdates" />
              <label htmlFor="newsletterUpdates" className="ml-2">
                I'm in for Monthly updates
              </label>
            </div>
          </form>
        </div>
        <button
          className="absolute top-5 right-5 p-3 text-mainText bg-black font-bold font-xl rounded-full cursor-pointer"
          onClick={onClose}
        >
          X
        </button>
      </div>
    </div>
  );
};
