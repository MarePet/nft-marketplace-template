import React from 'react'
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>React app</title>
                <meta name="viewport" content="width=device-width,initial-scale=1"/>
        </Helmet>
    </div>
  )
}

export default Home