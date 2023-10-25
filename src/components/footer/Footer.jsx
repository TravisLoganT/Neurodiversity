import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="Travis Logan" width={50} height={50} />
          <h1 className={styles.logoText}>Travis Logan</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          quod.
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="Facebook" width={18} height={18} />
          <Image src="/twitter.png" alt="Twitter" width={18} height={18} />
          <Image src="/instagram.png" alt="Instagram" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.link}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.link}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">ADHD</Link>
          <Link href="/">Autism</Link>
          <Link href="/">Depression</Link>
          <Link href="/">Dyslexia</Link>
        </div>
        <div className={styles.link}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Twitter</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
