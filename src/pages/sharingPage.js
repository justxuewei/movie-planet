import React from "react";
import { Alert, Dialog, Modal, DialogTitle, DialogContent, DialogContentText, DialogActions, Box, InputAdornment, TextField, Button, Snackbar, Rating, Card, CardHeader, CardMedia, IconButton, CardContent, Typography, CardActions, ExpandMore } from "@mui/material";
import { Search } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MessageIcon from '@mui/icons-material/Message';
import { FixedSizeList } from 'react-window';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

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
        comment: [
            {
                name: "1",
                avator: "https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg",
                content: "that's good film!"
            },
            {
                name: "2",
                avator: "https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg",
                content: "that's good film!"
            }

        ],
        conmentCount: 2,
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
        comment: [
            {
                name: "1",
                avator: "https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg",
                content: "that's good film!"
            },
            {
                name: "2",
                avator: "https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg",
                content: "that's good film!"
            }

        ],
        conmentCount: 2,
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
        comment: [
            {
                name: "1",
                avator: "https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg",
                content: "that's good film!"
            },
            {
                name: "2",
                avator: "https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg",
                content: "that's good film!"
            }

        ],
        conmentCount: 2,
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
        comment: [
            {
                name: "1",
                avator: "https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg",
                content: "that's good film!"
            },
            {
                name: "2",
                avator: "https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg",
                content: "that's good film!"
            }

        ],
        conmentCount: 2,
    }
}


function renderRow(props) {
    const { index, style, data } = props;
    console.log(props)
    return (
        <div>
            <ListItem style={style} key={index} component="div" disablePadding>
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
class sharingPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: movies,
            title: this.getQueryVariable("movie"),
            // title: 'The Batman'
        }

        console.log(this.state)
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

    state = {
        name: "",
        content: "",
        title: 'Uncharted',
        value: 4,
        alterText: "alter",
        openAlert: false,
        openDialog: false,
    }

    render() {
        return (
            <Box sx={{ width: "100%" }}>
                <Snackbar
                    open={this.state.openAlert}
                    onClose={this.closeAlert}
                    autoHideDuration={5000}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                    <Alert severity="success" onClose={this.closeAlert} sx={{ width: '100%' }}>
                        {this.state.alterText}
                    </Alert>
                </Snackbar>
                {/* 电影部分 */}
                <Box sx={{ width: "100%" }}>
                    {/* 卡片头部 */}
                    <Card sx={{ width: "100%" }}>
                        <CardHeader
                            title={this.state.title}
                            subheader={movies[this.state.title].type}
                        />
                    </Card>
                    {/* 图片部分 */}
                    <CardMedia
                        component="img"
                        height="250"
                        image={movies[this.state.title].images[0]}
                        alt="Paella dish"
                    />
                    {/* 内容部分 */}
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {movies[this.state.title].description}
                        </Typography>
                    </CardContent>
                    {/* 分享 */}
                    <CardActions disableSpacing>
                        <IconButton
                            aria-label="add to favorites"
                            onClick={this.addToFavorites}
                        >
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton
                            aria-label="share"
                            onClick={this.shareMovie}
                        >
                            <ShareIcon />
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

                </Box>
                {/* 用户评论部分 */}
                <Box sx={{ width: "100%" }}>
                    <FixedSizeList
                        height={600}
                        width={400}
                        itemSize={90}
                        itemData={this.state.movies[this.state.title].comment}
                        itemCount={this.state.movies[this.state.title].conmentCount}
                        overscanCount={10}
                    >
                        {renderRow}
                    </FixedSizeList>
                </Box>
                <Box sx={{ width: "100%" }}>
                    <Dialog open={this.state.openDialog} onClose={this.closeDialog}>
                        <DialogTitle>Add Comment</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                You can post your comment of the movie
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

    addToFavorites = (event) => {
        this.setState({
            openAlert: true,
            alterText: "Add To Favorites success!"
        })
    }

    shareMovie = (event) => {
        this.setState({
            openAlert: true,
            alterText: "Share Movie success!"
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
        this.state.movies[this.state.title].comment.push(temp)
        this.state.movies[this.state.title].conmentCount = this.state.movies[this.state.title].conmentCount + 1
        console.log(movies[this.state.title])
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

export default sharingPage;