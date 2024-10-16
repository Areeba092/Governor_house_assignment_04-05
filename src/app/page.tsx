
import Head from "next/head";
import Responsive from "./responsive/page";
import Header from "./responsive/header";
import Footer from "./responsive/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Responsive />
      </main>
      <Footer />
    </div>
  );
}
