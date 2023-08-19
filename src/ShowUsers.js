import React from 'react'
import axios from 'axios'

const ShowUsers = () => {

    const fetchUsers= async() => {
      const response =  await axios.get('https://jsonplaceholder.typicode.com/users')
      
      return response.data
    }
    const [users, setUsers] = React.useState([])

    React.useEffect(() => {
      fetchUsers().then(data => setUsers(data))
    }, [])

  return (
    <div>
        {
           users.map((user) => {
            return (

          <div key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            </div>
            )
        })}
        
        
    </div>
  )
}

export default ShowUsers