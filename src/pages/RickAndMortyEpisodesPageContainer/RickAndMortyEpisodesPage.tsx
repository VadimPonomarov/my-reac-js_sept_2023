import * as React from "react";
import {FC} from "react";

import {Box, Button, ButtonGroup, Container, Stack} from "@mui/material";
import {useAppEpisodesEffect} from "common/hooks/useAppEpisodesEffect";

import {EpisodesButtonGroup} from "./EpisodesButtonGroup";
import {EpisodesCard} from "./EpisodesCard";
import styles from "./index.module.scss";

const RickAndMortyEpisodesPage: FC = () => {
    const {
        info,
        setInfo,
        results,
        setResults,
        query,
        setQuery
    } = useAppEpisodesEffect()

    const nextPage = () => {
        setQuery({page: (+query.get("page") + 1).toString()})
    }

    const prevPage = () => {
        setQuery({page: (+query.get("page") - 1).toString()})
    }

    return (
        <div className={styles.rickAndMortyPage}>
            <EpisodesButtonGroup props={{info, prevPage, nextPage}}/>

            <Container sx={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
                {results.length &&
                    results.map(episode =>
                        <EpisodesCard key={episode.id} props={{episode}}/>
                    )
                }
            </Container>
        </div>
    );
}

export {RickAndMortyEpisodesPage}