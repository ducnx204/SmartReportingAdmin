import { useEffect, useState, } from 'react'
import './App.css'
import { db } from './db'
import ButtonCustom from './compoments/Button'
import TableCustom from './compoments/Table'

function App() {
  const [user, setUser] = useState(db.users)

  return (
    <div className='w-[100wh] h-[100vh] '>

      <ButtonCustom />
      <TableCustom />
      {/* {user.map((item, index) => <div key={index} className='text-black'>{(index + 1) + "-" + item.fullName}</div>)} */}

    </div>
  )
}

export default App
