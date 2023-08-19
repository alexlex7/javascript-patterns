import React from 'react'
import Listings from '../../presentational/Listings'
import { ListingI } from '../../presentational/types'

export default function ListingsContainer() {
  const [listings, setListings] = React.useState<ListingI[]>()
  React.useEffect(() => {
    fetch('https://house-lydiahallie.vercel.app/api/listings')
      .then((res) => res.json())
      .then((res) => setListings(res.listings))
  }, [])

  if (!listings) return null
  return <Listings listings={listings} />
}
