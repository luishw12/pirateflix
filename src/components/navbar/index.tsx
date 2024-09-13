import Image from "next/image";
import logo from "@/img/logo.png";
import {navigation} from "@/components/navigation";
import Link from "next/link";
import {Input} from "@/components/ui/input";
import {IoSearchSharp} from "react-icons/io5";
import {Suspense} from "react";
import {InputSkeleton} from "@/components/ui/input-skeleton";

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
      <Suspense fallback={<InputSkeleton className={"w-[250px]"} />}>
        <Input className={"w-[250px]"} icon={<IoSearchSharp />} clearable />
      </Suspense>
    </div>
  )
}