import React, { useContext } from 'react'
import './Todo.css'
import { inputDataProvider } from './DataProvider';

export default function ClearAll() {
  const { setTodo } = useContext(inputDataProvider);
  const removeAllData = () => {
    setTodo([])
  }

  return (
    <div>
      <button className='removeButton' onClick={removeAllData} >ClearAll</button>
    </div>
  )
}
