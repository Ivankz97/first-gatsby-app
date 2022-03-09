import * as React from 'react'
import { UserContext } from '../context/User/UserContext'
import Layout from './components/layout'
import { Profile } from './components/Profile'
import { UserList } from './components/UserList'

const UserPage = () => {
  return (
    <Layout pageTitle="Users">
    <div className='container p-4'>
        <div className='row'>
          <div className='col-md-7'>
            <UserList />
          </div>
          <div className='col-md-5'>
            <Profile />
          </div>
        </div>
     </div>
  </Layout>
  )
}

export default UserPage