import Image from "next/image";
import Navbar from "./layouts/Navbar";
import Layout from "./layouts/Layout";

import ProfilePicture from '../public/images/profile/developer-pic-1.png'

export default function Home() {
  return (
    <main className="bg-light text-dark" >
      <Navbar />

      <div className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={ProfilePicture}
                alt="Daniel"
                className="h-auto w-full"
              />
            </div>
          </div>
        </Layout>
      </div>
    </main>
  );
}
