import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';

// function generate(element) {
//   return [0, 1, 2].map((value) =>
//     React.cloneElement(element, {
//       key: value,
//     }),
//   );
// }

// const Demo = styled('div')(({ theme }) => ({
//   backgroundColor: theme.palette.background.paper,
// }));

class profileList extends React.Component {
  constructor(props) {
    super(props);
    
    // console.log(this.state)
  }
  state = {
    dense: false,
    secondary: false
  }

  setDense =() =>{
    // this.state.dense = this.state.dense
    this.setState({
      dense : !this.state.dense
    })
  }
  setSecondary =() =>{
    this.setState({
      secondary : !this.state.secondary
    })
    // this.state.secondary = true
  }

  deletionHandler = (index) => () => {
    let newProfile = []
    for (let i = 0; i < this.props.profiles.length; i++) {
        if (i === index) {
            continue
        }
        newProfile.push(this.props.profiles[i])
    }
    this.props.setProfiles(newProfile)
  }
  render() {
    // const [dense, setDense] = React.useState(false);
    // const [secondary, setSecondary] = React.useState(false);
    
    let profileItems = []
    for (let i=0; i<this.props.profiles.length; i++){
      profileItems.push(
        <ListItem  key={i} secondaryAction={
          <IconButton edge="end" aria-label="delete" onClick={this.deletionHandler(i)}>
              <DeleteIcon />
          </IconButton>
      }>
          <ListItemAvatar>
            <Avatar>
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={this.props.profiles[i]['name']}
            secondary= {this.state.secondary ? this.props.profiles[i]['detail'] : null}
          />
        </ListItem>
      )
    }
    return (
      <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.dense}
                onChange={this.setDense}
              />
            }
            label="My favorite movie list"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.secondary}
                onChange={this.setSecondary}
              />
            }
            label="See details"
          />
        </FormGroup>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              My favourite movies
            </Typography>
            {/* <Demo> */}
              <List dense={this.state.dense}>
              
                  {/* <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Independence Day"
                      secondary={secondary ? 'niubi' : null}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Independence Day 2"
                      secondary={secondary ? 'Secondary text' : null}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Rambo"
                      secondary={secondary ? 'Secondary text' : null}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Sherlock Holmes"
                      secondary={secondary ? 'Secondary text' : null}
                    />
                  </ListItem> */}
                  
                  {profileItems}
                  
              
              </List>
            {/* </Demo> */}
          </Grid>
        </Grid>
      </Box>
    );
  }
}
export default profileList;
