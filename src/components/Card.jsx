import React from 'react'
import './Card.css'
//https://jsonplaceholder.typicode.com/users
import avatar from '../assets/avatar.png'

export default function Card() {
  const [users, setUsers] = React.useState([])

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      setUsers(data)
    }

    fetchData()
  }, [])

  return (
    <>
      <div className="banner"></div>
      <div className="card-container">
        {users.map((user) => (
          <div
            key={user.id}
            className="card"
          >
            <div className="ellipse">...</div>
            {/* Add this div for the ellipse */}
            <img
              src={avatar}
              alt={user.name}
            />
            <h2>{user.name}</h2>
            <div className="details">
              <div className="project">
                <strong style={{ fontSize: 12 }}>
                  {user.phone.split('x')[0]}
                </strong>
                <p>Phone</p>
              </div>
              <div className="prototype">
                <strong style={{ fontSize: 12 }}>{user.website}</strong>
                <p>Website</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
