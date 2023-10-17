import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
  return (
    /* MOST POPULAR POSTS */
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's Hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false} />

      {/* DISCOVER BY TOPIC */}
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />

      {/* POSTS CHOSEN BY EDITOR */}
      <h2 className={styles.subtitle}>Chosen by Editor</h2>
      <h1 className={styles.title}>Editors pick</h1>
      <MenuPosts withImage={true} />
        
    </div>
  );
};

export default Menu;
