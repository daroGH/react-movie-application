import React from 'react'
import { MovieList} from '../components/MovieList'
import { Search } from '../components/Search'

export default function Page() {
  return (
    <div>
      <Search/>
      <MovieList/>
    </div>
  )
}