import React from 'react'
import Container from '../shared/Container'
import Title from '../shared/Title'

export default function Layout({ children, withTitle, titleText }) {
  return (
    <Container>
      <main>
        {withTitle && <Title text={titleText} />}
        {children}
      </main>
    </Container>
  )
}
