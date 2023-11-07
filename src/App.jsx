import './App.css'
import Display from './Display'
import Menu from './Menu'
import { MyProvider } from './Context'


function App() {
  return (
    <MyProvider>
      <div className='flex h-auto min-h-screen w-full bg-[#343541] text-white'>
        <Display/>
        <Menu/>
      </div>
    </MyProvider>
  )
}

export default App
