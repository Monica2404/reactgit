import {AirVent,ActivitySquare,Airplay,AlarmClockOff,BadgeCheck,BadgeInfo,BaggageClaim,BellRing,Contact,Container,Contrast,Cpu,Eye,Flame,Glasses,Headphones, AlignCenter}
from "lucide-react";
const Table=()=>

{
    return(
        <>
        <center><table border="4px" >
        <tr>
            <td><AirVent /></td>
            <td><ActivitySquare /></td>
            <td><Airplay /></td>
            <td><AlarmClockOff /></td>
            
        </tr>
        <tr>
            <td><BadgeCheck /></td>
            <td><BadgeInfo /></td>
            <td><BaggageClaim /></td>
            <td><BellRing /></td>
        </tr>
        <tr>
            <td><Contact /></td>
            <td><Container /></td>
            <td><Contrast /></td>
            <td><Cpu /></td>
        </tr>
        <tr>
            <td><Eye /></td>
            <td><Flame /></td>
            <td><Glasses /></td>
            <td><Headphones /></td>
        </tr>
        </table>
        </center>
        </>
    )
}
export default Table;