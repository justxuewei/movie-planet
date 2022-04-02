import React from "react";
import {Box, InputAdornment, TextField} from "@mui/material";
import {Search} from '@mui/icons-material';
import VirtualizedList from '../component/movieItemList'

class SearchPage extends React.Component {
    render() {
        return (
            <Box sx={{width: "100%"}}>
                <VirtualizedList />
            </Box>
            
        )
    }
}

export default SearchPage;