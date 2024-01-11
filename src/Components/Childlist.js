import React, { useEffect, useRef } from 'react'
import { useContext, useState } from 'react';
import { inputDataProvider } from './DataProvider';

const Childlist = ({ ele, i }) => {

    const { removeElement, date } = useContext(inputDataProvider);
    const [editable, seteditable] = useState(false)
    const [leftTime, setleftTime] = useState('')
    const [styobj, setstyobj] = useState()
    const [updatedate, setupdatedate] = useState(ele.date)
    const textInput = useRef(null);



    const getLeftTime = () => {
        let date1 = new Date(updatedate).getTime()
        let date2 = new Date().getTime();
        const miliseconds = date1 - date2
        let Hour = Math.floor((miliseconds / (1000 * 60 * 60)) % 24)
        let Minutes = Math.floor((miliseconds / (1000 * 60)) % 60)
        let Seconds = Math.floor((miliseconds / 1000) % 60)
        let Days = Math.floor((miliseconds / (1000 * 60 * 60 * 24)))
        let time = `${Days}:${Hour}:${Minutes}:${Seconds < 10 ? "0" + Seconds : Seconds}`
        setleftTime(time)
        if (Days <= 0 && Hour <= 0 && Minutes <= 0 && Seconds <= 0) {
            setleftTime(0)
            setstyobj({
                backgroundColor: "white",
                textDecoration: "line-through",
                color: "red"
            })
        } else {
            setstyobj({})
        }
    }
    const inputstyle = {
        border: "black",
        borderWidth: "1px",
        borderStyle: "solid"
    }

    useEffect(() => {
        const itid = setInterval(() => getLeftTime(), 1000);
        return (() => {
            clearInterval(itid)
        }
        )
    }, [updatedate]);

    const handleUpdate = (i) => {
        seteditable(!editable)
        if (date !== "") {
            setupdatedate(date);
        } else {
            setupdatedate(updatedate)
        }
        if (!editable) {
            textInput.current.focus();

        }
    }
    return (

        <div className="list" style={styobj} >
            <div className='sec1'>
                <p className='listPara' contentEditable={editable} suppressContentEditableWarning={true} ref={textInput} style={editable ? inputstyle : {}} spellCheck="false" >{ele.title}</p>
                <p id='date'>{`LeftTime is :${leftTime}   Due Date : ${updatedate}`}</p>
            </div>
            <div className='sec2'>
                <button className='listButton' onClick={() => removeElement(i)} >Remove</button>
                <button className='listButton' onClick={handleUpdate} >{editable ? "Done" : "Update"}</button>

            </div>
        </div>
    )
}



export default Childlist;