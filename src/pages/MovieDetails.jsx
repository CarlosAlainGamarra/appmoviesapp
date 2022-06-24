import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { Spinner } from '../components/Spinner'
import { get } from '../utilities/httpClient'
import styles from './MovieDetails.module.css'

export function MovieDetails () {
    const { movieId } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [movie, setMovie] = useState(null)

    useEffect (() => {
        setIsLoading(true)

        get("/movie/" + movieId).then(data => {
            setIsLoading(false)
            setMovie(data)
        })
    }, [movieId])

    if(isLoading){
        return <Spinner />
    }

    if (!movie) {
        return null;
    }

    const imgUrl = "http://image.tmdb.org/t/p/w500" + movie.poster_path
    return (
        <div className={styles.detailsContainer}>
            <img className={`${styles.col} ${styles.movieImage}`} src={imgUrl} alt={movie.title} />
            <div className={`${styles.col} ${styles.MovieDetails}`}>
                <p className={styles.firstItem}><strong> Title:</strong> {movie.title}</p>
                <p><strong>Description:</strong> {movie.overview}</p>
                <p>
                    <strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(", ")}
                </p>
            </div>
        </div>
    )
}