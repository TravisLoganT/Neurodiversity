import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Most Common</h1>
      <div className={styles.categories}>
        <Link
          href="/blog"
          className={`${styles.category} ${styles.adhd}`}>
          <Image
            src="/adhd.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          ADHD
        </Link>

        <Link
          href="/blog"
          className={`${styles.category} ${styles.autism}`}>
          <Image
            src="/autism.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          austism
        </Link>

        <Link
          href="/blog"
          className={`${styles.category} ${styles.dslexia}`}>
          <Image
            src="/dslexia.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Dslexia
        </Link>

        <Link
          href="/blog"
          className={`${styles.category} ${styles.anxiety}`}>
          <Image
            src="/anxiety.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Anxiety
        </Link>

        <Link
          href="/blog"
          className={`${styles.category} ${styles.depression}`}>
          <Image
            src="/depression.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          depression
        </Link>

        <Link
          href="/blog"
          className={`${styles.category} ${styles.ocd}`}>
          <Image
            src="/ocd.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          OCD
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
