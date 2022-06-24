import styles from '../modules/Detail.module.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Loading } from '../components/Loading'

export function Detail() {
  const [loading, setLoading] = useState(true)
  const {  movieId } = useParams()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch("https://api.themoviedb.org/3/movie/" + movieId, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs",
          "Content-Type": "application/json;charset=utf-8",
      },
    })
    .then((result) => result.json())
    .then((data) => {
      setLoading(false)
      setMovie(data)});
  }, [movieId])

  if (loading) {
    return (
      <Loading />
    )
  }

  if (!movie) {
    return null
  }
  const imgUrl = 'https://image.tmdb.org/t/p/w500' + movie.poster_path
  return (
    <div className={styles.detail_container}>
      <img className={`${styles.line} ${styles.line_image}`} src={imgUrl} alt={movie.title} />
      <div className={styles.line}>
        
        <p><strong>Title:</strong> {movie.title}</p>
        <p><strong>Overview:</strong> {movie.overview}</p>
        <p><strong>Genres:</strong> {movie.genres.map((genre) => genre.name).join(', ')}</p>
        <h2><p><strong>"{movie.tagline}"</strong></p></h2>
      </div>
    </div>
  )
}
