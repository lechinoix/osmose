import { Metadata } from '@redwoodjs/web'

import { useAuth } from 'src/auth'

const HomePage = () => {
  const { isAuthenticated, signUp } = useAuth()
  return (
    <>
      <Metadata title="Home" description="Home page" />
      {/* MetaTags, h1, paragraphs, etc. */}

      <p>{JSON.stringify({ isAuthenticated })}</p>
      <button
        type="button"
        onClick={() => {
          console.log('clicked')
          signUp()
        }}
      >
        sign up
      </button>
    </>
  )
}

export default HomePage
