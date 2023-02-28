import React, { useState } from 'react'
import { Htag, Button, P, Tag, Rating } from '../components'
import { withLayout } from '../layout/Layout'

function Home(): JSX.Element {
  const [rating, setRating] = useState(2)
  return (
    <>
      <Htag tag='h1'>Hello world</Htag>
      <Rating isEditable={true} rating={rating} setRating={setRating} />
    </>
  )
}

export default withLayout(Home)