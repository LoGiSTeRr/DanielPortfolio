import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

import MainPage from "./sections/main/MainPage";
import HireMe from "./sections/main/HireMe";

export default function Home() {
  return (
    <main className="bg-light text-dark">
      <Navbar />
      <div className="flex items-center text-dark w-full min-h-screen">
        <MainPage />
        <HireMe/>
      </div>
      <Footer />
    </main>
  );
}
