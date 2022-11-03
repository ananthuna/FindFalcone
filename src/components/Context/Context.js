import { createContext, useState } from 'react'

export const UserContext = createContext(null)

export default function Context({ children }) {
    const [List, setList] = useState([])
    const [vehicle, setVehicle] = useState('')
    const [numb, setNumb] = useState(0)
    const [destination, setdestination] = useState('')
    const [selectedShip, setselectedShip] = useState([])
    const [result, setresult] = useState(null)




    return (
        <UserContext.Provider value={{
            List,
            setList,
            vehicle,
            setVehicle,
            numb,
            setNumb,
            destination,
            setdestination,
            selectedShip,
            setselectedShip,
            result,
            setresult
        }}>
            {children}
        </UserContext.Provider>
    )
}