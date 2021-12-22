import React from 'react'
import Container from '../shared/Container'
import Navigation from '../Navigation/Navigation'
import Title from '../shared/Title'

export default function Layout({ children, withNav, withTitle, titleText }) {
  return (
    <Container>
      {withNav && <Navigation />}
      <main>
        {withTitle && <Title text={titleText} />}
        {children}
      </main>
    </Container>
  )
}
