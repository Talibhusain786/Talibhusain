import React from 'react'
import DataProvider from './DataProvider'
import FormInput from './FormInput'
import FormList from './FormList'
import './Todo.css'

export default function Todo() {
    return (
        <DataProvider>
            <div className='space'>
                <div className='toDoApp'>
                    <h1 className='Heading'>ToDo App</h1>
                    <FormInput />
                    <FormList />
                </div>
            </div>
        </DataProvider>
    )
}
