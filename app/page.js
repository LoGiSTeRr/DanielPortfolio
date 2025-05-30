import MainPage from "./home/page";
import HireMe from "../components/HireMe";

import Image from "next/image";
import lightBulb from "../public/images/svgs/miscellaneous_icons_1.svg";

export default function Home() {
  return (
    <main className="bg-light text-dark dark:bg-dark">
      <div className="flex items-center text-dark w-full min-h-screen">
        <MainPage />

        <HireMe />
        <div className=" absolute right-8 bottom-8 inline-block w-20 md:hidden">
          <Image src={lightBulb} alt="Title" className="w-full h-auto" />
        </div>
      </div>
    </main>
  );
}
