import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../Components/Header";
import ShopWithUs from "../Components/ShopWithUs";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <Header />
        <ShopWithUs />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
