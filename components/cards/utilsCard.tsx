import Image from "next/image";

interface UtilsCardProps {
  title: string;
  description: any;
  icon: React.ReactNode; // Updated to accept React nodes
}

export const UtilsCard: React.FC<UtilsCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="flex flex-col dark:fill-white">
      <div className="">{title}</div>

      <div className="flex gap-4 pt-2 font-light">
        {icon}
        {description}
      </div>
    </div>
  );
};
