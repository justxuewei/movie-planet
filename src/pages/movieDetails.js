import React from "react";

// test cases
// 1. redirect with data
// 2. images
// 3. add to watchlist
// 4. actors
// 5. share button

let movies = {
    'The Batman': {
        images: ['https://m.media-amazon.com/images/M/MV5BZTE2YTY3YTMtM2FlMS00YmI3LTgyMWUtM2FhMWIyZWRmMDk5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UY720_.jpg'],
        actors: ['actors1'],
        description: '',
        type: '',
        ratings: '',
        date: '',
        watchlist: false,
    }
}

let actors = {
    'actor1': {
        image: '',
        description: '',
    }
}

class Metadata extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <img style={{width: "100%"}} src={this.props.movie['images'][0]} height={"200"} alt={""}/>
                </div>
            </div>
        )
    }
}

class MovieDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'The Batman',
            movie: movies['The Batman']
        }
    }

    render() {
        return (
            <Metadata title={this.state.title} movie={this.state.movie}/>
        )
    }
}

export default MovieDetails
