import * as React from 'react';
import {FC} from 'react';


import {Box, Button, Card, CardContent, Container, Typography} from '@mui/material';
import {IRickAndMortyResult} from 'common';
import moment from 'moment'
import { useNavigate } from 'react-router-dom';

interface IProps {
    props: {
        episode: IRickAndMortyResult,
    }
}

const EpisodesCard: FC<IProps> = ({props}) => {
    const {episode: {id, name, air_date, characters, created}} = props
    const navigate = useNavigate()
    const handleOnClick = () => {
        const iDs =
            characters.map(item => item.split("/").slice(-1)).join(",")
        navigate(`/characters/${iDs}`)
    }

    return (
        <Card sx={{margin: "10px",}}>
            <Button sx={{width: "300px", height: "200px"}} onClick={() => handleOnClick()}>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <CardContent sx={{flex: '1 0 auto'}}>
                        <Typography component="div" variant="h5">
                            {name}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {air_date}
                        </Typography>
                    </CardContent>
                    <Box sx={{display: 'flex', alignItems: 'flex-end', pl: 1, pb: 1}}>
                        <Typography variant={"caption"} textAlign={"right"} sx={{width: "100%"}}>
                            {moment(created).format('DD.MM.YYYY HH:mm:ss')}
                        </Typography>
                    </Box>
                </Box>
            </Button>
        </Card>
    );
};

export {EpisodesCard};