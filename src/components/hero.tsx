import Link from "next/link";

// Third-party imports
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center gap-8 p-4 font-medium">
      <p className="border-topaz open_sans rounded-md border px-6 py-3 text-xl text-white sm:text-2xl">
        Launching soon!
      </p>

      <h2 className="racing_sans_one max-w-4xl rounded-md text-left text-xl sm:text-center sm:text-4xl">
        tipmanna helps you receive tips, donations, or fundraise from attendees
        at your physical events.
      </h2>

      <div className="space-y-4">
        <p className="open_sans text-left text-xl text-slate-300 sm:text-center sm:text-2xl">
          Take a moment to fill out our ongoing survey
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="http://bit.ly/tipmannasurvey1"
            target="_blank"
          >
            <Button
              variant="topaz"
              size="lg"
            >
              Event organisers &rarr;
            </Button>
          </Link>
          <Link
            href="http://bit.ly/tipmannasurvey2"
            target="_blank"
          >
            <Button
              variant="moonstone_blue"
              size="lg"
            >
              Event performers &rarr;
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
