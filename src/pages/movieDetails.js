import React from "react";
import Box from "@mui/material/Box";
import {Alert, Snackbar, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {history} from 'umi'
import getQueryVariable from '../modules/getQueryVar'

let movies = {
    'The Batman': {
        images: ['https://m.media-amazon.com/images/M/MV5BZTE2YTY3YTMtM2FlMS00YmI3LTgyMWUtM2FhMWIyZWRmMDk5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UY720_.jpg',
            'https://m.media-amazon.com/images/M/MV5BM2I1Y2Y1Y2UtYzRmZC00N2E1LWI1YjItNGIyMDAwYjU3YjJjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1280_.jpg',
            'https://m.media-amazon.com/images/M/MV5BYjIyNzZlZDktZjZjMS00OTVhLTgxYWQtMjJkNjRlZDMyNTlhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1280_.jpg',
            'https://m.media-amazon.com/images/M/MV5BYzQyYTY5NWQtNjM4Mi00ZWRhLWI3YzItZDRmNThkYTE3ZDRlXkEyXkFqcGdeQXVyODUxNjcxNjE@._V1_.jpg',
            'https://m.media-amazon.com/images/M/MV5BOTc3ODFlMWYtZDJjNC00ZGQyLTk5MWQtNzliNWMzOWVlM2FlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1280_.jpg'],
        actors: ['Robert Pattinson', "Zoe Kravitz", "Jeffrey Wright"],
        description: "When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
        type: ['action', 'crime', 'drama'],
        ratings: '8.2/10',
        date: '2022',
        watchlist: false,
    },
    'Uncharted': {
        images: ['https://m.media-amazon.com/images/M/MV5BNDI5YjY1NzktODJlMC00Zjk0LThlZGYtYTg3MDk0MGVlZDgyXkEyXkFqcGdeQXVyMTMwMTQyMDI5._V1_FMjpg_UX750_.jpg',
            'https://m.media-amazon.com/images/M/MV5BM2ZhZjQwYmItZDZjNC00YTI0LWI5MGYtM2I0YmNiNmFiMDM3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1280_.jpg',
            'https://m.media-amazon.com/images/M/MV5BNDNkNzRmYTMtMGZkYi00YmJmLTgwYjctM2I2MWRkMWY0ZDNiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
            'https://m.media-amazon.com/images/M/MV5BNDY0YzczZmQtMDUxYS00OTQwLTljYjYtZGQ4YTliN2RmYTcxXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1280_.jpg',
            'https://m.media-amazon.com/images/M/MV5BZGI5NTFkZDctZmEzYi00MTM4LTlmYTItYmFmYjRiNDQ5NGI0XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1280_.jpg'],
        actors: ['Tom Holland', "Zoe Kravitz", "Antonio Banderas"],
        description: "Street-smart Nathan Drake is recruited by seasoned treasure hunter Victor Sully Sullivan to recover a fortune amassed by Ferdinand Magellan, and lost 500 years ago by the House of Moncada.",
        type: ['action', 'adventure'],
        ratings: '6.6/10',
        date: '2022',
        watchlist: false,
    },
    'Spider-Man: No Way Home': {
        images: ['https://m.media-amazon.com/images/M/MV5BOTIzODUzYzItM2UzZC00OGYwLTgwZDMtOWQ0ZThlN2FiODIxXkEyXkFqcGdeQWpnYW1i._V1_QL75_UX1000_CR0,0,1000,563_.jpg',
            'https://m.media-amazon.com/images/M/MV5BMWVmZDA2YjMtN2E3Yi00ZTQyLTkxMjAtMzI0NDVjM2E4ZmJlXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1280_.jpg',
            'https://m.media-amazon.com/images/M/MV5BY2M2NjU2MjMtMDg4Yy00YWNhLWIzYzMtNWQxNDc1NzhjMzBiXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1280_.jpg',
            'https://m.media-amazon.com/images/M/MV5BYzY5M2MwMTQtNDUyMy00N2QxLWFhMGEtN2FhMzQxOTg5N2NhXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
            'https://m.media-amazon.com/images/M/MV5BODhiNDJmMDUtZDk5MS00OTZiLWE0YWMtYTY2Yzc5OTQyZGM4XkEyXkFqcGdeQXVyMTMwMjIzNTk3._V1_.jpg'],
        actors: ['Tom Holland', "Zendaya", "Benedict Cumberbatch"],
        description: "Street-smart Nathan Drake is recruited by seasoned treasure hunter Victor Sully Sullivan to recover a fortune amassed by Ferdinand Magellan, and lost 500 years ago by the House of Moncada.",
        type: ['action', 'adventure', 'fantasy'],
        ratings: '8.4/10',
        date: '2021',
        watchlist: false,
    },
    'Dog': {
        images: ['https://m.media-amazon.com/images/M/MV5BZDRiNDFmMGYtOWY3Ni00ZjUxLTkzZGYtODZiNmIxZGRiZTM4XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX675_.jpg',
            'https://m.media-amazon.com/images/M/MV5BMjk2ZTJkZTktNDRhNC00NmNkLTljMTktNTc1MGE1MTY4NDdkXkEyXkFqcGdeQXVyMzExODEzNDA@._V1_FMjpg_UX1280_.jpg',
            'https://m.media-amazon.com/images/M/MV5BNTBmODZkNTMtMmU1My00YTQ1LWIzMDItMmM4OTcxZWYxODk2XkEyXkFqcGdeQXVyMzExODEzNDA@._V1_.jpg',
            'https://m.media-amazon.com/images/M/MV5BMjcxYTk3ZDktZmM0Mi00OGQwLWI2NDMtMTlkYzVhNWZjY2JjXkEyXkFqcGdeQXVyMzExODEzNDA@._V1_FMjpg_UX1200_.jpg',
            'https://m.media-amazon.com/images/M/MV5BZjY3OWU5ZGItOGQ0Mi00MGMzLWJkNmQtOTVkMWMwNTI1YTNlXkEyXkFqcGdeQXVyMzExODEzNDA@._V1_FMjpg_UX620_.jpg'],
        actors: ['Channing Tatum', "Ryder McLaughlin", "Aavi Haas"],
        description: "Street-smart Nathan Drake is recruited by seasoned treasure hunter Victor Sully Sullivan to recover a fortune amassed by Ferdinand Magellan, and lost 500 years ago by the House of Moncada.",
        type: ['drama', 'comedy', 'western'],
        ratings: '6.6/10',
        date: '2022',
        watchlist: false,
    },
}

class ActorButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let separator = ""
        if (!this.props.isLast) {
            separator = <span>|</span>
        }
        return (
            <Box sx={{display: 'inline-block'}}>
                <Button onClick={this.actorClicked}>{this.props.actorName}</Button>
                {separator}
            </Box>
        )
    }

    actorClicked = (event) => {
        history.push('/actorDetails?actor=' + this.props.actorName)
    }
}

