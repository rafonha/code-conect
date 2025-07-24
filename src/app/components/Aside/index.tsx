import Image from "next/image";
import logo from "../../assets/logo.png";

export const Aside = () => {
  return (
    <aside className="px-10 py-4 rounded-lg bg-compBackground">
      <Image
        src={logo}
        alt="logo da code conect"
        width={128}
        height={40}
        priority={false}
      />
    </aside>
  );
};
