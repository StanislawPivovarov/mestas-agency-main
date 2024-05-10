import Image from "next/image";
import styles from "./page.module.scss";
import AlbumCover from "@/components/photography/AlbumCover";

export default function Home() {
  return (
      <div className={styles.example}>
        <AlbumCover/>
      </div>

  );
}
