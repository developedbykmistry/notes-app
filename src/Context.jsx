import { createContext, useEffect, useState } from "react";

export const MyContext = createContext()

export const  MyProvider = (props) => {

    const [data, setData] = useState([])

    const [notes, setNotes] = useState(localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [{id: 0, title: "New Note", body: "Text goes here"}])

    const [selectedNote, setSelectedNote] = useState(notes[0])

    const [bodyHeight, setBodyHeight] = useState(0)

    useEffect(() => {
        updateNote()
        localStorage.setItem('notes', JSON.stringify(notes))
        setBodyHeight(selectedNote?.body.scrollHeight)
    }, [selectedNote])

    const updateNote = () => {
        for(let i = 0; i < notes.length; i++){
            if(notes[i].id == selectedNote.id){
                notes[i] = selectedNote;
            }
        }
    }

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    const updateSelectedTitle = (e) => {
        setSelectedNote({id: selectedNote.id, title: e.target.value, body: selectedNote.body})
    }

    const captureBodyInput = (e) => {
        setSelectedNote({id: selectedNote.id, title: selectedNote.title, body: e.target.value})
        setBodyHeight(e.target.scrollHeight)
    }

    const updateSelectedBody = (e) => {
        setSelectedNote({id: selectedNote.id, title: selectedNote.title, body: e.target.value})
        console.log(e.target.scrollHeight)
        this.style.height = e.target.scrollHeight
    }

    const addNote = () => {
        const note = {id: Date.now(), title: "", body: ""}
        setSelectedNote(note)
        setNotes(prev => [...prev, note])
        
    }

    const deleteNote = (el) => {
        setNotes(
            notes => {
                return notes.filter(note => note !== el)
            }
        )
    }

    function showText(text){
        if(text){
            if(text.length && text.length > 75){
                return text.substring(0, 75) + "  ..."
            }
            else {
                return text
            }
        }
        else {
            return "No text"
        }
    }

    useEffect(() => {

        {setData(notes.map(el => {
            return (
                <div id={el.id} onClick={() => setSelectedNote(el)} className='w-full h-[120px] border-b-2 border-gray-600 px-4 py-6 flex-wrap relative'>
                    <span className="absolute top-10 right-10" onClick={() => deleteNote(el)}>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
                    </span>
                    <h1 className='text-lg font-medium'>{el.title ? el.title : "Untitled"}</h1>
                    {/* <p className='py-2'>{el.body.length > 75 ? el.body.substring(0, 75) + " ...." : el.body}</p> */}
                    {/* <p className='py-2'>{
                        el.body ? el.body : (el.body.length > 75 && el.body) ? el.body.substring(0, 75) + "..." : "No text" 
                    }</p> */}
                    {showText(el.body)}
                </div>
            )
        }))}
    }, [selectedNote, notes])
 
    return <MyContext.Provider 
    value={{ notes, setNotes, selectedNote, setSelectedNote, updateSelectedTitle,updateSelectedBody, data, addNote, captureBodyInput, bodyHeight, setBodyHeight }}>
        {props.children}
    </MyContext.Provider>
}