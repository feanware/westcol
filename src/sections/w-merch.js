/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "@/styles/w-merch.module.css";
const WMerch = () => {
  return (
    <section className={styles.wMerch}>
      <h2 className={styles.wMerchTitle}>
        Compra tu <span>W MERCH</span>
      </h2>
      <a
        href="https://wmerchshop.com/"
        target="_blank"
        className={styles.wMerchLink}
      >
        <img src="/assets/images/w-merch.jpg" alt="W Merch" width={200} />
      </a>
    </section>
  );
};

export default WMerch;
