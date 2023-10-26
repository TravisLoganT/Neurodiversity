import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Discover Neurodiversity</b>
      </h1>
      <div className={styles.subtitle}>Embracing Minds, Inspiring Hearts!</div>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/Neurodiversity.png" alt="" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Understand your Neurodiversity</h1>
          <p className={styles.postDescription}>
            Welcome to this platform to help you learn about all the types and
            the intricate differences of people who have experianced
            Neurodiversities. We want to help people feel inspired about their
            unique differences! As well as help people understand the
            differences of others. How you can help and how you can be helped.
          </p>
          <button className={styles.button}>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
