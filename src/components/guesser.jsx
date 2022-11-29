import React from 'react'
import axios from 'axios'
import '../components/guesser.css'

export const Guesser =({update})=>{
    const [name,setName]=React.useState("");
    const [data,setData]=React.useState([]);
    const nameRef=React.useRef(null);
    function sendGuess(){
        if (nameRef.current.value.length!==0){
            setName(nameRef.current.value)
        }
    }
    React.useEffect(()=>{
        if(name.length!==0){
        axios.get('https://api.agify.io/?name='+name).then(res=>{
            if (res.status===200){
                setData(res.data)
                update(res.data)
                nameRef.current.value="";
            }
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[name])
    return(<div className="container-fluid col-lg-11 col-md-11 col-sm-4">
        <div className='smallDiv'>Please enter a name here:</div>
        <input type="text" id="name" name="name" ref={nameRef}/>
        <button id="submit" onClick={sendGuess}>Submit</button>
    </div>)
}