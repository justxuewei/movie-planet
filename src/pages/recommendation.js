import React from "react";
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
    List,
    ListItemButton,
    ListItemText,
    ListItem,
    IconButton
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

class WhatToWatch extends React.Component {
    watchlistHandler = (index) => () => {
        this.props.watchlist.push(this.props.movieList[index]['title'])
        this.props.setWatchlist(this.props.watchlist)
    }

    render() {
        let movie_cards = []
        for (let i = 0; i < this.props.movieList.length; i++) {
            movie_cards.push(<Card style={{"margin": "10px 0"}}>
                <CardMedia
                    component={"img"}
                    height={"200"}
                    image={this.props.movieList[i]['img']}
                    alt={"picture"}/>
                <CardContent>
                    <Typography gutterBottom variant={"h5"} component={"div"}>
                        {this.props.movieList[i]['title']}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {this.props.movieList[i]['bio']}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={this.watchlistHandler(i)}>Add to watchlist</Button>
                </CardActions>
            </Card>)
        }
        return (
            <div>
                <div style={{"margin": "20px 10px"}}>
                    <Typography gutterBottom variant={"h4"} component={"div"}>
                        What To Watch
                    </Typography>
                </div>
                {movie_cards}
            </div>
        )
    }
}

class Watchlist extends React.Component {
    deletionHandler = (index) => () => {
        let newWatchlist = []
        for (let i = 0; i < this.props.watchlist.length; i++) {
            if (i === index) {
                continue
            }
            newWatchlist.push(this.props.watchlist[i])
        }
        this.props.setWatchlist(newWatchlist)
    }

    render() {
        let watchlistItems = []
        for (let i = 0; i < this.props.watchlist.length; i++) {
            watchlistItems.push(<ListItem key={i} secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={this.deletionHandler(i)}>
                    <DeleteIcon/>
                </IconButton>
            } disablePadding>
                <ListItemButton><ListItemText primary={this.props.watchlist[i]}/></ListItemButton>
            </ListItem>)
        }
        return (
            <div>
                <div style={{"margin": "20px 10px 0 10px"}}>
                    <Typography gutterBottom variant={"h4"} component={"div"}>
                        Watchlist
                    </Typography>
                </div>
                <List>
                    {watchlistItems}
                </List>
            </div>
        )
    }
}

class Recommendation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movieList: [
                {
                    'img': 'https://m.media-amazon.com/images/M/MV5BZTE2YTY3YTMtM2FlMS00YmI3LTgyMWUtM2FhMWIyZWRmMDk5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UY720_.jpg',
                    'title': 'The Batman',
                    'bio': 'Street-smart Nathan Drake is recruited by seasoned treasure hunter Victor "Sully" Sullivan to recover a fortune amassed by Ferdinand Magellan, and lost 500 years ago by the House of Moncada.',
                },
                {
                    'img': 'https://m.media-amazon.com/images/M/MV5BNDI5YjY1NzktODJlMC00Zjk0LThlZGYtYTg3MDk0MGVlZDgyXkEyXkFqcGdeQXVyMTMwMTQyMDI5._V1_FMjpg_UX750_.jpg',
                    'title': 'Uncharted',
                    'bio': 'When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham, Batman is forced to investigate the city\'s hidden corruption and question his family\'s involvement.',
                },
                {
                    'img': 'https://m.media-amazon.com/images/M/MV5BOTIzODUzYzItM2UzZC00OGYwLTgwZDMtOWQ0ZThlN2FiODIxXkEyXkFqcGdeQWpnYW1i._V1_QL75_UX1000_CR0,0,1000,563_.jpg',
                    'title': 'Spider-Man: No Way Home',
                    'bio': 'With Spider-Man\'s identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.'
                },
                {
                    'img': 'https://m.media-amazon.com/images/M/MV5BZDRiNDFmMGYtOWY3Ni00ZjUxLTkzZGYtODZiNmIxZGRiZTM4XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX675_.jpg',
                    'title': 'Dog',
                    'bio': 'Two former Army Rangers are paired against their will on the road trip of a lifetime. Briggs (Channing Tatum) and Lulu (a Belgian Malinois) race down the Pacific Coast to get to a fellow soldier\'s funeral on time.'
                },
            ],
            watchlist: ['Death on the Nile', 'Hawkeye', 'Moon Knight', 'Halo', 'Eternals']
        }

        this.setWatchlist = this.setWatchlist.bind(this)
    }

    render() {
        return (
            <div>
                <WhatToWatch
                    setWatchlist={this.setWatchlist}
                    watchlist={this.state.watchlist}
                    movieList={this.state.movieList}/>
                {/*// people you may like*/}
                {/*// watch list*/}
                <Watchlist setWatchlist={this.setWatchlist} watchlist={this.state.watchlist}/>
            </div>
        )
    }

    setWatchlist(newWatchlist) {
        this.setState({
            watchlist: newWatchlist
        })
    }
}

export default Recommendation;
