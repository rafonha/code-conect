import Image from "next/image";

export const Aside = () => {
  const logo = "/logo.png";
  return (
    <aside>
      <div>
        <Image src={logo} alt="logo da code conect" width={128} height={40} />
      </div>
    </aside>
  );
};
