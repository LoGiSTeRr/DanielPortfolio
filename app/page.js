import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

import MainPage from "./sections/main/MainPage";
import HireMe from "./sections/main/HireMe";

import Image from "next/image";
import lightBulb from '../public/images/svgs/miscellaneous_icons_1.svg'

export default function Home() {
  return (
    <main className="bg-light text-dark">
      <Navbar />
      <div className="flex items-center text-dark w-full min-h-screen">
        <MainPage />

        <HireMe />
        <div className=" absolute right-8 bottom-8 inline-block w-20">
          <Image src={lightBulb} alt="Title" className="w-full h-auto" />
        </div>
      </div>
      <Footer />
    </main>
  );
}
