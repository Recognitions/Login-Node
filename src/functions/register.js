import api from './axios'


async function register(e){
    e.preventDefault()

    const user = {
        firstName: e.target[0].value,
        lastName: e.target[1].value,
        email: e.target[2].value,
        password: e.target[3].value,
        birth: e.target[4].value,
    }
    
    const insert = await api.get(`/register/${user.firstName}/${user.lastName}/${user.email}/${user.password}/${user.birth}`)
    
    e.target.reset()
}

export default register