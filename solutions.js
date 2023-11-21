const task1_1 = async () => {
    const url = 'https://reqres.in/api/users'
    const response = await fetch(url)
    const res = await response.json()
    console.log(res);
}

const task1_2 = async () => {
    try{
        const url = 'https://this-site-doesnt-exists.intocode'
        const response = await fetch(url)
        const res = await response.json()
        console.log(res);
    }catch(err){
        console.log(err.message);
    }
}

const task1_3 = async () => {
    const url = 'https://reqres.in/api/users'
    const response = await fetch(url)
    const res = await response.json()
    console.log(res);
}

const task1_4 = async () => {
    const url = 'https://reqres.in/api/users'
    const response = await fetch(url)
    const res = await response.json()
    console.log(res.data.length);
}

const task1_5 = async () => {
    const url = 'https://reqres.in/api/users/1'
    const response = await fetch(url)
    const res = await response.json()
    console.log(res.data.email);
}

const task2_1 = async () => {
    let user = {
        "first_name": "intocode" 
    }
    const url = 'https://reqres.in/api/users'
    const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify(user)
    })
    const res = await response.json()
    console.log(res);
}

const task2_3 = async () => {
    let user = {
        "first_name": "intocode" 
    }
    const url = 'https://reqres.in/api/users'
    const method = {
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify(user)
    }
    const response = await fetch(url, method)

    const res = await response.json()
    console.log(res);
}

const task2_4 = async () => {
    let user = {
        "name": "into",
        "lastname":"code"
    }
    const url = 'https://reqres.in/api/users'
    const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify(user)
    })
    const res = await response.json()
    console.log(res.id, res.createdAt);
}

const task2_5 = async () => {
    const url = 'https://reqres.in/api/users/5'
    const response = await fetch(url, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json;charset=utf-8'}
    })
    if(response.status === 204){
        console.log('пользователь с id 5 успешно удален')
    }
}

const task2_6 = async () => {
    const url = 'https://reqres.in/api/users/3'
    const response = await fetch(url, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify({first_name: "интукод"})
    })
    if(response.status === 200){
        console.log('пользователь с id 3 успешно изменен')
    }
}