import {
    Box, Toolbar, Typography,
    Grid, Card, CardActionArea,
    CardMedia
} from "@mui/material";
import { Link } from 'react-router-dom';
import SlideShowFitness from "./SlideShowFitness";
import NavDrawerGaming from "./navigation/NavDrawerGaming";

export default function ContactGaming() {

    return (<>
        
        {<NavDrawerGaming />}

        {/********************************************************/}

        {/* <Container disableGutters={false} sx={{ width: '100vw' }}> */}
        <center>
            <Box padding={0} sx={{
                justifyContent: 'center',
                backgroundColor: 'white',
                borderRadius: '25px',
                border: '1px solid black',
                boxShadow: '0px 0px 2px 2px white',
                padding: '10px',
                margin: '20px',
                width: '90vw'
            }}>
                <center>
                    <SlideShowFitness />
                </center>

                <Grid container spacing={4} sx={{ justifyContent: 'center' }}>

                    {/********************************************************/}

                    <Grid item xs={2} >

                        <center>
                            <Card sx={{
                                // border: '2px solid black',
                                minWidth: '75%',
                                borderRadius: '25px',
                                padding: '5px',
                                margin: '20px',
                                textAlign: 'center',
                            }}>
                                <CardActionArea component={Link} to='https://www.youtube.com/@jkof86' target="_blank">
                                    <CardMedia
                                        component="img"
                                        alt="Youtube Icon"
                                        image={require("../images/icons/youtube-transparent-png-15.png")}
                                    >
                                    </CardMedia>
                                    {/* <CardContent >

                                    </CardContent> */}
                                </CardActionArea>

                                {/* <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions> */}

                            </Card >
                        </center>

                    </Grid>

                    {/********************************************************/}
                 
                </Grid>

            </Box>
        </center>
    </>);
}