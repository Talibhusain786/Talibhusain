import React, { useContext } from 'react'
import Childlist from './Childlist';
import { inputDataProvider } from './DataProvider';
export default function FormList(props) {
    const { todo } = useContext(inputDataProvider);
    return (
        <div className='groupOfLists'>
            {todo.map((ele, i) => {
                return (
                    <Childlist key={i} ele={ele} i={i} />
                );
            })}
        </div>


    )
}
