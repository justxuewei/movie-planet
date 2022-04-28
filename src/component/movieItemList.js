import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { FixedSizeList } from 'react-window';
import { Box, TextField, Autocomplete} from "@mui/material";
import Stack from '@mui/material/Stack';
import {history} from 'umi'

const jump = (value) => {
    history.push('/actorDetails?actor=' + value)
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
                    onClick={() => jump(data[index].name)}
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

class VirtualizedList extends React.Component {
    state = {
        data: [
            {
                name: "Leonardo Wilhelm DiCaprio",
                avator: "https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg",
                content: "《This Boy's Life》《Titanic》《Inception》 Leonardo Wilhelm DiCaprio; born November 11, 1974) is an American actor and film producer. Known for his work in biopics and period films, he is the recipient of numerous accolades, including an Academy Award, a British Academy Film Award, and three Golden Globe Awards. As of 2019, his films have grossed over $7.2 billion worldwide, and he has been placed eight times in annual rankings of the world's highest-paid actors.",
            },
            {
                name: "Robert Downey Jr.",
                avator: "https://daman.co.id/daman.co.id/wp-content/uploads/2019/10/Robert-Downey-Jr-Glasses-1.jpg",
                content: "《Weird Science》《Iron Man》《Sherlock Holmes》 Robert John Downey Jr. (born April 4, 1965) is an American actor and producer. His career has been characterized by critical and popular success in his youth, followed by a period of substance abuse and legal troubles, before a resurgence of commercial success later in his career. In 2008, Downey was named by Time magazine among the 100 most influential people in the world, and from 2013 to 2015, he was listed by Forbes as Hollywood's highest-paid actor.",
            },
            {
                name: "Will Smith",
                avator: "https://upload.wikimedia.org/wikipedia/commons/7/75/Will_Smith_%2832335923807%29.jpg",
                content: "《Bad Boys》《Independence Day》《Men in Black》《The Pursuit of Happyness》Willard Carroll Smith II (born September 25, 1968), also known by his stage name The Fresh Prince, is an American actor, rapper, and film producer. Noted for his work in music, television, and film, Smith has received various accolades, including an Academy Award, a British Academy Film Award, a Golden Globe Award, a Screen Actors Guild Award, and four Grammy Awards.",
            },
            {
                name: "Sylvester Stallone",
                avator: "https://upload.wikimedia.org/wikipedia/commons/8/84/Sylvester_Stallone_Cannes_2019.jpg",
                content: "《Rambo》Sylvester Enzio Stallone (born Michael Sylvester Gardenzio Stallone, July 6, 1946) is an American actor, screenwriter, director, and producer. After his beginnings as a struggling actor for a number of years upon arriving to New York City in 1969 and later Hollywood in 1974, he won his first critical acclaim as an actor for his co-starring role as Stanley Rosiello in The Lords of Flatbush.",
            },
            {
                name: "Nicolas Cage",
                avator: "https://upload.wikimedia.org/wikipedia/commons/3/33/Nicolas_Cage_2011_CC.jpg",
                content: "《Con Air》《Windtalkers》《Lord of War》Nicolas Kim Coppola (born January 7, 1964), known professionally as Nicolas Cage, is an American actor and filmmaker. Born into the Coppola family, Cage is the recipient of various accolades, including an Academy Award, a Screen Actors Guild Award, and a Golden Globe Award.",
            },
        ],

        count: 5,

        top100Films: [
            { title: 'Leonardo Wilhelm DiCaprio', year: 1994 },
            { title: 'Robert Downey Jr.', year: 1972 },
            { title: 'Will Smith', year: 1974 },
            { title: 'Sylvester Stallone', year: 2008 },
            { title: 'Nicolas Cage', year: 1957 },
        ]
    }

    render() {
        return (
            <Box
                sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
            >
                <Stack spacing={2} sx={{ width: 300 }}>
                    <Autocomplete
                        freeSolo
                        id="free-solo-2-demo"
                        disableClearable
                        options={this.state.top100Films.map((option) => option.title)}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Search Actor"
                                InputProps={{
                                    ...params.InputProps,
                                    type: 'search',
                                }}
                            />
                        )}
                        onKeyDown={(event) => {
                            console.log(event.target.value)
                            const temp = this.state.data.find(
                                (item) => item.name == event.target.value
                            )
                            console.log("temp")
                            console.log(temp)
                            if(temp == null){
                                return
                            }
                            var data1 = this.state.data.filter(
                                (item) => item.name != event.target.value
                            );
                            data1.unshift(temp)
                            this.setState({
                                data : data1
                            })
                        }}
                    />
                </Stack>
                <FixedSizeList
                    height={1600}
                    width={400}
                    itemSize={280}
                    itemData={this.state.data}
                    itemCount={this.state.count}
                    overscanCount={5}
                >
                    {renderRow}
                </FixedSizeList>
            </Box>
        );
    }
}
export default VirtualizedList;

