import { Autocomplete, TextField, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import { Box } from '@mui/system'
import React, { useContext, useEffect, useState, useSyncExternalStore } from 'react'
import './body.css'
import ShipList from '../shiplist/ShipList'
import axios from 'axios'
import { planetsUrl, tokenUrl, findUrl, VehiclesUrl } from '../URL/Url'
import { UserContext } from '../Context/Context'

function Body() {
    const [planetsList, setplanetsList] = useState([])
    const [Token, setToken] = useState()
    const [selectedPlanets, setselectedPlanets] = useState([])
    const { setList, vehicle, List, numb } = useContext(UserContext)

    useEffect(() => {
        axios.get(planetsUrl).then((doc) => {
            setplanetsList(doc.data)
            // console.log('planits');
        }).catch((err) => {
            console.log(err);
        })
        axios.get(VehiclesUrl).then((doc) => {
            setList(doc.data)
        })
    }, [])

    useEffect(() => {
        
        setList(current =>
            current.map(obj => {
                if (obj.name === vehicle && obj.total_no > 0) {
                    
                    return { ...obj, total_no: obj.total_no - 1 };
                }
                return obj;
            }),
        );
    }, [numb])





    const data = {
        token: Token,
        planet_names: selectedPlanets,
        vehicle_names: [
            'Space pod',
            'Space rocket',
            'Space rocket',
            'Space rocket'
        ]
    }

    const json = JSON.stringify(data);



    const handleFind = () => {
        axios({
            method: 'post',
            url: tokenUrl,
            headers: {
                'Accept': 'application/json'
            },
        }).then((doc) => {
            console.log(doc.data);
            setToken(doc.data.token)
        })

        if (Token) {
            axios({
                method: 'post',
                url: findUrl,
                data: json,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then((doc) => {
                console.log(doc.data);
            })
        }
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
                        <ShipList />
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