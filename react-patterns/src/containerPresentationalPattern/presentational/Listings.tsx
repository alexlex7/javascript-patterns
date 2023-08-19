import React from 'react'
import { Listing } from './Listing'
import { ListingsGrid } from './ListingsGrid'
import { ListingI } from './types'

interface ListingsProps {
  listings: ListingI[]
}

export default function Listings({ listings }: ListingsProps) {
  return (
    <ListingsGrid>
      {listings.map((listing) => (
        <Listing key={listing.id} listing={listing} />
      ))}
    </ListingsGrid>
  )
}
