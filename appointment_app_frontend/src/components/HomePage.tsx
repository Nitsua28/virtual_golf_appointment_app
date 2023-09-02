import { useNavigate } from "react-router";

export function HomePage(){
    const router = useNavigate();
    function handleClick(){
        router("/appointment");
    }
 return(
    <>
        <h1>VIRTUAL GOLF</h1>
        <button onClick={handleClick}> Make an Appointment</button>
    </>
    
 );
}