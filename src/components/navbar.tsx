import Link from "next/link";

// Third-party imports
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";

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
          Icon={CiTwitter}
          href="/"
        />
        <SocialIcon
          Icon={CiFacebook}
          href="/"
        />
        <SocialIcon
          Icon={CiInstagram}
          href="/"
        />
      </div>
    </nav>
  );
};
