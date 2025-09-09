export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-4 p-4 text-center text-sm text-slate-300">
      Copyright &copy; {currentYear} <span className="text-brand">tip</span>
      manna. All rights reserved.
    </footer>
  );
};
