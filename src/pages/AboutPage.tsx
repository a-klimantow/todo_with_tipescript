import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
  const { push } = useHistory()
  return (
    <>
      <h1>Страница информации</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam impedit maxime eligendi facilis velit explicabo nobis, dolore nemo culpa quia, perspiciatis quae dolores vero ducimus. Culpa tempore assumenda ex.</p>
      <button className="btn" onClick={() => push('/')}>Обратно к списку дел</button>
    </>
  )
}