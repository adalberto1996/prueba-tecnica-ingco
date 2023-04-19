import { type User } from '../types'

// tipado de los datos<
interface Props {
  deleteUser: (id: number) => void
  users: User[]
}

export function ListUsers ({ deleteUser, users }: Props) {
  return (
        <table width='100%' className='table-User'>
            <thead>
                <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>Actiones</th>
                </tr>
            </thead>

            <tbody className='showColors' >
                {
                    users.map((user) => {
                      return (
                        (user.status === true)
                          ? <tr key={user.id}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td className='cellButtom'>
                                <button onClick={() => {
                                  deleteUser(user.id)
                                }} className='buttonColor'>Eliminar</button>
                            </td>
                        </tr>
                          : ''
                      )
                    })
                }
            </tbody>
        </table>
  )
}
