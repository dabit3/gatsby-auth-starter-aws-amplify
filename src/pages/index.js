import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import Amplify from 'aws-amplify'
import config from '../aws-exports'
Amplify.configure(config)

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/app/profile">Your profile</Link><br />
    <Link to="/app/home">Home</Link><br />
    <Link to="/app/login">Sign In</Link>
  </Layout>
)

export default IndexPage
