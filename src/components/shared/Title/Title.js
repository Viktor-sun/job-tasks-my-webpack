import React from 'react'
import s from './Title.module.css'

export default function Title({ text = 'Hello' }) {
  return <h1 className={s.title}>{text}</h1>
}
