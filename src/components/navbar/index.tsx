import Image from "next/image";
import logo from "@/img/logo.png";
import {navigation} from "@/components/navigation";
import Link from "next/link";
import {Input} from "@/components/ui/input";

export default function Navbar() {
  return (
    <div className={"flex items-center justify-around py-4"}>
      <Link href="/home">
        <Image src={logo} alt={"Pirateflix logo"} width={150} />
      </Link>
      <ul className={"flex gap-10 text-lg font-medium text-zinc-300"}>
        {navigation.map((item, index) =>
          <Link key={index} href={item.route} className={"hover:text-red-600 duration-150"}>{item.title}</Link>
        )}
      </ul>
      <Input className={"w-[250px]"} />
    </div>
  )
}