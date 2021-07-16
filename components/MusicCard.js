import Image from 'next/image'
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marginRight: 10,
        padding: 10,
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 250,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(0),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

function MusicCard({ data }) {
    const classes = useStyles();
    const theme = useTheme();

    return (

        <div style={{ height: "max-content", display: "flex", margin: "20px", overflowx: "scroll", scrollbarwidth: "none" }}>
            {
                data.map((item) => (
                    <Card className={classes.root}>
                        <CardMedia
                            className={classes.cover}>
                            <Image src={item.image} width={250} height={250} objectFit="cover" />
                        </CardMedia>

                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography component="h5" variant="h5">
                                    Live From Space
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {item.name}
                                </Typography>
                            </CardContent>
                            <div className={classes.controls}>
                                <IconButton aria-label="play/pause">
                                    <PlayArrowIcon className={classes.playIcon} />
                                </IconButton>

                            </div>
                        </div>


                    </Card>

                ))
            }


        </div >




    )
}

export default MusicCard


