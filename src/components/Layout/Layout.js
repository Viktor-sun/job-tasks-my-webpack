import React from 'react'
import Container from '../shared/Container'
import Title from '../shared/Title'
import Spinner from '../shared/Spinner'
import AppBar from '../shared/AppBar'

export default function Layout({
  children,
  withTitle,
  titleText,
  withSpinner,
  withAppbar,
}) {
  return (
    <>
      {withAppbar && <AppBar />}
      <Container>
        <main>
          {withTitle && <Title text={titleText} />}
          {withSpinner && <Spinner />}
          {children}
        </main>
      </Container>
    </>
  )
}
