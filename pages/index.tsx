import axios from 'axios'
import { GetStaticProps } from 'next'
import React, { useState } from 'react'
import { Htag, Button, P, Tag, Rating } from '../components'
import { MenuItem } from '../interfaces/menu.interface'
import { withLayout } from '../layout/Layout'

function Home({ menu }: HomePageProps): JSX.Element {
  const [rating, setRating] = useState(2)
  return (
    <>
      <Htag tag='h1'>Hello world</Htag>
      <Rating isEditable={true} rating={rating} setRating={setRating} />
      <ul>{menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}</ul>
    </>
  )
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory,
  }).then(data => {
    console.log(data)
    return data})
  return {
    props: {
      menu, 
      firstCategory
    }
  }
  
}

interface HomePageProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}