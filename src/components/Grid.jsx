import { Card } from './Card'
import styles from '../modules/Grid.module.css'
import { useEffect, useState } from 'react'
import { Loading } from '../components/Loading'
import { useQuery } from '../components/UseQuery'
import InfiniteScroll from 'react-infinite-scroll-component'


export function Grid() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1);

  const query = useQuery()
  const search = query.get('search')

  useEffect(() => {
    setLoading(true)
    const searchUrl = search ? 'search/movie?query=' + search + '&page=' + page : 'discover/movie?page=' + page
    fetch("https://api.themoviedb.org/3/" + searchUrl, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs",
          "Content-Type": "application/json;charset=utf-8",
      },
    })
    .then((result) => result.json())
    .then((data) => {
      setMovies(prevMovies => prevMovies.concat(data.results))})
      setLoading(false)
  }, [search, page])

  return (
    <InfiniteScroll
      dataLength={movies.length}
      hasMore={true}
      next={() => setPage((prevPage) => prevPage + 1)}
      loader={<Loading />}
    >
    <ul className={styles.movies_grid}>
      {movies.map((movie) => {
        return (<Card key={movie.id} movie={movie}/>) 
      })}
    </ul>
    </InfiniteScroll>
  )
}
