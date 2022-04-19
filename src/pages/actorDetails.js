import React from 'react'
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";

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

// noinspection DuplicatedCode
class ActorDetails extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            actor: this.getQueryVariable("actor"),
        }
    }

    render() {
        let actor = actors[this.state.actor]
        console.log(actor)
        return (
            <Box>
                <Typography sx={{marginTop: "10px"}} variant="h4">{this.state.actor}</Typography>
                <Box sx={{marginTop: "10px"}}>
                    <img style={{width: "100%"}} src={actor.image} alt={""}/>
                </Box>
                <Typography sx={{marginTop: "20px"}} variant="h5">Description</Typography>
                <Typography sx={{marginTop: "10px"}}>{actor.description}</Typography>
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
}

export default ActorDetails
