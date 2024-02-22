import React, {FC} from 'react';

import {Box, Button, ButtonGroup, Container} from '@mui/material';
import {IRiCkAndMortyInfo} from 'common';

interface IProps {
    props: {
        info: IRiCkAndMortyInfo | {},
        prevPage: () => void,
        nextPage: () => void,
    }
}

const EpisodesButtonGroup: FC<IProps> = ({props}) => {
    const {info, prevPage, nextPage} = props
    return (
        <Box sx={{position:"fixed", width:"100vw", top:0, zIndex:"1000"}}>
            <Container sx={{display: "flex", justifyContent: "center"}}>
                <ButtonGroup size={"small"}>
                    <Button disabled={!Object(info)["prev"]} onClick={prevPage}>Prev</Button>
                    <Button disabled={!Object(info)["next"]} onClick={nextPage}>Next</Button>
                </ButtonGroup>
            </Container>
        </Box>
    );
};

export {EpisodesButtonGroup};