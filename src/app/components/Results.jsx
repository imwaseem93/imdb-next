import React from 'react'

export default function Results({ results }) {
    return (
        <div>
            {
                results.map((resl) => (
                    <div key={resl.id}>
                        <h2 >{resl.original_title}</h2>
                    </div>

                ))
            }
        </div>
    )
}
