import React from 'react'
import styles from './menuCategories.module.css'
import Link from 'next/link'


const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
        <Link
          href="/blog"
          className={`${styles.categoryItem} ${styles.adhd}`}>
          ADHD
        </Link>
        <Link
          href="/blog"
          className={`${styles.categoryItem} ${styles.autism}`}>
          autism
        </Link>
        <Link
          href="/blog"
          className={`${styles.categoryItem} ${styles.dyslexia}`}>
          dyslexia
        </Link>
        <Link
          href="/blog"
          className={`${styles.categoryItem} ${styles.depression}`}>
          depression
        </Link>
        <Link
          href="/blog"
          className={`${styles.categoryItem} ${styles.bipolar}`}>
          bipolar
        </Link>
        <Link
          href="/blog"
          className={`${styles.categoryItem} ${styles.anxiety}`}>
          anxiety
        </Link>
        <Link
          href="/blog"
          className={`${styles.categoryItem} ${styles.ocd}`}>
          ocd
        </Link>
        <Link
          href="/blog"
          className={`${styles.categoryItem} ${styles.schizophrenia}`}>
          schizophrenia
        </Link>
        <Link
          href="/blog"
          className={`${styles.categoryItem} ${styles.tourette}`}>
          tourette
        </Link>
        <Link
          href="/blog"
          className={`${styles.categoryItem} ${styles.ptsd}`}>
          ptsd
        </Link>
        <Link
          href="/blog"
          className={`${styles.categoryItem} ${styles.alzheimer}`}>
          alzheimer
        </Link>
        <Link
          href="/blog"
          className={`${styles.categoryItem} ${styles.parkinson}`}>
          parkinson
        </Link>
      </div>
  )
}

export default MenuCategories