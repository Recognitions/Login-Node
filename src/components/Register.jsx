import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Input from './Input'
import Alert from './Alert'
import api from '../functions/axios'
import alerts from '../functions/alerts'

function Register(){

    const [value, getValue] = useState(0)

    async function register(e){
        e.preventDefault()
        const user = {
            firstName: e.target[0].value,
            lastName: e.target[1].value,
            email: e.target[2].value,
            password: e.target[3].value,
            birth: e.target[4].value,
        }
    
        const query = await api.get(`/register/${user.firstName}/${user.lastName}/${user.email}/${user.password}/${user.birth}`)
        
        console.log((query.data))
        
        const alertsArea = createRoot(document.getElementById("alertsArea"))
        if(query.data.affectedRows==1){
            e.target.reset()
            alertsArea.render(<Alert text={alerts[1]}/>)
            setTimeout(()=>{
                alertsArea.render()
            },2000)
        }else if(query.data[0].error>=0){
            alertsArea.render(<Alert text={alerts[query.data[0].error]}/>)
            setTimeout(()=>{
                alertsArea.render()
            },2000)
        }
    
    }

    return(
        <form id="register" onSubmit={register}>
            <h2>Register</h2>
            <input type="text" className="btn" placeholder='inserir valor' onChange={(event) => {getValue(event.target.value)}}/>
            <input type="text" name="" id="" value={value} placeholder="valor" />
            <Input type="text" placeholder="First Name"/>
            <Input type="text" placeholder="Last Name"/>
            <Input type="email" placeholder="E-mail"/>
            <Input type="password" placeholder="Password"/>
            <Input type="date"/>
            <Input type="submit" value="Complete"/>
        </form>
    )
}

export default Register