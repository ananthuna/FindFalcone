import { createContext, useState } from 'react'

export const UserContext = createContext(null)

export default function Context({ children }) {
    const [List, setList] = useState([])
    const [vehicle, setVehicle] = useState('')
    const [numb, setNumb] = useState(0)
    const [selectedVehicle, setselectedVehicle] = useState([])



    return (
        <UserContext.Provider value={{
            List,
            setList,
            vehicle,
            setVehicle,
            numb,
            setNumb,
        }}>
            {children}
        </UserContext.Provider>
    )
}