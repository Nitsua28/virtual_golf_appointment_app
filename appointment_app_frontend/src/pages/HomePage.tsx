import { useNavigate } from "react-router";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { MakeAppointmentCard } from "../components/MakeAppointmentCard";

export function HomePage(){
    function handleClick(){
        router("/appointment");
    }
    const router = useNavigate();
    
    
 return(
    <>
        <h1>VIRTUAL GOLF</h1>
        <MakeAppointmentCard handleClick={handleClick}/>
    </>
    
 );
}