import React from "react";
import {Box, InputAdornment, TextField} from "@mui/material";
import {Search} from '@mui/icons-material';
import VirtualizedList from '../component/movieItemList'
import UserCard from '../component/userCard'
import ProfileList from '../component/profileList'

class userProfile extends React.Component {
    render() {
        return (
            <Box sx={{width: "100%"}}>
                {/* <VirtualizedList /> */}
                <UserCard />
                <ProfileList />
            </Box>
            
        )
    }
}

export default userProfile;