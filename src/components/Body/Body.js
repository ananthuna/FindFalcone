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
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function Body() {
    const [planetsList, setplanetsList] = useState([])
    const [Token, setToken] = useState()
    const [selectedPlanets, setselectedPlanets] = useState([])
    const { setList, vehicle, List, numb, destination, selectedShip, setresult, setTime, time } = useContext(UserContext)
    const [changeValue, setchangeValue] = useState('')
    const [oldDestination, setoldDestination] = useState('')
    const [dist, setdist] = useState()
    const [speed, setspeed] = useState()
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {


        setOpen(true)
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
            setOpen(false);
            setToken(doc.data.token)

        })

    }, [])



    useEffect(() => {
        if (vehicle) {
            let found = List.find(element => element.name === vehicle);
            setspeed(found)
        }

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

    useEffect(() => {
        if (speed && dist) {
            console.log(dist);
            console.log(speed);
            let t
            t = dist.distance / speed.speed
            console.log(t);
            setTime(time + t)

        }else{
            setTime(0)
        }

    }, [speed])





    const handleFind = () => {
        setOpen(true);
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
            console.log('result:' + doc.data);
            setresult(doc.data)
            setOpen(false);
            navigate('/result')
        })


    }


    function handlePlanetSelection(name, index) {

        let found = planetsList.find(element => element.name === name);

        setdist(found)


        for (let i in items) {
            if (items[i] === index) {
                selectedPlanets.splice(i, 1, name)

            }

        }
    }

    const handleReset = () => {
        window.location.reload();
    }





    return (
        <Box sx={{ height: '31.6rem' }}>
            <Box sx={{ pl: '40%', pt: '2rem' }}>
                <Typography variant='h6'>Select planets you wants to search</Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '60%',
                pl: '2rem',
                pr: '2rem'
            }}>

                {items.map((item) => (
                    <Box key={item}>
                        <Typography>{item}</Typography>
                        <Autocomplete
                            id="combo-box-demo"
                            options={planetsList}
                            sx={{ width: 250, height: 50 }}
                            getOptionLabel={(options) => options.name}
                            getOptionDisabled={(option) => !!selectedPlanets.find(element => element === option.name)}
                            renderInput={(params) => <TextField {...params} />}
                            onChange={(event, value) => {
                                handlePlanetSelection(value.name, item)
                            }}
                        />
                        <ShipList destination={item} key={item + "Ship"} />
                    </Box>
                ))}



            </Box>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 1
            }}>
                <Box>
                    <Typography>Time taken:{time}</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button onClick={handleReset} variant="outlined">Reset</Button>
                    <Button onClick={handleFind} variant="contained">Find Falcone</Button>
                </Box>
            </Box>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            >
                <CircularProgress color="inherit" />
            </Backdrop>

        </Box>
    )
}

export default Body

const items = [
    'Destination1',
    'Destination2',
    'Destination3',
    'Destination4']