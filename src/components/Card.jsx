import { Link } from 'react-router-dom'
import styles from '../modules/Card.module.css'

export function Card({ movie }) {
  const imgUrl = 'https://image.tmdb.org/t/p/w300' + movie.poster_path
  return (
    <li className={styles.movie_card}>
      <Link to={'/movies/' + movie.id}>
      <img className={styles.movie_image} src={imgUrl} alt={movie.title} />
      <div>{movie.title}</div>
      </Link>
    </li>
  )
}
