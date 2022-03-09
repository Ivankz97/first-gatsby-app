import React, { useContext } from 'react'
import { Card, Alert } from 'react-bootstrap';
import { UserContext } from '../../context/User/UserContext';

const Profile = () => {


  const { selectedUser } = useContext(UserContext);

  return (
    <>
      {
        selectedUser ? 
        (
          <Card>
            <Card.Body>
            <img src={selectedUser.avatar} className='card-img-top rounded-circle m-auto img-fluid' style={{ width: 180 }} />
            <h1>
              {selectedUser.first_name} {selectedUser.last_name}
            </h1>
            <h3>Email: {selectedUser.email} </h3>
            </Card.Body>
          </Card>
        
        
        ) : (<Alert variant='primary'>No user selected</Alert>)

      }
    </>
  )
}

export default Profile