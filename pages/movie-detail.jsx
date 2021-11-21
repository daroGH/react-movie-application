import React from 'react'
import { MovieDetail } from '../components/MovieDetail'
import { Search } from '../components/Search'

export default function Page() {
  return (
    <div>
      <Search/>
      <MovieDetail/>
    </div>
  )
}
