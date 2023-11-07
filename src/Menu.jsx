import React, { useContext } from 'react'
import { MyContext } from './Context'

function Menu() {
  
  const {notes, setNotes, setSelectedNote, data} = useContext(MyContext)
  
  return (
    <div id='menu' className='flex flex-[0.25] max-w-[400px] flex-wrap flex-col py-1 bg-[#202123] overflow-scroll'>
      {data}
    </div>
  )
}

export default Menu