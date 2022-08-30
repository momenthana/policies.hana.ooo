import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>개인정보 보호 및 약관</title>
        <meta name="description" content="Privacy & Terms" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>개인정보 보호 및 약관</h1>

        <div className={styles.grid}>
          <Link href="/privacy">
            <a className={styles.card}>
              <h2>개인정보처리방침 &rarr;</h2>
              <p>
                Hana가 수집하는 정보, 수집 이유, 정보 사용 방법, 정보 검토 및
                업데이트 방법에 대해 설명합니다.
              </p>
            </a>
          </Link>

          <Link href="/terms">
            <a className={styles.card}>
              <h2>서비스 약관 &rarr;</h2>
              <p>
                Hana 서비스를 이용할 때 사용자가 동의하는 규정을 설명합니다.
              </p>
            </a>
          </Link>

          <a href="https://auth.hana.ooo/" className={styles.card}>
            <h2>Hana 계정 &rarr;</h2>
            <p>
              계정을 한 곳에서 관리하고 안전하게 보호하세요. Hana 계정에서
              데이터와 개인정보를 보호하는 데 필요한 설정 및 도구에 쉽게
              액세스할 수 있습니다.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
