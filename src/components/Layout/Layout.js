import React from 'react'
import Container from '../shared/Container'
import Title from '../shared/Title'
import Spinner from '../shared/Spinner'

export default function Layout({
  children,
  withTitle,
  titleText,
  withSpinner,
}) {
  return (
    <Container>
      <main>
        {withTitle && <Title text={titleText} />}
        {withSpinner && <Spinner />}
        {children}
      </main>
    </Container>
  )
}
