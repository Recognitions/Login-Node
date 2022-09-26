import api from './axios'
import alerts from './alerts'

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
    //e.target.reset()
    
    if(query.data.affectedRows==1){
        e.target.reset()
    }else if(query.data[0].error==0){
        console.log(alerts[query.data[0].error])
    }
}

export default register