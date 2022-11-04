import { createContext, useState } from 'react'

export const UserContext = createContext(null)

export default function Context({ children }) {
    const [List, setList] = useState([])
    const [vehicle, setVehicle] = useState('')
    const [numb, setNumb] = useState(0)
    const [destination, setdestination] = useState('')
    const [selectedShip, setselectedShip] = useState([])
    const [result, setresult] = useState(null)
    const [time, setTime] = useState(0)




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
            setresult,
            setTime,
            time
        }}>
            {children}
        </UserContext.Provider>
    )
}