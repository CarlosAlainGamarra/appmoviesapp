import { Link } from 'react-router-dom'
import styles from './MovieCard.module.css'

export function MovieCard ({movie}){
    const imgUrl = "http://image.tmdb.org/t/p/w300" + movie.poster_path
    return(
        <li className={styles.movieCard}>
            <Link to={"/movies/" + movie.id}>
            <img src={imgUrl} alt={movie.title} className={styles.movieImage}/>
            <div>{movie.title}</div></Link>
        </li>
    )
}