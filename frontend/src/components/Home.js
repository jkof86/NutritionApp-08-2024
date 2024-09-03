import { Box, Container, TextField, Toolbar, Typography } from "@mui/material";
import PieChart from "./PieChart";

export default function Home() {

    return (<>
        <Toolbar sx={{
            flexGrow: 1,
            justifyContent: 'center',
            backgroundColor: 'grey',
            border: '1px solid black',
            boxShadow: '0px 0px 2px 2px white',
            marginBottom: '10px',
            padding: '10px',
            width: '100%'
        }}>
            <Typography sx={{
                fontSize: '20px',
                fontStyle: 'bold'
            }}>
                Home
            </Typography>
        </Toolbar>

    </>);
}