import React from 'react'
import {history} from "umi";
import { FixedSizeList } from 'react-window';
import { Alert, Dialog, Modal, DialogTitle, DialogContent, DialogContentText, DialogActions, Box, InputAdornment, TextField, Button, Snackbar, Rating, Card, CardHeader, CardMedia, IconButton, CardContent, Typography, CardActions, ExpandMore } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ShareIcon from '@mui/icons-material/Share';
import MessageIcon from '@mui/icons-material/Message';

let actors = {
    'Robert Pattinson': {
        image: 'https://m.media-amazon.com/images/M/MV5BNzk0MDQ5OTUxMV5BMl5BanBnXkFtZTcwMDM5ODk5Mg@@._V1_UY317_CR12,0,214,317_AL_.jpg',
        description: 'Robert Douglas Thomas Pattinson was born May 13, 1986 in London, England, to Richard Pattinson, a car dealer importing vintage cars, and Clare Pattinson (née Charlton), who worked as a booker at a model agency.',
        bornDate: "November 6, 1972",
        bornPlace: "Berkeley, California, USA",
        
        knownFor: ["X-Men (2000)", "Femme Fatale (2002)", "X2 (2003)"],
        alternateNames: ["Rebecca Romijn-Stamos", "Rebecca Romijn Stamos"],
        height: "5' 11\" (1.8 m)",
        spouse: "Jerry O'Connell",
        comment: [
            {
                name: "1",
                avator: "https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg",
                content: "I like his movies!"
            },
        ],
    },
    'Zoe Kravitz': {
        image: 'https://m.media-amazon.com/images/M/MV5BM2NmMWViOTYtOGJhYi00MzU2LWI5ODYtOGJhYzhkMWViODY5XkEyXkFqcGdeQXVyNjk2NTA3MTc@._V1_UX214_CR0,0,214,317_AL_.jpg',
        description: "Zoë Isabella Kravitz, the daughter of singer/actor Lenny Kravitz and actress Lisa Bonet, was born on December 1, 1988 in Los Angeles, California. She is of half African-American (from her father's mother and her mother's father) and half Ashkenazi Jewish (from her father's father and her mother's mother) descent.",
        bornDate: "December 1, 1988",
        bornPlace: "Venice, Los Angeles, CA, USA",
        
        knownFor: ["The Batman", "High Fidelity", "Divergent"],
        alternateNames: [],
        height: "5' 2",
        spouse: "Karl Glusman",
        comment: [
            {
                name: "1",
                avator: "https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg",
                content: "I like his movies!"
            },
            {
                name: "2",
                avator: "https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg",
                content: "I like his movies!"
            },
        ],
    },
    'Jeffrey Wright': {
        image: 'https://m.media-amazon.com/images/M/MV5BMjI1NDYyNzk4OV5BMl5BanBnXkFtZTgwNDAyMzI1MDI@._V1_UY317_CR131,0,214,317_AL_.jpg',
        description: "Born and raised in Washington DC, Jeffrey Wright graduated from Amherst College in 1987. Although he studied Political Science while at Amherst, Wright left the school with a love for acting. Shortly after graduating he won an acting scholarship to NYU, but dropped out after only two months to pursue acting full-time.",
        bornDate: "December 7, 1965",
        bornPlace: "Washington, D.C., USA",
        
        knownFor: ["The Batman", "Westworld", "The French Dispatch"],
        alternateNames: [],
        height: "5' 9",
        spouse: "Carmen Ejogo",
        comment: [
            {
                name: "1",
                avator: "https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg",
                content: "I like his movies!"
            },
        ],
    },
    'Tom Holland': {
        image: 'https://m.media-amazon.com/images/M/MV5BNzZiNTEyNTItYjNhMS00YjI2LWIwMWQtZmYwYTRlNjMyZTJjXkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_UX214_CR0,0,214,317_AL_.jpg',
        description: "Thomas Stanley Holland was born in Kingston-upon-Thames, Surrey, to Nicola Elizabeth (Frost), a photographer, and Dominic Holland (Dominic Anthony Holland), who is a comedian and author. His paternal grandparents were from the Isle of Man and Ireland, respectively.",
        bornDate: "June 1, 1996",
        bornPlace: "Kingston upon Thames, England, UK",
        
        knownFor: ["Spider-Man: Homecoming", "Spider-Man: No Way Home"],
        alternateNames: ["Thomas Stanley Holland"],
        height: "5' 8",
        spouse: "Unknown",
        comment: [
            {
                name: "1",
                avator: "https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg",
                content: "I like his movies!"
            },
        ],
    },
    'Mark Wahlberg': {
        image: 'https://m.media-amazon.com/images/M/MV5BMTU0MTQ4OTMyMV5BMl5BanBnXkFtZTcwMTQxOTY1NA@@._V1_UY317_CR14,0,214,317_AL_.jpg',
        description: "American actor Mark Wahlberg is one of a handful of respected entertainers who successfully made the transition from teen pop idol to acclaimed actor. A Best Supporting Actor Oscar nominee for The Departed (2006) who went on to receive positive critical reviews for his performance in The Fighter (2010).",
        bornDate: "June 5, 1971",
        bornPlace: "Dorchester, Boston, Massachusetts, USA",
        
        knownFor: ["The Fighter", "Ted", "the Departed"],
        alternateNames: ["Mark Wahlberg"],
        height: "5' 8",
        spouse: "Jerry O'Connell",
        comment: [
            {
                name: "1",
                avator: "https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg",
                content: "I like his movies!"
            },
        ],
    },
    'Antonio Banderas': {
        image: 'https://m.media-amazon.com/images/M/MV5BMTUyOTQ3NTYyNF5BMl5BanBnXkFtZTcwMTY2NjIzNQ@@._V1_UX214_CR0,0,214,317_AL_.jpg',
        description: "Antonio Banderas, one of Spain's most famous faces, was a soccer player until breaking his foot at the age of fourteen; he is now an international movie star known for playing Zorro in the eponymous movie series.",
        bornDate: "June 1, 1996",
        bornPlace: "Kingston upon Thames, United Kingdom",
        
        knownFor: ["Spider-Man: Homecoming", "Spider-Man: No Way Home", "Uncharted"],
        alternateNames: ["Thomas Stanley Holland"],
        height: "5' 8",
        spouse: "Unknown",
        comment: [
            {
                name: "1",
                avator: "https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg",
                content: "I like his movies!"
            },
        ],
    },
    'Zendaya': {
        image: 'https://m.media-amazon.com/images/M/MV5BMjAxZTk4NDAtYjI3Mi00OTk3LTg0NDEtNWFlNzE5NDM5MWM1XkEyXkFqcGdeQXVyOTI3MjYwOQ@@._V1_UY317_CR12,0,214,317_AL_.jpg',
        description: "Zendaya (which means to give thanks in the language of Shona) is an American actress and singer born in Oakland, California. She began her career appearing as a child model working for Macy's, Mervyns and Old Navy.",
        bornDate: "November 6, 1972",
        bornPlace: "Berkeley, California, USA",
        
        knownFor: ["Euphoria", "Spider-Man: No Way Home", "Spider-Man: Homecoming"],
        alternateNames: ["Zendaya Maree Stoermer Coleman"],
        height: "5' 7",
        spouse: "Unknown",
        comment: [
            {
                name: "1",
                avator: "https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg",
                content: "I like his movies!"
            },
        ],
    },
    'Benedict Cumberbatch': {
        image: 'https://m.media-amazon.com/images/M/MV5BMjE0MDkzMDQwOF5BMl5BanBnXkFtZTgwOTE1Mjg1MzE@._V1_UY317_CR2,0,214,317_AL_.jpg',
        description: "Benedict Timothy Carlton Cumberbatch was born and raised in London, England. His parents, Wanda Ventham and Timothy Carlton (born Timothy Carlton Congdon Cumberbatch), are both actors. He is a grandson of submarine commander Henry Carlton Cumberbatch, and a great-grandson of diplomat Henry Arnold Cumberbatch CMG.",
        bornDate: "July 19, 1976",
        bornPlace: "Queen Charlotte's and Chelsea Hospital, London, United Kingdom",
        
        knownFor: ["Sherlock", "Doctor Strange", "The Power of the Dog"],
        alternateNames: ["Rebecca Romijn-Stamos", "Rebecca Romijn Stamos"],
        height: "6' 0",
        spouse: "Unknown",
        comment: [
            {
                name: "1",
                avator: "https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg",
                content: "I like his movies!"
            },
        ],
    },
    'Channing Tatum': {
        image: 'https://m.media-amazon.com/images/M/MV5BMTUyOTc2NTEwNV5BMl5BanBnXkFtZTgwNDgxMjMxNjE@._V1_UY317_CR59,0,214,317_AL_.jpg',
        description: "Channing Tatum was born in a small town, Cullman, Alabama, 50 miles north of Birmingham. He is the son of Kay (Faust), an airline worker, and Glenn Matthew Tatum, who worked in construction.",
        bornDate: "April 26, 1980",
        bornPlace: "Cullman, Alabama, USA",
        
        knownFor: ["21 Jump Street", "White House Down", "Foxcatcher"],
        alternateNames: ["Channing Matthew Tatum"],
        height: "6' 1",
        spouse: "Sophie Hunter",
        comment: [
            {
                name: "1",
                avator: "https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg",
                content: "I like his movies!"
            },
        ],
    },
    'Ryder McLaughlin': {
        image: 'https://m.media-amazon.com/images/M/MV5BMjM0NDE5MzAwOV5BMl5BanBnXkFtZTgwNzYwNjAzNjM@._V1_UX214_CR0,0,214,317_AL_.jpg',
        description: "Ryder McLaughlin is an actor, known for Mid90s (2018), Dog (2022) and North Hollywood (2021).",
        bornDate: "April 17, 1998",
        bornPlace: "Berkeley, California, USA",
        
        knownFor: ["Mid90s", "Dog", "Godspeed"],
        alternateNames: ["Ryder McLaughlin"],
        height: "6' 1",
        spouse: "Unknown",
        comment: [
            {
                name: "1",
                avator: "https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg",
                content: "I like his movies!"
            },
        ],
    },
    'Aavi Haas': {
        image: 'https://m.media-amazon.com/images/M/MV5BNTY2ODcyMTItZDVjMi00OGRlLTgwZTMtZThjN2YwNGUxMDU0XkEyXkFqcGdeQXVyNjA3NDA3OTg@._V1_UX214_CR0,0,214,317_AL_.jpg',
        description: "Aavi Haas is a producer and actress, known for Now Apocalypse (2019), Red Oaks (2014) and Logan Lucky (2017).",
        bornDate: "April 3, 1996",
        bornPlace: "Berkeley, California, USA",
        
        knownFor: ["Now Apocalypse (2019)", "Red Oaks (2014)", "Logan Lucky"],
        alternateNames: ["Aavi Haas"],
        height: "5' 7",
        spouse: "Unknown",
        comment: [
            {
                name: "1",
                avator: "https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg",
                content: "I like his movies!"
            },
        ],
    },
    'Leonardo Wilhelm DiCaprio': {
        image: 'https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_UY317_CR10,0,214,317_AL_.jpg',
        description: "Few actors in the world have had a career quite as diverse as Leonardo DiCaprio's. DiCaprio has gone from relatively humble beginnings.",
        bornDate: "November 11, 1974",
        bornPlace: "Hollywood, Los Angeles, California, USA",
        
        knownFor: ["Inception", "Titanic", "The Departed"],
        alternateNames: ["Leonardo DiCaprio"],
        height: "6' 0",
        spouse: "Camila Morrone",
        comment: [
            {
                name: "1",
                avator: "https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg",
                content: "I like his movies!"
            },
        ],
    },
    'Robert Downey Jr.': {
        image: 'https://m.media-amazon.com/images/M/MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@._V1_UX214_CR0,0,214,317_AL_.jpg',
        description: "Robert Downey Jr. has evolved into one of the most respected actors in Hollywood. With an amazing list of credits to his name, he has managed to stay new and fresh even after over four decades in the business.",
        bornDate: "April 4, 1965",
        bornPlace: "Manhattan, New York, USA",
        
        knownFor: ["Iron Man", "Avengers", "Sherlock Holmes"],
        alternateNames: ["Robert John Downey Jr."],
        height: "5' 8",
        spouse: "Susan Downey",
        comment: [
            {
                name: "1",
                avator: "https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg",
                content: "I like his movies!"
            },
        ],
    },
    'Will Smith': {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Will_Smith_at_the_close_of_the_2018_Soccer_World_Cup.jpg/440px-Will_Smith_at_the_close_of_the_2018_Soccer_World_Cup.jpg',
        description: "Willard Carroll Smith II, also known by his stage name the Fresh Prince, is an American actor, rapper, and film producer.",
        bornDate: "September 25, 1968",
        bornPlace: "Philadelphia, PA",
        
        knownFor: ["The Fresh Prince of Bel-Air", "King Richard", "I Am Legend"],
        alternateNames: ["Rebecca Romijn-Stamos", "Rebecca Romijn Stamos"],
        height: "6' 2",
        spouse: "Jada Pinkett Smith",
        comment: [
            {
                name: "1",
                avator: "https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg",
                content: "I like his movies!"
            },
        ],
    },
    'Nicolas Cage': {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Nicolas_Cage_2011_CC.jpg/340px-Nicolas_Cage_2011_CC.jpg',
        description: "Nicolas Kim Coppola, known professionally as Nicolas Cage, is an American actor and filmmaker. Born into the Coppola family, Cage is the recipient of various accolades, including an Academy Award, a Screen Actors Guild Award, and a Golden Globe Award.",
        bornDate: "January 7, 1964",
        bornPlace: "Long Beach, CA, USA",
        
        knownFor: ["Ghost Rider", "Pig (2021)","National Treasure (2004)"],
        alternateNames: ["Nicolas Kim Coppola"],
        height: "5' 11",
        spouse: "Riko Shibata",
        comment: [
            {
                name: "1",
                avator: "https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg",
                content: "I like his movies!"
            },
        ],
    },
    'Sylvester Stallone': {
        image: 'https://m.media-amazon.com/images/M/MV5BMTQwMTk3NDU2OV5BMl5BanBnXkFtZTcwNTA3MTI0Mw@@._V1_UY317_CR6,0,214,317_AL_.jpg',
        description: "Sylvester Stallone is a athletically built, dark-haired American actor/screenwriter/director/producer, the movie fans worldwide have been flocking to see Stallone's films for over 40 years, making Sly one of Hollywood's biggest-ever box office draws.",
        bornDate: "July 6, 1946",
        bornPlace: "New York City, New York, USA",
        
        knownFor: ["Rocky", "Creed", "First Blood"],
        alternateNames: ["Sylvester Stallone"],
        height: "5' 10",
        spouse: "Jerry O'Connell",
        comment: [
            {
                name: "1",
                avator: "https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg",
                content: "I like his movies!"
            },
        ],
    }
}

