import Link from "next/link";

// Third-party imports
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

// Local imports
import { SocialIcon } from "./social-icon";

export const Navbar = () => {
  return (
    <nav className="wrapper flex items-center justify-between p-4">
      <Link
        href="/"
        className="text-3xl font-bold"
      >
        <span className="text-brand">tip</span>manna
      </Link>

      {/* Social links */}
      <div className="flex gap-2">
        <SocialIcon
          Icon={FaXTwitter}
          href="https://x.com/tipmanna"
        />
        <SocialIcon
          Icon={CiInstagram}
          href="https://instagram.com/tipmanna"
        />
      </div>
    </nav>
  );
};
