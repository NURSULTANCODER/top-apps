import React from 'react'
import { Htag, Button, P, Tag } from '../components'

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Hello world</Htag>
      <Button appearance="primary" arrow='right'>btn text</Button>
      <Button appearance="ghost" arrow='down'>btn text</Button>
      <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Perferendis eum excepturi odit. Adipisci, molestias! 
        Impedit similique magni sunt reiciendis ducimus sed quae
         nostrum natus ratione, itaque, eaque commodi non fuga.</P>
      <P size='l'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Perferendis eum excepturi odit. Adipisci, molestias! 
        Impedit similique magni sunt reiciendis ducimus sed quae
         nostrum natus ratione, itaque, eaque commodi non fuga.</P>
      <Tag>tag 1</Tag>
      <Tag color='red'>tag 1</Tag>
      <Tag color='primary'>tag 1</Tag>
      <Tag color='primary' href='https://mail.google.com/mail/u/0/#inbox'>tag 1</Tag>
      <Tag color='primary' size='s'>tag 1</Tag>
      <Tag color="gray">tag 1</Tag>
      <Tag color='green'>tag 1</Tag>
      <Tag>tag 1</Tag>
      <Tag>tag 1</Tag>
      <Tag>tag 1</Tag>
      <Tag>tag 1</Tag>
      <Tag>tag 1</Tag>
    </>
  )
}
