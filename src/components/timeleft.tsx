type TimeleftProps = {
  value: number;
  label: string;
};

export const Timeleft = ({ value, label }: TimeleftProps) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative flex items-center justify-center rounded bg-gradient-to-b from-[#232A31] to-[#232A31] p-4 text-3xl font-bold text-gray-200 shadow-lg before:absolute before:inset-0 before:rounded-lg before:shadow-inner sm:text-6xl">
        {/* top/bottom divider */}
        <div className="bg-brand/40 absolute top-1/2 right-0 left-0 h-2"></div>
        <span className="racing_sans_one">
          {value.toString().padStart(2, "0")}
        </span>
      </div>
      <p className="open_sans text-lg text-slate-300">{label}</p>
    </div>
  );
};
