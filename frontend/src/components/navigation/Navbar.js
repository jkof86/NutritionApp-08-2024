import { Toolbar, Button, IconButton, Box } from "@mui/material";
import { Link } from "../../../node_modules/react-router-dom/dist/index";
import NavDrawer from "./NavDrawerProfessional";

// export default function Navbar({ loggedIn, setLoggedIn }) {

export default function Navbar() {

    // useEffect(() => {
    //     const loggedInUser = localStorage.getItem('loggedInUser');
    //     if (loggedInUser) {
    //         setLoggedIn(true);
    //     }
    // }, []);

    return (<>

        {
            <Toolbar sx={{
                //this rgb value is semi transparent
                background: 'rgba(0,0,0,0)',
                color: 'white', fontSize: '32px',
                // justifyContent: 'center',
                width: '100vw',
                marginBottom: '10px'
            }}
                variant="menu"
                position="static"
            >
                <Box textAlign={"center"} width={'100vw'}>
                    <Button variant='contained' sx={{
                        backgroundColor: 'grey',
                        borderRadius: '0px',
                        margin: '0px',
                        marginTop: '10px'
                    }}
                        component={Link} to='/'>
                        Home
                    </Button>
                    <Button variant='contained' sx={{
                        backgroundColor: 'grey',
                        borderRadius: '0px',
                        margin: '0px',
                        marginTop: '10px'
                    }}
                        component={Link} to='/professional'
                    >
                        Professional
                    </Button>

                    <Button variant='contained' sx={{
                        backgroundColor: 'grey',
                        borderRadius: '0px',
                        margin: '0px',
                        marginTop: '10px'
                    }}
                        component={Link} to='fitness'>
                        Fitness / Nutrition
                    </Button>

                    <Button variant='contained' sx={{
                        backgroundColor: 'grey',
                        borderRadius: '0px',
                        margin: '0px',
                        marginTop: '10px'
                    }}
                        component={Link} to='gaming'>
                        Gaming
                    </Button>
                </Box>
            </Toolbar>
        }
    </>)
}
