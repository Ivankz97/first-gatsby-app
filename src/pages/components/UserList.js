import React, { useContext, useEffect } from 'react'
import { ListGroup } from 'react-bootstrap';
import { UserContext } from '../../context/User/UserContext';


const UserList = () => {

  const { users, getUsers, getProfile } = useContext(UserContext);

  useEffect(() => {
    getUsers();

  }, [])

  if(window !== "undefined"){
    // your document or window manipulation
    return (
      <ListGroup>
        {
          users.map(user => (
            <ListGroup.Item action className='d-flex flex-row justify-content-start' key={user.id}
             onClick={() => getProfile(user.id)} > 
              <img src={user.avatar} className="img-fluid mr-4 rounded-circle" witdth="70" />
              <p>
                { `${user.first_name} ${user.last_name}`}
              </p>
             </ListGroup.Item>
          ))
        }
      </ListGroup>
    )
  }
  
}

export default UserList