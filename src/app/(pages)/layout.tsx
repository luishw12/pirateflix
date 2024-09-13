import {ReactNode} from "react";
import Navbar from "@/components/navbar";

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: ReactNode;
}>) {

  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
