import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <div>
        
      <Image
        src="https://i.picsum.photos/id/1028/200/200.jpg?hmac=thf3cKyzvjBi3Rnf8-hvYRl8MmEPFPIq1G8nJVvoT4I"
        alt="logo"
    
          height="200"
          width="200"
        />
      </div>
      
      <p>Login</p>
    </>
  );
};

export default Home;
