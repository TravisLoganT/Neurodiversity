import React from "react";
import styles from "./comments.module.css";
import Image from "next/image";
import Link from "next/link";

const Comments = () => {
  const status = "authenticated";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments Here</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="Share your opinion..."
            className={styles.input}
          />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to share your comments</Link>
      )}

      {/* Comments Section */}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              className={styles.image}
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Travis Logan</span>
              <span className={styles.date}>01.03.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quibusdam, quod. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quibusdam, quod. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quibusdam, quod.
          </p>
        </div>
      </div>

      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Travis Logan</span>
              <span className={styles.date}>01.03.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quibusdam, quod. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quibusdam, quod. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quibusdam, quod.
          </p>
        </div>
      </div>

      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Travis Logan</span>
              <span className={styles.date}>01.03.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quibusdam, quod. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quibusdam, quod. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quibusdam, quod.
          </p>
        </div>
      </div>

      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Travis Logan</span>
              <span className={styles.date}>01.03.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quibusdam, quod. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quibusdam, quod. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quibusdam, quod.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
