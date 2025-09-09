import { SubscriptionForm } from "./subscription-form";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center gap-8 p-4 font-medium">
      <p className="bg-brand rounded-md px-6 py-3 text-2xl text-black sm:text-4xl">
        Coming soon!
      </p>

      <h2 className="rounded-md text-center text-3xl sm:text-6xl">
        Tipmanna.live is on its way.
      </h2>

      <p className="text-xl text-slate-300 sm:text-2xl">
        Get notified when we launch.
      </p>

      <SubscriptionForm />
    </div>
  );
};
