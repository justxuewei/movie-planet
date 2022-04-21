import React from 'react'
import {
    Typography,
    Button
} from '@mui/material'

import SlideItemList from "../component/slideItemList";
import getQueryVariable from '../modules/getQueryVar'

class Category extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            categories: [],
            movieList: [
                {
                    'img': 'https://m.media-amazon.com/images/M/MV5BZTE2YTY3YTMtM2FlMS00YmI3LTgyMWUtM2FhMWIyZWRmMDk5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UY720_.jpg',
                    'title': 'The Batman',
                    'bio': 'When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham, Batman is forced to investigate the city\'s hidden corruption and question his family\'s involvement.',
                    'cat': ['action', 'crime', 'drama'],
                    'url': '/movieDetails?movie=Spider-Man:%20No%20Way%20Home'
                },
                {
                    'img': 'https://m.media-amazon.com/images/M/MV5BNDI5YjY1NzktODJlMC00Zjk0LThlZGYtYTg3MDk0MGVlZDgyXkEyXkFqcGdeQXVyMTMwMTQyMDI5._V1_FMjpg_UX750_.jpg',
                    'title': 'Uncharted',
                    'bio': 'Street-smart Nathan Drake is recruited by seasoned treasure hunter Victor "Sully" Sullivan to recover a fortune amassed by Ferdinand Magellan, and lost 500 years ago by the House of Moncada.',
                    'cat': ['action', 'adventure'],
                    'url': '/movieDetails?movie=Uncharted'
                },
                {
                    'img': 'https://m.media-amazon.com/images/M/MV5BOTIzODUzYzItM2UzZC00OGYwLTgwZDMtOWQ0ZThlN2FiODIxXkEyXkFqcGdeQWpnYW1i._V1_QL75_UX1000_CR0,0,1000,563_.jpg',
                    'title': 'Spider-Man: No Way Home',
                    'bio': 'With Spider-Man\'s identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.',
                    'cat': ['action', 'adventure', 'fantasy'],
                    'url': '/movieDetails?movie=Spider-Man:%20No%20Way%20Home'
                },
                {
                    'img': 'https://m.media-amazon.com/images/M/MV5BZDRiNDFmMGYtOWY3Ni00ZjUxLTkzZGYtODZiNmIxZGRiZTM4XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX675_.jpg',
                    'title': 'Dog',
                    'bio': 'Two former Army Rangers are paired against their will on the road trip of a lifetime. Briggs (Channing Tatum) and Lulu (a Belgian Malinois) race down the Pacific Coast to get to a fellow soldier\'s funeral on time.',
                    'cat': ['drama', 'comedy', 'western'],
                    'url': '/movieDetails?movie=Dog'
                },
            ],
        }
    }

    generateCategoryList = () => {
        let cats = new Set()

        let queryCat = getQueryVariable('cat')
        if (queryCat === false) { 
            this.state.movieList.forEach(movie => {
                movie.cat.forEach(cat => {
                    cats.add(cat)
                })
            })
        }
        else {
            cats.add(queryCat)
        }
        return cats
    }
    componentDidMount() {
        this.setState({ categories: this.generateCategoryList() })
    }
    render() {
        
        return (
            <div>
                {
                    this.state.categories.map((cat, i) => {
                        let movies = this.state.movieList.filter( m => m.cat.includes(cat) )
                        console.log('cat',cat)
                        return (
                            <div key={i}>
                                <a href={`/category?cat=${cat}`} style={{textDecoration:'none', color:'black'}}><Typography gutterBottom variant={"h4"} component={"div"}>{cat.toUpperCase()}</Typography></a>
                                <SlideItemList data={movies}></SlideItemList>
                            </div>
                        )
                    })
                }
                <a href="/category" style={{textDecoration: 'none', color: 'black'}}><Button variant="contained" size="small">All Categories</Button></a>
            </div>
        )
    }
}

export default Category