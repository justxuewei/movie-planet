import React from "react";
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Stack,
    Divider,
    Avatar,
    ListItemText,
    List,
    ListItem,
    ListItemAvatar
} from "@mui/material";
import SlideItemList from "../component/slideItemList";

class ActorPage extends React.Component {
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
        }
    }
    render() {
        return (
            <Stack spacing={2} divider={<Divider orientation="horizontal" flexItem />}>
                <Card sx={{}}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        sx={{ maxWidth: 300 }}
                        image="https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Leonardo Wilhelm DiCaprio
                        </Typography>
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Birthday" secondary="Jan 11, 1947" />
                            </ListItem>
                        </List>
                        <Typography variant="body2" color="text.secondary">
                            This Boy's Life, Titanic, Inception,  Leonardo Wilhelm DiCaprio; born November 11, 1974) is an American actor and film producer. Known for his work in biopics and period films, he is the recipient of numerous accolades, including an Academy Award, a British Academy Film Award, and three Golden Globe Awards. As of 2019, his films have grossed over $7.2 billion worldwide, and he has been placed eight times in annual rankings of the world's highest-paid actors.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        {/* <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button> */}
                    </CardActions>
                </Card>
                <div>
                    <Typography gutterBottom variant="h5" component="div">
                        Movies
                    </Typography>
                    <SlideItemList data={this.state.movieList}></SlideItemList>
                </div>
            </Stack>
        )
    }
}
export default ActorPage;
