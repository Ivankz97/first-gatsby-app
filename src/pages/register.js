import * as React from 'react'
import Layout from './components/layout'
import RegisterUser from './components/RegisterUser'

const RegisterPage = () => {
  return (
    <Layout pageTitle="Register">
      <RegisterUser />
    </Layout>
  )
}

export default RegisterPage