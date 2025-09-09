interface SocialIconProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
}

export const SocialIcon = ({ Icon, href }: SocialIconProps) => {
  return (
    <a
      className="hover:bg-brand rounded-full bg-transparent p-0.5 hover:text-black"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="size-7" />
    </a>
  );
};
