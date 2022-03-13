import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Bug Tracker</title>
        <meta name="keywords" content="habit, tracking, programming" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  );
};

export default Home;
