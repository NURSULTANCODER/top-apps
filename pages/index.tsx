import React from 'react'
import { Htag, Button } from '../components'

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Hello world</Htag>
      <Button appearance="primary">btn text</Button>
      <Button appearance="ghost">btn text</Button>
    </>
  )
}
