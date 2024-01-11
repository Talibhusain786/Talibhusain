import React, { useContext, useState } from 'react'
import { inputDataProvider } from './DataProvider';
import ClearAll from './ClearAll';


export default function FormInput(props) {
    const { todo, setTodo, date, setdate } = useContext(inputDataProvider);
    const [Data, setData] = useState("");
    const handleChange = (e) => {
        setData(e.target.value);
    }

    const SetDatatoContext = () => {
        if (Data.trim().length > 0 && date.length > 0) {
            let newArray = [...todo];
            newArray.push(
                {
                    title: Data,
                    date: date
                }
            );
            setTodo(newArray);
            setData("");
            setdate("")
        }
    }

    return (
        <div className='inputButton'>
            <input type="text" className='text' value={Data} id='input' onChange={handleChange} placeholder="Enter Your Task here..." required />
            <input type="datetime-local" className='text' value={date} onChange={(e) => setdate(e.target.value)} id='input2' required />
            <button className='Addbutton' onClick={SetDatatoContext} >Add</button>
            <ClearAll />
        </div>
    )
}
