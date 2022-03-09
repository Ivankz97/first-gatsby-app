import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Layout from './components/layout'
import Profile from './components/Profile'
import UserList from './components/UserList'

const UserPage = () => {
  return (
    <Layout pageTitle="Users">
      <Container>
        <Row>
          <Col md={7}>
            <UserList />
          </Col>
          <Col md={5}>
            <Profile />
          </Col>
        </Row>
      </Container>
    
  </Layout>
  )
}

export default UserPage