import { Autocomplete, TextField, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import { Box } from '@mui/system'
import React, { useContext, useEffect, useState } from 'react'
import './body.css'
import ShipList from '../shiplist/ShipList'
import axios from 'axios'
import { planetsUrl, tokenUrl, findUrl, VehiclesUrl } from '../URL/Url'
import { UserContext } from '../Context/Context'
import { useNavigate } from 'react-router-dom'

function Body() {
    const [planetsList, setplanetsList] = useState([])
    const [Token, setToken] = useState()
    const [selectedPlanets, setselectedPlanets] = useState([])
    const { setList, vehicle, List, numb, destination, selectedShip, setresult } = useContext(UserContext)
    const [changeValue, setchangeValue] = useState('')
    const [oldDestination, setoldDestination] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        //fetch planets data
        axios.get(planetsUrl).then((doc) => {
            setplanetsList(doc.data)
        }).catch((err) => {
            console.log(err);
        })
        //fetch ship data
        axios.get(VehiclesUrl).then((doc) => {
            setList(doc.data)
        })
        //fetch token 
        axios({
            method: 'post',
            url: tokenUrl,
            headers: {
                'Accept': 'application/json'
            },
        }).then((doc) => {
            console.log('token:' + doc.data.token);
            setToken(doc.data.token)

        })

    }, [])




    useEffect(() => {
        console.log(destination);
        if (changeValue !== vehicle && oldDestination === destination) {
            setList(current =>
                current.map(obj => {
                    if (obj.name === changeValue) {
                        return { ...obj, total_no: obj.total_no + 1 };
                    }
                    return obj;
                }),
            );
        }

        setList(current =>
            current.map(obj => {
                if (obj.name === vehicle && obj.total_no > 0) {
                    setchangeValue(vehicle)
                    setoldDestination(destination)
                    return { ...obj, total_no: obj.total_no - 1 };
                }
                return obj;
            }),
        );



    }, [numb])




    const handleFind = () => {
        const data = {
            token: Token,
            planet_names: selectedPlanets,
            vehicle_names: selectedShip
        }

        const json = JSON.stringify(data);
        console.log(json);


        axios({
            method: 'post',
            url: findUrl,
            data: json,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((doc) => {
            console.log('result' + doc.data.status);
            setresult(doc.data)
            navigate('/result')
        })


    }


    function handlePlanetSelection(name, index) {

        for (let i in items) {
            if (items[i] === index) {
                selectedPlanets.splice(i, 1, name)
            }

        }
    }





    return (
        <Box sx={{ height: '31.6rem' }}>
            <Box sx={{ pl: '40%', pt: '3rem' }}>
                <Typography variant='h6'>Select planets you wants to search</Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                gap: 1,
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '70%',
                pl: '2rem',
                pr: '2rem'
            }}>

                {items.map((item) => (
                    <Box>
                        <Typography>{item}</Typography>
                        <Autocomplete
                            id="combo-box-demo"
                            options={planetsList}
                            sx={{ width: 250, height: 50 }}
                            getOptionLabel={(options) => options.name}
                            getOptionDisabled={(option) => !!selectedPlanets.find(element => element === option.name)}
                            renderInput={(params) => <TextField {...params} />}
                            onChange={(event, value) => { handlePlanetSelection(value.name, item) }}
                        />
                        <ShipList destination={item} />
                    </Box>
                ))}

                <Box sx={{ pt: '5rem' }}>
                    <Typography>Time taken: 120</Typography>
                </Box>

            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button onClick={handleFind} variant="contained">Find Falcone</Button>
            </Box>

        </Box>
    )
}

export default Body

const items = [
    'Destination1',
    'Destination2',
    'Destination3',
    'Destination4']