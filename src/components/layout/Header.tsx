import Link from "next/link";
import Logo from "../shared/common/Logo";
export default function Header () {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-[30%] flex ">
        <Logo width={100} height={100}/>
      </div>
      <ul className="flex w-[60%] gap-x-[30px] text-gray-400 text-[13px]">
          <Link href="/about" className="hover:text-gray-600"><li>About</li></Link>
          <Link href="/gear" className="hover:text-gray-600"><li>Gear</li></Link>
          <Link href="/blog" className="hover:text-gray-600"><li>Blog</li></Link>
          {/* <Link href="/project" className="hover:text-gray-600"><li>Project</li></Link> */}
      </ul>
      <div className="w-[10%] text-[10px] text-gray-600">
        {/* <Link href={`#`}>GO</Link> */}
      </div>
    </div>
  )
}