import React from "react";

// test cases
// 1. redirect with data
// 2. images
// 3. add to watchlist
// 4. actors
// 5. share button

let movies = {
    'The Batman': {
        images: ['https://m.media-amazon.com/images/M/MV5BZTE2YTY3YTMtM2FlMS00YmI3LTgyMWUtM2FhMWIyZWRmMDk5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UY720_.jpg',
                'https://m.media-amazon.com/images/M/MV5BM2I1Y2Y1Y2UtYzRmZC00N2E1LWI1YjItNGIyMDAwYjU3YjJjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1280_.jpg',
                'https://m.media-amazon.com/images/M/MV5BYjIyNzZlZDktZjZjMS00OTVhLTgxYWQtMjJkNjRlZDMyNTlhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1280_.jpg',
                'https://m.media-amazon.com/images/M/MV5BYzQyYTY5NWQtNjM4Mi00ZWRhLWI3YzItZDRmNThkYTE3ZDRlXkEyXkFqcGdeQXVyODUxNjcxNjE@._V1_.jpg',
                'https://m.media-amazon.com/images/M/MV5BOTc3ODFlMWYtZDJjNC00ZGQyLTk5MWQtNzliNWMzOWVlM2FlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1280_.jpg'],
        actors: ['Robert Pattinson', "Zoe Kravitz", "Jeffrey Wright"],
        description: "When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
        type: 'Action, Crime, Drama',
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
        type: 'Action, Adventure',
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
        type: 'Action, Adventure, Fantasy',
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
        type: 'Comedy',
        ratings: '6.6/10',
        date: '2022',
        watchlist: false,
    },
}

let actors = {
    'Robert Pattinson': {
        image: 'https://m.media-amazon.com/images/M/MV5BNzk0MDQ5OTUxMV5BMl5BanBnXkFtZTcwMDM5ODk5Mg@@._V1_UY317_CR12,0,214,317_AL_.jpg',
        description: 'Robert Douglas Thomas Pattinson was born May 13, 1986 in London, England, to Richard Pattinson, a car dealer importing vintage cars, and Clare Pattinson (née Charlton), who worked as a booker at a model agency.',
    },
    'Zoe Kravitz': {
        image: 'https://m.media-amazon.com/images/M/MV5BM2NmMWViOTYtOGJhYi00MzU2LWI5ODYtOGJhYzhkMWViODY5XkEyXkFqcGdeQXVyNjk2NTA3MTc@._V1_UX214_CR0,0,214,317_AL_.jpg',
        description: "Zoë Isabella Kravitz, the daughter of singer/actor Lenny Kravitz and actress Lisa Bonet, was born on December 1, 1988 in Los Angeles, California. She is of half African-American (from her father's mother and her mother's father) and half Ashkenazi Jewish (from her father's father and her mother's mother) descent."
    },
    'Jeffrey Wright': {
        image: 'https://m.media-amazon.com/images/M/MV5BMjI1NDYyNzk4OV5BMl5BanBnXkFtZTgwNDAyMzI1MDI@._V1_UY317_CR131,0,214,317_AL_.jpg',
        description: "Born and raised in Washington DC, Jeffrey Wright graduated from Amherst College in 1987. Although he studied Political Science while at Amherst, Wright left the school with a love for acting. Shortly after graduating he won an acting scholarship to NYU, but dropped out after only two months to pursue acting full-time."
    },
    'Tom Holland': {
        image: 'https://m.media-amazon.com/images/M/MV5BNzZiNTEyNTItYjNhMS00YjI2LWIwMWQtZmYwYTRlNjMyZTJjXkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_UX214_CR0,0,214,317_AL_.jpg',
        description: "Thomas Stanley Holland was born in Kingston-upon-Thames, Surrey, to Nicola Elizabeth (Frost), a photographer, and Dominic Holland (Dominic Anthony Holland), who is a comedian and author. His paternal grandparents were from the Isle of Man and Ireland, respectively."
    },
    'Mark Wahlberg': {
        image: 'https://m.media-amazon.com/images/M/MV5BMTU0MTQ4OTMyMV5BMl5BanBnXkFtZTcwMTQxOTY1NA@@._V1_UY317_CR14,0,214,317_AL_.jpg',
        description: "American actor Mark Wahlberg is one of a handful of respected entertainers who successfully made the transition from teen pop idol to acclaimed actor. A Best Supporting Actor Oscar nominee for The Departed (2006) who went on to receive positive critical reviews for his performance in The Fighter (2010)."
    },
    'Antonio Banderas': {
        image: 'https://m.media-amazon.com/images/M/MV5BMTUyOTQ3NTYyNF5BMl5BanBnXkFtZTcwMTY2NjIzNQ@@._V1_UX214_CR0,0,214,317_AL_.jpg',
        description: "Antonio Banderas, one of Spain's most famous faces, was a soccer player until breaking his foot at the age of fourteen; he is now an international movie star known for playing Zorro in the eponymous movie series."
    },
    'Zendaya': {
        image: 'https://m.media-amazon.com/images/M/MV5BMjAxZTk4NDAtYjI3Mi00OTk3LTg0NDEtNWFlNzE5NDM5MWM1XkEyXkFqcGdeQXVyOTI3MjYwOQ@@._V1_UY317_CR12,0,214,317_AL_.jpg',
        description: "Zendaya (which means to give thanks in the language of Shona) is an American actress and singer born in Oakland, California. She began her career appearing as a child model working for Macy's, Mervyns and Old Navy."
    },
    'Benedict Cumberbatch': {
        image: 'https://m.media-amazon.com/images/M/MV5BMjE0MDkzMDQwOF5BMl5BanBnXkFtZTgwOTE1Mjg1MzE@._V1_UY317_CR2,0,214,317_AL_.jpg',
        description: "Benedict Timothy Carlton Cumberbatch was born and raised in London, England. His parents, Wanda Ventham and Timothy Carlton (born Timothy Carlton Congdon Cumberbatch), are both actors. He is a grandson of submarine commander Henry Carlton Cumberbatch, and a great-grandson of diplomat Henry Arnold Cumberbatch CMG."
    },
    'Channing Tatum': {
        image: 'https://m.media-amazon.com/images/M/MV5BMTUyOTc2NTEwNV5BMl5BanBnXkFtZTgwNDgxMjMxNjE@._V1_UY317_CR59,0,214,317_AL_.jpg',
        description: "Channing Tatum was born in a small town, Cullman, Alabama, 50 miles north of Birmingham. He is the son of Kay (Faust), an airline worker, and Glenn Matthew Tatum, who worked in construction."
    },
    'Ryder McLaughlin': {
        image: 'https://m.media-amazon.com/images/M/MV5BMjM0NDE5MzAwOV5BMl5BanBnXkFtZTgwNzYwNjAzNjM@._V1_UX214_CR0,0,214,317_AL_.jpg',
        description: "Ryder McLaughlin is an actor, known for Mid90s (2018), Dog (2022) and North Hollywood (2021)."
    },
    'Aavi Haas': {
        image: 'https://m.media-amazon.com/images/M/MV5BNTY2ODcyMTItZDVjMi00OGRlLTgwZTMtZThjN2YwNGUxMDU0XkEyXkFqcGdeQXVyNjA3NDA3OTg@._V1_UX214_CR0,0,214,317_AL_.jpg',
        description: "Aavi Haas is a producer and actress, known for Now Apocalypse (2019), Red Oaks (2014) and Logan Lucky (2017)."
    }
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
                <Button>{this.props.actorName}</Button>
                {separator}
            </Box>
        )
    }
}

class MovieDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'The Batman',
        }
    }

    render() {
        let movie = movies[this.state.title]
        let actorButtons = []
        for (let i = 0; i < movie['actors'].length; i++) {
            actorButtons.push(<ActorButton actorName={movie['actors'][i]} isLast={i === movie['actors'].length - 1}/>)
        }

        return (
            <Box>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        This is a success message!
                    </Alert>
                </Snackbar>
                <Box>
                    <img style={{width: "100%"}} src={movie['images'][0]} height={"200"} alt={""}/>
                </Box>
                <Typography sx={{marginTop: "10px"}} variant="h4">{this.state.title}</Typography>
                <Typography sx={{marginTop: "5px", marginLeft: "5px"}}>Ratings: {movie['ratings']}</Typography>
                <Typography sx={{marginTop: "5px", marginLeft: "5px"}}>Date: {movie['date']}</Typography>
                <Typography sx={{marginTop: "5px", marginLeft: "5px"}}>Genres: {movie['type']}</Typography>
                <Box sx={{marginTop: "5px", marginLeft: "5px"}}>
                    <Typography>Actors: </Typography>
                    <Box sx={{marginLeft: "10px"}}>{actorButtons}</Box>
                </Box>
                <Button
                    variant="outlined"
                    sx={{width: "95%", display: "block", margin: "10px auto 0 auto"}}
                    onClick={this.addToWatchlistButton}
                >Add to watchlist</Button>
                <Button variant="contained" color="success" sx={{width: "95%", display: "block", margin: "10px auto 0 auto"}}>Share with friends</Button>

                <Typography sx={{marginTop: "20px"}} variant="h5">Description</Typography>
                <Typography sx={{marginTop: "10px"}}>{movie['description']}</Typography>
            </Box>
        )
    }

    addToWatchlistButton = (event) => {

    }
}

export default MovieDetails
