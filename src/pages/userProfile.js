import React from "react";
import {Box, InputAdornment, TextField} from "@mui/material";
import {Search} from '@mui/icons-material';
import VirtualizedList from '../component/movieItemList'
import UserCard from '../component/userCard'
import ProfileList from '../component/profileList'

class userProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profiles: [
                {
                    'name': 'Titanic',
                    'detail': "Leonardo Wilhelm DiCaprio"
                },
                {
                    'name': 'Iron Man',
                    'detail': "Robert Downey Jr."
                },
                {
                    'name': 'Men in Black',
                    'detail': "Will Smitho"
                },
            ]         
        },
        this.setProfiles = this.setProfiles.bind(this)
    }
    render() {
        return (
            <Box sx={{width: "100%"}}>
                {/* <VirtualizedList /> */}
                <UserCard />
                <ProfileList setProfiles={this.setProfiles} profiles={this.state.profiles} />
            </Box>
            
        )
    }
    setProfiles(newProfile) {
        this.setState({
            profiles: newProfile
        })
    }
}

export default userProfile;