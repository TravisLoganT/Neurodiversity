import React from 'react';
import styles from "./featured.module.css";
import Image from 'next/image';

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Discover Neurodiversity Together</b> Embracing Minds, Inspiring Hearts
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/Neurodiversity.jpg" alt="" fill />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>This a test Title</h1>
                    <p className={styles.postDescription}>This is a test description. Here at Neurodiversity, we want to help
                        people feel inspired about their unique differences!
                    </p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Featured