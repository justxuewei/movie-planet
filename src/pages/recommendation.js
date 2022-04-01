import React from "react";
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material'

class WhatToWatch extends React.Component {
    render() {
        return (
            <div>
                <div style={{"margin": "20px 10px"}}>
                    <Typography gutterBottom variant={"h4"} component={"div"}>
                        What To Watch
                    </Typography>
                </div>
                <Card style={{"margin": "10px 0"}}>
                    <CardMedia
                        component={"img"}
                        height={"200"}
                        image={"https://m.media-amazon.com/images/M/MV5BZTE2YTY3YTMtM2FlMS00YmI3LTgyMWUtM2FhMWIyZWRmMDk5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UY720_.jpg"}
                        alt={"picture"} />
                    <CardContent>
                        <Typography gutterBottom variant={"h5"} component={"div"}>
                            The Batman
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Street-smart Nathan Drake is recruited by seasoned treasure hunter Victor "Sully" Sullivan to recover a fortune amassed by Ferdinand Magellan, and lost 500 years ago by the House of Moncada.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Add to watchlist</Button>
                    </CardActions>
                </Card>
                <Card style={{"margin": "10px 0"}}>
                    <CardMedia
                        component={"img"}
                        height={"200"}
                        image={"https://m.media-amazon.com/images/M/MV5BNDI5YjY1NzktODJlMC00Zjk0LThlZGYtYTg3MDk0MGVlZDgyXkEyXkFqcGdeQXVyMTMwMTQyMDI5._V1_FMjpg_UX750_.jpg"}
                        alt={"picture"} />
                    <CardContent>
                        <Typography gutterBottom variant={"h5"} component={"div"}>
                            Uncharted
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Add to watchlist</Button>
                    </CardActions>
                </Card>
                <Card style={{"margin": "10px 0"}}>
                    <CardMedia
                        component={"img"}
                        height={"200"}
                        image={"https://m.media-amazon.com/images/M/MV5BOTIzODUzYzItM2UzZC00OGYwLTgwZDMtOWQ0ZThlN2FiODIxXkEyXkFqcGdeQWpnYW1i._V1_QL75_UX1000_CR0,0,1000,563_.jpg"}
                        alt={"picture"} />
                    <CardContent>
                        <Typography gutterBottom variant={"h5"} component={"div"}>
                            Spider-Man: No Way Home
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Add to watchlist</Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

class Watchlist extends React.Component {
    render() {
        return (
            <div>
                <div style={{"margin": "20px 10px"}}>
                    <Typography gutterBottom variant={"h4"} component={"div"}>
                        Watchlist
                    </Typography>
                </div>
            </div>
        )
    }
}

class Recommendation extends React.Component {
    render() {
        return (
            <div>
                {/*TODO: add to redirection to*/}
                <WhatToWatch />
                {/*// people you may like*/}
                {/*// watch list*/}
                <Watchlist />
            </div>
        )
    }
}

export default Recommendation;
