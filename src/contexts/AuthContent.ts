import { createContext, useState } from "react"

const AuthContext = createContext()

 const signin = ()=>{
     try{}
 }


export function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(null)
    return <AuthContext.Provider value={{
        user,
        loading,
        signin,
        signout
    }}>{children}</AuthContext.Provider>
}

export const AuthConsumer = AuthContext.Consumer

export default AuthContext 
    
    

