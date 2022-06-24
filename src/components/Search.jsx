import styles from '../modules/Search.module.css'
import { ImSearch } from 'react-icons/im'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { useQuery } from './UseQuery';

export function Search() {

  const query = useQuery()
  const search = query.get('search')

  const [searchEntry, setSearchEntry] = useState('')
  const history = useHistory()
  function handleSubmit (e){
    e.preventDefault()
    history.push('/?search=' + searchEntry)
  }

  useEffect(() => {
    setSearchEntry(search || '')
  }, [search]);


  return (
    <form className={styles.search_container} onSubmit={handleSubmit}>
      <div className={styles.search_box} >
        <input 
          className={styles.search_input} 
          type='text' 
          placeholder='Find movies...'
          value={searchEntry}
          onChange={(e) => setSearchEntry(e.target.value)}
          ></input>
        <button className={styles.search_button} type='submit'><ImSearch /></button>
      </div>
    </form>
  )
}
