import Link from "next/link";

export const LogoLight = () => {
  return (
    <Link href="/" className="group flex items-center">
      <span className="text-2xl tracking-tighter sm:text-3xl">
        <span className="font-medium text-[#1e293b] dark:text-white">
          Divis
        </span>
        <span className="font-bold text-[#1e293b] dark:text-white">
          AR
        </span>
      </span>
    </Link>
  );
};

export default LogoLight;