function renderRow(props) {
    console.log(props)
    const { index, style, data } = props;
    return (
        <div>
            <ListItem style={style} key={index} component="div" >
                <ListItemAvatar>
                    <Avatar alt="" src={data[index].avator} />
                </ListItemAvatar>
                <ListItemText
                    primary={data[index].name}
                    secondary={
                        <React.Fragment>
                            {data[index].content}
                        </React.Fragment>
                    }
                />
            </ListItem></div>

    );
}

// noinspection DuplicatedCode
class ActorDetails extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            actor: this.getQueryVariable("actor"),
            actors: actors
        }
    }

    state = {
        name: "",
        content: "",
        actor: 'Robert Pattinson',
        value: 4,
        alterText: "alter",
        openAlert: false,
        openDialog: false,
    }

    render() {
        let actor = actors[this.state.actor]
        console.log(this.state.actors[this.state.actor].comment)
        return (
                <Box>
                    <Typography sx={{marginTop: "10px"}} variant="h4">{this.state.actor}</Typography>
                    <Box sx={{marginTop: "10px"}}>
                        <img style={{width: "100%", height: "300px", objectFit: "cover"}} src={actor.image} alt={""}/>
                    </Box>
                    <Typography sx={{marginTop: "5px", marginLeft: "5px"}}><b>Born:</b> {actor.bornDate}</Typography>
                    <Typography sx={{marginTop: "5px", marginLeft: "5px"}}><b>Place:</b> {actor.bornPlace}</Typography>
                    <Typography sx={{marginTop: "5px", marginLeft: "5px"}}><b>Known For:</b> {actor.knownFor.join(' | ')}</Typography>
                    <Typography sx={{marginTop: "5px", marginLeft: "5px"}}><b>Alternate Names:</b> {actor.alternateNames.join(' | ')}</Typography>
                    <Typography sx={{marginTop: "5px", marginLeft: "5px"}}><b>Height:</b> {actor.height}</Typography>
                    <Typography sx={{marginTop: "5px", marginLeft: "5px"}}><b>Spouse:</b> {actor.spouse}</Typography>

                    <Button variant="contained" color="success"
                            sx={{width: "95%", display: "block", margin: "10px auto 0 auto"}}
                            onClick={this.shareWithFriendsButton}
                    >Share with friends</Button>

                    <Typography sx={{marginTop: "20px"}} variant="h5">Description</Typography>
                    <Typography sx={{marginTop: "10px"}}>{actor.description}</Typography>
                    {/* 用户评论 */}
                    <Snackbar
                        open={this.state.openAlert}
                        onClose={this.closeAlert}
                        autoHideDuration={5000}
                        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                        <Alert severity="success" onClose={this.closeAlert} sx={{ width: '100%' }}>
                            {this.state.alterText}
                        </Alert>
                    </Snackbar>
                    <CardActions disableSpacing>
                        <IconButton
                            aria-label="add to favorites"
                            onClick={this.addToFavorites}
                        >
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton
                            aria-label="comment"
                            onClick={this.openDialog}
                        >
                            <MessageIcon />
                        </IconButton>



                        <IconButton aria-label="add to favorites">

                        </IconButton>
                        <IconButton aria-label="add to favorites">

                        </IconButton>
                        <IconButton aria-label="add to favorites">

                        </IconButton>
                        <IconButton aria-label="add to favorites">

                        </IconButton>
                        <IconButton aria-label="add to favorites">

                        </IconButton>
                        <IconButton aria-label="add to favorites">

                        </IconButton>
                        <IconButton aria-label="add to favorites">

                        </IconButton>
                        <IconButton aria-label="add to favorites">

                        </IconButton>
                        <IconButton aria-label="add to favorites">

                        </IconButton>
                        <Rating
                            name="simple-controlled"
                            value={this.state.value}
                            onChange={(event, newValue) => {
                                this.setState({
                                    value: newValue
                                })
                            }}
                        />


                    </CardActions>
                    <Box sx={{ width: "100%" }}>
                        <FixedSizeList
                            height={600}
                            width={400}
                            itemSize={90}
                            itemData={this.state.actors[this.state.actor].comment}
                            itemCount={this.state.actors[this.state.actor].comment.length}
                            overscanCount={10}>
                            {renderRow}
                        </FixedSizeList>
                    </Box>
                    <Box sx={{ width: "100%" }}>
                    <Dialog open={this.state.openDialog} onClose={this.closeDialog}>
                        <DialogTitle>Add Comment</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                You can post your comment of the actor
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Your name"
                                type="email"
                                fullWidth
                                variant="standard"
                                onChange={this.changeName}
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="content"
                                label="content"
                                type="email"
                                fullWidth
                                variant="standard"
                                onChange={this.changeContent}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.closeDialog}>Cancel</Button>
                            <Button onClick={this.addComment}>Submit</Button>
                        </DialogActions>
                    </Dialog>
                </Box>
                </Box>

        )
    }

    getQueryVariable(variable) {
        let query = window.location.search.substring(1);
        let vars = query.split("&");
        for (let i = 0; i < vars.length; i++) {
            let pair = vars[i].split("=");
            if (pair[0] === variable) {
                return decodeURI(pair[1]);
            }
        }
        return false;
    }

    shareWithFriendsButton = (event) => {
        this.setState({
            openAlert: true,
            alterText: "Share Actors success!"
        })
    }

    addToFavorites = (event) => {
        this.setState({
            openAlert: true,
            alterText: "Add To Favorites success!"
        })
    }

    shareMovie = (event) => {
        this.setState({
            openAlert: true,
            alterText: "Share Actors success!"
        })
    }

    addComment = (event) => {
        console.log(this.state.name)
        console.log(this.state.content)
        let temp = {
            name: this.state.name,
            avator: "http://pic.616pic.com/ys_bnew_img/00/10/83/54xXAJVRIn.jpg",
            content: this.state.content
        }
        this.state.actors[this.state.actor].comment.push(temp)
        this.state.actors[this.state.actor].conmentCount = this.state.actors[this.state.actor].conmentCount + 1
        console.log(actors[this.state.actor])
        this.setState({
            openDialog: false
        })
    }

    closeAlert = (event) => {
        this.setState({
            openAlert: false
        })
    }

    openDialog = (event) => {
        this.setState({
            openDialog: true
        })
    }

    closeDialog = (event) => {
        this.setState({
            openDialog: false
        })
    }

    changeName = (event) => {
        console.log(event.target.value)
        this.setState({
            name: event.target.value
        })
    }

    changeContent = (event) => {
        console.log(event.target.value)
        this.setState({
            content: event.target.value
        })
    }
}

export default ActorDetails
