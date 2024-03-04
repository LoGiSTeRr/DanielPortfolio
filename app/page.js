import Image from "next/image";
import Navbar from "./layouts/Navbar";
import Layout from "./layouts/Layout";

export default function Home() {
  return (
    <main>
      <Navbar />

      <div className="flex items-center text-dark w-full min-h-screen">
        <Layout>
          <h1>hjnkml</h1>
        </Layout>
      </div>
    </main>
  );
}
