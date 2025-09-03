import Image from "next/image";

export const Avatar = ({
  imageSrc,
  name,
}: {
  imageSrc: string;
  name: string;
}) => {
  return (
    <div className="flex items-center justify-end gap-2">
      <ul className="flex items-center gap-2">
        <li>
          <Image
            src={imageSrc}
            alt={`Avatar do(a) ${name}`}
            width={32}
            height={32}
            priority={false}
          />
        </li>
        <li>
          <p className="text-white text-sm">@{name}</p>
        </li>
      </ul>
    </div>
  );
};
