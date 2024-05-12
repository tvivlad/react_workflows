import React, { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const name = 'Ivan'
  const surname = 'Ivanov'
  const email = 'ivanov@mail.ru'
  const phone = '+79273454455'
  const [showSubTitle, setShowSubTitle] = useState(false)
  const [showDetail, setShowDetail] = useState(false)
  const [value, setValue] = useState('')

  useEffect(() => {
    setTimeout(() => {
      setShowSubTitle(true)
    }, 100)
  }, [])
  return (
    <div>
      <h4>Приложение "Карточка пользователя"</h4>
      <h3 style={{ color: 'green' }}>Карточка пользователя</h3>
      {showSubTitle && (
        <h4 data-testid='h4-id'>Подробная информация о пользователе</h4>
      )}
      <div>Имя: {name}</div>
      <div>Фамилия: {surname}</div>
      {showDetail && (
        <div data-testid='block-toggle'>
          <div>email:{email}</div>
          <div>телефон:{phone}</div>
        </div>
      )}
      <button
        data-testid='btn-toggle'
        onClick={() => setShowDetail(!showDetail)}
      >
        Подробнее
      </button>
      <div>
        <input
          data-testid='input-elem'
          onChange={(e) => setValue(e.target.value)}
          type='text'
          placeholder='Добавить комментарий...'
        />

        <h4>
          Ваш коментарий: <span data-testid='value-elem'>{value}</span>
        </h4>
        <button>Добавить</button>
      </div>
    </div>
  )
}

export default App
