import Image from "next/image";
import Link from "next/link";
const logo = "/asset/images/primary_logo.png";
export default function Logo({ width = 150, height = 150 }) {
  return (
    <div>
      <Link href={`/`}>
      <Image src={logo} width={width} height={height} alt="logo" className="rounded-md" />
      </Link>
    </div>
  );
}
