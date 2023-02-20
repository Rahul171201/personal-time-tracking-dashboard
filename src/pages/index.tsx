import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.gridWrapper}>
          <div className={styles.profileCard}>profile card</div>
          <div>work</div>
          <div>play</div>
          <div>study</div>
          <div>exercise</div>
          <div>social</div>
          <div>self care</div>
        </div>
    </div>
  )
}
