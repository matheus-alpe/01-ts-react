import { useEffect, useState } from 'react'

import API from './services/api'
import { IUser } from './interfaces'

import ItemUser from './components/ItemUser'

function App() {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    API.get<IUser[]>('/users').then((response) => {
      setUsers(response.data)
    })
  }, [])

  return (
    <div className="App">
      <ul className="list-users">
        {users.map((user) => (
          <ItemUser
            user={user}
            key={user.email}
          />
        ))}
      </ul>
    </div>
  )
}

export default App
