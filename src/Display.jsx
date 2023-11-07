import React, { useContext, useEffect } from 'react'
import  useState from 'react'
import { MyContext, MyProvider }  from './Context'
import "../src/App.css"


function Display() {

    const {selectedNote, setSelectedNote, notes, updateSelectedTitle, updateSelectedBody, addNote, bodyHeight, setBodyHeight, captureBodyInput} = useContext(MyContext)

    useEffect(() => {
      // setBodyHeight(selectedNote.body.scrollHeight)
    }, [])

  return (
    <div className='flex flex-col flex-1 h-auto py-10 pl-32 pr-20'>
        <nav className='w-full flex items-start justify-end h-8'>
            <div onClick={() => addNote()}>
              <svg className='text-3xl cursor-pointer' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z" clip-rule="evenodd"></path></svg>
            </div>
        </nav>

        <main id='a' className='pl-20 py-20 font-mono h-full overflow-visible'>
            <input 
            type="text" 
            placeholder='New Note...'
            onChange={(e) => updateSelectedTitle(e)}
            value={selectedNote ? selectedNote.title : " "}
            className='bg-transparent text-gray-100 text-3xl outline-none w-[70%]'
            />
            <textarea
            value={selectedNote ? selectedNote.body : " "}
            onChange={(e) => captureBodyInput(e)}
            className="bg-transparent text-xl w-full overflow-clip min-h-full resize-none outline-none mt-20"
            spellCheck="false"
            style={{height: bodyHeight + "px"}}
            placeholder='Enter text here...'
            id='textbox'
            >
            </textarea>
        </main>
    </div>
  )
}

export default Display