import { useState } from 'react'

interface Props {
  saveUser: (firstName: string, lastName: string, email: string) => void

}

// eslint-disable-next-line react/prop-types
export const CreateUser: React.FC<Props> = ({ saveUser }) => {
  const [firstValue, setFirstValue] = useState('')
  const [lastValue, setLastValue] = useState('')
  const [emailValue, setEmailValue] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    saveUser(firstValue, lastValue, emailValue)
    setFirstValue('')
    setLastValue('')
    setEmailValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
    <input
      className='new-user'
      value={firstValue}
      onChange={() => {}}
      placeholder='Adalberto'
      autoFocus
    />
    <input
      className='new-user'
      value={lastValue}
      onChange={() => {}}
      placeholder='Pedroza'
    />
    <input
      className='new-user'
      value={emailValue}
      onChange={() => {}}
      placeholder='example@latest.com'
    />
    </form>
  )
}
