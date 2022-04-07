import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActionArea,
    Stack
} from '@mui/material'

class SlideItemList extends React.Component {
    render() {
        return (
            <Stack direction="row" spacing={2} sx={{ 'overflow': 'auto' }}>
                {
                    this.props.data.map((item, idx) => {
                        return (
                            <a href={this.props.url}>
                                <Card sx={{ width: 250 }} key={idx}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={item.img}
                                            alt={item.title}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="body2" component="div">
                                                {item.title}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </a>
                        )
                    })
                }
            </Stack>
        )
    }
}

export default SlideItemList;