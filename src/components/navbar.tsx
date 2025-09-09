import Link from "next/link";
import Image from "next/image";

// Third-party imports
import { CiInstagram, CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

// Local imports
import { SocialIcon } from "./social-icon";

export const Navbar = () => {
  return (
    <nav className="wrapper flex items-center justify-between p-4">
      <Link href="/">
        <Image
          src="/tipmanna_logo.png"
          alt="Tipmanna logo"
          width={40}
          height={20}
          className="h-16 w-24 object-contain sm:h-20 sm:w-40"
        />
      </Link>

      {/* Social links */}
      <div className="flex items-center gap-2">
        <span className="racing_sans_one hidden sm:inline-block">
          Follow us on
        </span>

        <SocialIcon
          Icon={CiInstagram}
          href="https://instagram.com/tipmanna"
        />
        <SocialIcon
          Icon={FaXTwitter}
          href="https://x.com/tipmanna"
          className="!size-5"
        />
        <SocialIcon
          Icon={CiLinkedin}
          href="https://linkedin.com/company/tipmanna"
        />
      </div>
    </nav>
  );
};
