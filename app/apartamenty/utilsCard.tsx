import Image from "next/image";

interface UtilsCardProps {
  title: string;
  description: any;
  icon: any; // You might want to use a more specific type for the icon
}

export const UtilsCard: React.FC<UtilsCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="flex flex-col">
      <div className="">{title}</div>
      <Image
        src={icon}
        alt="desk"
        width={30}
        height={30}
        className="mr-2"
        loading="lazy"
      />
      <div className="pt-2 font-light">{description}</div>
    </div>
  );
};
