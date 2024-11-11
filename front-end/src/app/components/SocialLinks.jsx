import FacebookIcon from "../assets/icons/facebook.svg";
import InstagramIcon from "../assets/icons/instagramSecond.svg";
import TwitterIcon from "../assets/icons/twitter.svg";
import PinterestIcon from "../assets/icons/pinterest.svg";
import YouTubeIcon from "../assets/icons/youtube.svg";

export const SocialLinks = () => (
  <ul className="flex gap-3 py-5">
    <li>
      <FacebookIcon />
    </li>
    <li>
      <InstagramIcon />
    </li>
    <li>
      <TwitterIcon />
    </li>
    <li>
      <PinterestIcon />
    </li>
    <li>
      <YouTubeIcon />
    </li>
  </ul>
);