// noinspection DuplicatedCode
class MovieDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: getQueryVariable("movie"),
            openAlert: false
        }

        console.log(this.state)
    }

    render() {
        let movie = movies[this.state.title]
        let actorButtons = []
        for (let i = 0; i < movie.actors.length; i++) {
            actorButtons.push(<ActorButton actorName={movie.actors[i]} isLast={i === movie.actors.length - 1}/>)
        }

        return (
            <Box>
                <Snackbar
                    open={this.state.openAlert}
                    onClose={this.closeAddToWatchlistAlert}
                    autoHideDuration={5000}
                    anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
                    <Alert severity="success" onClose={this.closeAddToWatchlistAlert} sx={{width: '100%'}}>
                        Add to watchlist successfully!
                    </Alert>
                </Snackbar>
                <Box>
                    <img style={{width: "100%"}} src={movie['images'][0]} height={"200"} alt={""}/>
                </Box>
                <Typography sx={{marginTop: "10px"}} variant="h4">{this.state.title}</Typography>
                <Typography sx={{marginTop: "5px", marginLeft: "5px"}}>Ratings: {movie.ratings}</Typography>
                <Typography sx={{marginTop: "5px", marginLeft: "5px"}}>Date: {movie.date}</Typography>
                <Typography sx={{marginTop: "5px", marginLeft: "5px"}}>
                    Genres: { movie.type.map(t => <span><a href={`/category?cat=${t}`}>{t}</a> &nbsp;&nbsp; </span> ) }
                </Typography>
                <Box sx={{marginTop: "5px", marginLeft: "5px"}}>
                    <Typography>Actors: </Typography>
                    <Box sx={{marginLeft: "10px"}}>{actorButtons}</Box>
                </Box>
                <Button
                    variant="outlined"
                    sx={{width: "95%", display: "block", margin: "10px auto 0 auto"}}
                    onClick={this.addToWatchlistButton}
                >Add to watchlist</Button>
                <Button variant="contained" color="success"
                        sx={{width: "95%", display: "block", margin: "10px auto 0 auto"}}
                        onClick={this.shareWithFriendsButton}
                >Share with friends</Button>

                <Typography sx={{marginTop: "20px"}} variant="h5">Description</Typography>
                <Typography sx={{marginTop: "10px"}}>{movie.description}</Typography>
            </Box>
        )
    }

    addToWatchlistButton = (event) => {
        this.setState({
            openAlert: true
        })
    }

    closeAddToWatchlistAlert = (event) => {
        this.setState({
            openAlert: false
        })
    }

    shareWithFriendsButton = (event) => {
        history.push('/sharingPage?movie=' + this.state.title)
    }
}

export default MovieDetails
