import Card from '@/app/components/Card'
import Results from '@/app/components/Results'
import React from 'react'

export default async function SearchPage({ params }) {
    const searchItem = params.searchItem
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchItem}&language=en-US&page=1&include_adult=false`)
    const data = await res.json()
    const results = data.results
    //console.log(results)
    console.log(results.length)
    return (
        <div>
            {results.length === 0 ? <div className='text-center pt-6 text-white'>No results found</div>
             : <Results results={results} />}
        </div>
    )
}
