import Image from "next/image";

export const HowWeWork = () => {
  return (
    <div className="grid grid-cols-[40%_60%] gap-10">
      <Image
        src="/images/about-us/second.jpg"
        width={300}
        height={300}
        layout="responsive"
        className="aspect-video rounded-3xl"
      />
      <div>
        <p>How We Work</p>
        <h2>Excellence That Transcends Time and Trends</h2>
        <p>
          Mauris aliquet sed neque ut sagittis. Nullam eu urna risus. Aenean
          convallis fringilla duiiddictum Ali sit amet euismod arcu, at cursus
          sapien. Vivamus volutpat tristique dictum. In a dui ac sapi conseq
          egesta sed nec exsed faucibus est est.
        </p>
        <ul className="flex gap-7 w-full py-8">
          <li className="flex-grow text-center whitespace-nowrap">
            <p className="text-6xl font-bold text-secondary">10+</p>
            <p>Years of Experience</p>
          </li>
          <li className="flex-grow text-center whitespace-nowrap">
            <p className="text-6xl font-bold text-secondary">250K</p>
            <p>Statisfied Clients</p>
          </li>
          <li className="flex-grow text-center whitespace-nowrap">
            <p className="text-6xl font-bold text-secondary">1500+</p>
            <p>Products Completed</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
