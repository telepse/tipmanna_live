type TimeleftProps = {
  value: number;
  label: string;
};

export const Timeleft = ({ value, label }: TimeleftProps) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative flex items-center justify-center rounded bg-gradient-to-b from-[#232A31] to-[#232A31] p-4 text-6xl font-bold text-gray-200 shadow-lg before:absolute before:inset-0 before:rounded-lg before:shadow-inner">
        {/* top/bottom divider */}
        <div className="absolute top-1/2 right-0 left-0 h-2 bg-black/40"></div>
        {value.toString().padStart(2, "0")}
      </div>
      <p className="text-lg font-medium text-slate-300">{label}</p>
    </div>
  );
};
