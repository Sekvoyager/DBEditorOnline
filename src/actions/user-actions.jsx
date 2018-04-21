export function signIn(login, password, email){
    return{
        type: "LOGIN",
        login,
        password
    }
}

export function exit(login, password, email){
    return{
        type: "EXIT",
        login,
        password
    }
}