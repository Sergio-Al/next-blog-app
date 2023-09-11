import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Looking for something interesting? </b> Check out the latest stories.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image className={styles.image} src="/p1.jpeg" alt="" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, sunt
            dolorum harum libero provident ad?
          </h1>
          <p className={styles.postDescription}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
            recusandae quasi animi neque, dolores deleniti delectus voluptatem a
            excepturi sed in ad magnam? Aliquam quia laborum delectus repellat
            libero adipisci?
          </p>
          <button className={styles.postButton}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
