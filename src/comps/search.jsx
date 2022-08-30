import React from 'react'
import '../styles/search.sass'
export default function search() {
  return (
	<>
	<div className="div-overall-searchbar">
		<div ClassName="div-search-textarea">
			<input type="text" className="search-textarea" placeholder="Search Products"></input>
		</div>	

		<button type="submit" className="button-seach">
		<svg>
        <rect x="0" y="0" fill="none" width="10rem" height="5rem"/>
      </svg>
			Search
		</button>
	</div>
	</>
  )
}
