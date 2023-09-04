import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export function MakeAppointmentCard (props: any) {
    return(
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 240 }}
        image="stockgolf.jpg"
        title="golfpic"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Make an Appointment!
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rent one of our simulators
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" onClick={props.handleClick}>
            Create
        </Button>
      </CardActions>
    </Card>
    );
}