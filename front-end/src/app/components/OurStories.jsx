import GoalIcon from "../assets/icons/goal.svg";
import MissionIcon from "../assets/icons/mission.svg";
import IdeologyIcon from "../assets/icons/ideology.svg";

export const OurStories = () => {
  return (
    <>
      <div className="grid grid-cols-[30%_70%] gap-7">
        <div className="w-3/4">
          <p>Our Stries</p>
          <h2>Exquisite Electrical Solutions for Discerning Clients</h2>
        </div>
        <div>
          <p>
            Mauris aliquet sed neque ut sagittis. Nullam eu urna risus. Aenean
            convallis fringilla dui id dictum. Aliquam sit amet euismod arcu, at
            cursus sapien. Vivamus volutpat tristique dictum. In a dui ac sapien
            consequat egestas sed nec ex. Sed faucibus est est, non dapibus nisl
            luctus eu. Morbi mollis elit auctor lorem iaculis, vitae consectetur
            orci varius. Sed elit dolor, rhoncus quis cursus at.
          </p>
          <p>
            porta non lectus. Etiam eget porttitor massa. Integer egestas, arcu
            ut finibus mattis, nibh metus laoreet lorem, ut finibus sem justo id
            est. Nunc metus lectus, consequat ac augue id, auctor interdum
            turpis. Nunc non odio laoreet, fringilla mauris non, imperdiet
            purus.
          </p>
        </div>
      </div>
      <ul className="flex gap-7">
        <li className="border-2 border-gray rounded-3xl p-8">
          <GoalIcon />
          <h3 className="pt-4">Our Goal</h3>
          <p>
            Mauris aliquet sed neque ut sagittis. Nullam eu urna ris. Aenean
            convallis fringilla dui id dictum. Aliquam sitam euismod arcu, at
            cursus sapien.
          </p>
        </li>
        <li className="border-2 border-gray rounded-3xl p-8">
          <MissionIcon />
          <h3 className="pt-4">Our Mission</h3>
          <p>
            Vivamus volutpat tristique dictum. In a dui ac sapienco quategestas
            sed nec ex. Sedfaucibus estest, non tristiq dapibus nisl luctuseu.
          </p>
        </li>
        <li className="border-2 border-gray rounded-3xl p-8">
          <IdeologyIcon />
          <h3 className="pt-4">Our Ideology</h3>
          <p>
            Vivamus volutpat tristique dictum. In a dui ac sapienco quategestas
            sed nec ex. Sedfaucibus estest, non tristiq dapibus nisl luctuseu.
          </p>
        </li>
      </ul>
    </>
  );
};
