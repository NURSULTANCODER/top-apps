import React, { useState } from 'react'
import { Htag, Button, P, Tag, Rating } from '../components'
import { Layout } from '../layout/Layout'

export default function Home(): JSX.Element {
  const [rating, setRating] = useState(2)
  return (
    <Layout>
      <Htag tag='h1'>Hello world</Htag>
      <Rating isEditable={true} rating={rating} setRating={setRating} />
    </Layout>
  )
}
