import { useState, useEffect, createContext, useContext } from 'react'
import AuthHooks from '../hooks/AuthHooks'
import { useLocation } from 'react-router-dom'

const UserContext = createContext()

const UserProvider = ({ children }) => {
    const location = useLocation()
    const { GetUser } = AuthHooks()
    const [user, setUser] = useState(null)



    const fetchUser = async () => {
        const user = await GetUser()
        if (user) {
            setUser(user)
        }
        console.log(user)
    }

    useEffect(() => {
        fetchUser()
    }, [])


    return (
        <UserContext.Provider value={{ user, refetchUser: fetchUser }}>
            {children}
        </UserContext.Provider>
    )
}

const useUser = () => {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error('useUser must be used within a UserProvider')
    }
    return context
}

export { UserProvider, useUser }
export default UserContext