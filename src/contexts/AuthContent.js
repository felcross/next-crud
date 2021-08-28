import { createContext, useState } from "react"
import firebase from "firebase"
import Router from "next/router"

const AuthContext = createContext()



export function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(null)

  
 const signin = ()=>{
    try{
        setLoading(true)
        return firebase.auth()
        .signInWithPopup(new firebase,auth.signInAnonymously())
        .then((res) =>{
            setUser(res.user)
            Router.push("/index")
        })
    } finally {
        setLoading(false)
    }
}

const signout = ()=>{}



    return <AuthContext.Provider value={{
        user,
        loading,
        signin,
        signout
    }}>{children}</AuthContext.Provider>
}

export const AuthConsumer = AuthContext.Consumer

export default AuthContext 
    
    

