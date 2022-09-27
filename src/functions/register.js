import React from 'react';
import { createRoot } from 'react-dom/client';
import api from './axios'
import alerts from './alerts'
import Alert from '../components/Alert'

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
            //alertsArea.render()
        },2000)
    }

}

export default register