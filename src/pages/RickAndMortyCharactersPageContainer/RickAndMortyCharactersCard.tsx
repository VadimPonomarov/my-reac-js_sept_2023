import React, {FC} from 'react';

import {Card, CardActionArea, CardContent, CardMedia, Stack, Typography} from '@mui/material';
import {CharacterType} from 'common';

interface IProps {
    props: {
        character: CharacterType
    }
}

const RickAndMortyCharactersCard: FC<IProps> = ({props}) => {
    const {character: {id, name, image}} = props
    return (
        <Card sx={{width: 300, margin:"10px"}} variant={"elevation"}>
            <CardActionArea>
                <Stack direction={"row"}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={image}
                        alt={name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {id}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {name}
                        </Typography>
                    </CardContent>
                </Stack>
            </CardActionArea>
        </Card>
    );
};

export {RickAndMortyCharactersCard};