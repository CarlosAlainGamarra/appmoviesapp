import { FiClock } from 'react-icons/fi'
import styles from '../modules/Loading.module.css'

export function Loading() {
  return (
    <div className={styles.spinner}>
      <FiClock size={50} />
      Loading movies...
    </div>
  )
}
