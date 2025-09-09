export const RadialGradient = () => {
  return (
    <div className="absolute top-0 left-0">
      <div className="relative flex h-screen items-center justify-center bg-black">
        {/* Blue + Green blob */}
        <div className="absolute top-20 left-5 size-[150px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,128,255,0.6),transparent)] blur-xl sm:left-10 sm:size-[300px]" />

        {/* Orange blob */}
        <div className="absolute top-30 left-20 size-[125px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,128,0,0.7),transparent)] blur-xl sm:left-40 sm:size-[250px]" />

        {/* Red blob */}
        <div className="absolute top-40 left-36 size-[100px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.7),transparent)] blur-xl sm:left-72 sm:size-[200px]" />
      </div>
    </div>
  );
};
