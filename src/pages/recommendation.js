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
    IconButton,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import SlideItemList from "../component/slideItemList";

class WhatToWatch extends React.Component {
    watchlistHandler = (index) => () => {
        this.props.watchlist.push(this.props.movieList[index]['title'])
        this.props.setWatchlist(this.props.watchlist)
    }

    render() {
        let movie_cards = []
        for (let i = 0; i < this.props.movieList.length; i++) {
            movie_cards.push(<Card style={{ "margin": "10px 0" }}>
                <CardMedia
                    component={"img"}
                    height={"200"}
                    image={this.props.movieList[i]['img']}
                    alt={"picture"} />
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
                <div style={{ "margin": "20px 10px" }}>
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
                    <DeleteIcon />
                </IconButton>
            } disablePadding>
                <ListItemButton><ListItemText primary={this.props.watchlist[i]} /></ListItemButton>
            </ListItem>)
        }
        return (
            <div>
                <div style={{ "margin": "20px 10px 0 10px" }}>
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

class ActorRecommendate extends React.Component {
    render() {
        return (
            <div>
                <Typography gutterBottom variant={"h4"} component={"div"}>
                    Actors/Actoress You May Like
                </Typography>
                <SlideItemList data={this.props.actorList} url="/actor"></SlideItemList>
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
            watchlist: ['Death on the Nile', 'Hawkeye', 'Moon Knight', 'Halo', 'Eternals'],
            actorList: [
                {
                    title: "Leonardo Wilhelm DiCaprio",
                    img: "https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg",
                    content: "《This Boy's Life》《Titanic》《Inception》 Leonardo Wilhelm DiCaprio; born November 11, 1974) is an American actor and film producer. Known for his work in biopics and period films, he is the recipient of numerous accolades, including an Academy Award, a British Academy Film Award, and three Golden Globe Awards. As of 2019, his films have grossed over $7.2 billion worldwide, and he has been placed eight times in annual rankings of the world's highest-paid actors.",
                },
                {
                    title: "Robert Downey Jr.",
                    img: "https://daman.co.id/daman.co.id/wp-content/uploads/2019/10/Robert-Downey-Jr-Glasses-1.jpg",
                    content: "《Weird Science》《Iron Man》《Sherlock Holmes》 Robert John Downey Jr. (born April 4, 1965) is an American actor and producer. His career has been characterized by critical and popular success in his youth, followed by a period of substance abuse and legal troubles, before a resurgence of commercial success later in his career. In 2008, Downey was titled by Time magazine among the 100 most influential people in the world, and from 2013 to 2015, he was listed by Forbes as Hollywood's highest-paid actor.",
                },
                {
                    title: "Will Smith",
                    img: "https://upload.wikimedia.org/wikipedia/commons/7/75/Will_Smith_%2832335923807%29.jpg",
                    content: "《Bad Boys》《Independence Day》《Men in Black》《The Pursuit of Happyness》Willard Carroll Smith II (born September 25, 1968), also known by his stage title The Fresh Prince, is an American actor, rapper, and film producer. Noted for his work in music, television, and film, Smith has received various accolades, including an Academy Award, a British Academy Film Award, a Golden Globe Award, a Screen Actors Guild Award, and four Grammy Awards.",
                },
                {
                    title: "Sylvester Stallone",
                    img: "https://upload.wikimedia.org/wikipedia/commons/8/84/Sylvester_Stallone_Cannes_2019.jpg",
                    content: "《Rambo》Sylvester Enzio Stallone (born Michael Sylvester Gardenzio Stallone, July 6, 1946) is an American actor, screenwriter, director, and producer. After his beginnings as a struggling actor for a number of years upon arriving to New York City in 1969 and later Hollywood in 1974, he won his first critical acclaim as an actor for his co-starring role as Stanley Rosiello in The Lords of Flatbush.",
                },
                {
                    title: "Nicolas Cage",
                    img: "https://upload.wikimedia.org/wikipedia/commons/3/33/Nicolas_Cage_2011_CC.jpg",
                    content: "《Con Air》《Windtalkers》《Lord of War》Nicolas Kim Coppola (born January 7, 1964), known professionally as Nicolas Cage, is an American actor and filmmaker. Born into the Coppola family, Cage is the recipient of various accolades, including an Academy Award, a Screen Actors Guild Award, and a Golden Globe Award.",
                },
                {
                    title: "Leonardo Wilhelm DiCaprio",
                    img: "https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg",
                    content: "《This Boy's Life》《Titanic》《Inception》 Leonardo Wilhelm DiCaprio; born November 11, 1974) is an American actor and film producer. Known for his work in biopics and period films, he is the recipient of numerous accolades, including an Academy Award, a British Academy Film Award, and three Golden Globe Awards. As of 2019, his films have grossed over $7.2 billion worldwide, and he has been placed eight times in annual rankings of the world's highest-paid actors.",
                },
                {
                    title: "Robert Downey Jr.",
                    img: "https://daman.co.id/daman.co.id/wp-content/uploads/2019/10/Robert-Downey-Jr-Glasses-1.jpg",
                    content: "《Weird Science》《Iron Man》《Sherlock Holmes》 Robert John Downey Jr. (born April 4, 1965) is an American actor and producer. His career has been characterized by critical and popular success in his youth, followed by a period of substance abuse and legal troubles, before a resurgence of commercial success later in his career. In 2008, Downey was titled by Time magazine among the 100 most influential people in the world, and from 2013 to 2015, he was listed by Forbes as Hollywood's highest-paid actor.",
                },
                {
                    title: "Will Smith",
                    img: "https://upload.wikimedia.org/wikipedia/commons/7/75/Will_Smith_%2832335923807%29.jpg",
                    content: "《Bad Boys》《Independence Day》《Men in Black》《The Pursuit of Happyness》Willard Carroll Smith II (born September 25, 1968), also known by his stage title The Fresh Prince, is an American actor, rapper, and film producer. Noted for his work in music, television, and film, Smith has received various accolades, including an Academy Award, a British Academy Film Award, a Golden Globe Award, a Screen Actors Guild Award, and four Grammy Awards.",
                },
                {
                    title: "Sylvester Stallone",
                    img: "https://upload.wikimedia.org/wikipedia/commons/8/84/Sylvester_Stallone_Cannes_2019.jpg",
                    content: "《Rambo》Sylvester Enzio Stallone (born Michael Sylvester Gardenzio Stallone, July 6, 1946) is an American actor, screenwriter, director, and producer. After his beginnings as a struggling actor for a number of years upon arriving to New York City in 1969 and later Hollywood in 1974, he won his first critical acclaim as an actor for his co-starring role as Stanley Rosiello in The Lords of Flatbush.",
                },
                {
                    title: "Nicolas Cage",
                    img: "https://upload.wikimedia.org/wikipedia/commons/3/33/Nicolas_Cage_2011_CC.jpg",
                    content: "《Con Air》《Windtalkers》《Lord of War》Nicolas Kim Coppola (born January 7, 1964), known professionally as Nicolas Cage, is an American actor and filmmaker. Born into the Coppola family, Cage is the recipient of various accolades, including an Academy Award, a Screen Actors Guild Award, and a Golden Globe Award.",
                },
            ]
        }

        this.setWatchlist = this.setWatchlist.bind(this)
    }

    render() {
        return (
            <div>
                <WhatToWatch
                    setWatchlist={this.setWatchlist}
                    watchlist={this.state.watchlist}
                    movieList={this.state.movieList} />
                {/*// people you may like*/}
                {/*// watch list*/}
                <Watchlist setWatchlist={this.setWatchlist} watchlist={this.state.watchlist} />
                <ActorRecommendate actorList={this.state.actorList} />
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
