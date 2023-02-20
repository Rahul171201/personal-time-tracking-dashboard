import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import CardComponent from '../components/CardComponent/CardComponent';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.gridWrapper}>
          <div className={styles.profileCard}>
            <div className={styles.profile}>
              <div className={styles.profileImageWrapper}>
                  <Image className={styles.profileImage} src="/image-jeremy.png" alt="profile pic" width={150} height={150}></Image>
              </div>
              <div className={styles.infoContainer}>
                <span className={styles.forText}>Report for</span>
                <h1>Jeremy Robson</h1>
              </div>
            </div>
            <div className={styles.timeListWrapper}>
              <ul className={styles.timeList}>
                <li className={styles.timeListItem}>Daily</li>
                <li className={styles.timeListItem}>Weekly</li>
                <li className={styles.timeListItem}>Monthly</li>
              </ul>
            </div>
          </div>
          <CardComponent id="work" color="hsl(15, 100%, 70%)"></CardComponent>
          <CardComponent id="play" color="hsl(195, 74%, 62%)"></CardComponent>
          <CardComponent id="study" color="hsl(348, 100%, 68%)"></CardComponent>
          <CardComponent id="exercise" color="hsl(145, 58%, 55%)"></CardComponent>
          <CardComponent id="social" color="hsl(264, 64%, 52%)"></CardComponent>
          <CardComponent id="self-care" color="hsl(43, 84%, 65%)"></CardComponent>
        </div>
    </div>
  )
}
