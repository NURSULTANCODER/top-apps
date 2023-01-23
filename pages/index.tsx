import React, { useState } from 'react'
import { Htag, Button, P, Tag, Rating } from '../components'

export default function Home(): JSX.Element {
  const [rating, setRating] = useState(2)
  return (
    <>
      <Htag tag='h1'>Hello world</Htag>
      <Rating isEditable={true} rating={rating} setRating={setRating} />
    </>
  )
}
