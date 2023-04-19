
import { useEffect, useRef, useState } from 'react'
import './App.css'
import { type User } from './types'
import { ListUsers } from './components/ListUsers'

function App () {
  const [users, setUsers] = useState<User[]>([])
  const originalUsers = useRef<User[]>([])

  // reseteamos el estado a su estado original
  const handleReset = () => {
    setUsers(originalUsers.current)
  }

  // eliminar un objeto de json
  const handleDelete = (id: number) => {
    const filteredUsers = users.filter((user, userid) => user.id !== id)
    setUsers(filteredUsers)
  }

  // hacemos la peticion de todos los usuarios
  useEffect(() => {
    void fetch('https://api.fake-rest.refine.dev/users')
      .then(async res => await res.json())
      .then(response => {
        setUsers(response)
        originalUsers.current = response
      })
  }, [])

  return (
    <div className="App">
      <h1>Prueba Tecnica</h1>
      <header>
        <div className='addUser'>
          <label >FirstName</label>
          <input type="text" />
          <label > LastName</label>
          <input type="text" />
          <label >Email</label>
          <input type="email" />
        </div>
        <div className='action-buttons'>
        <button className='buttom-blue'>
            Adicionar usuario
          </button>
        <button onClick={handleReset} className='buttom-blue'>
            Resetear el estado
          </button>
        </div>
      </header>
      <main>
        <ListUsers deleteUser= {handleDelete} users={users} />
      </main>

    </div>
  )
}

export default App
