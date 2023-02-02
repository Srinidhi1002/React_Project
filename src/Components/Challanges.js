import './css/Challanges.css'
import { useState } from 'react';
import ChallangesPage from './Pages/challanges/ChallangesPage';

function Challanges(){
   
    const [selectedChallenge, setSelectedChallenge] = useState({});
    const handleClick = (challenge) => {
        setSelectedChallenge(challenge);
        
         };
         const technologies = ["Programming", "Linux"]
         const programming = [
            {
                title: "Server Addition!",
                score: 15
            },
            {
                title: "Reverse Gear!",
                score: 15
            },
            {
                title: " Mathematically Beauty!",
                score: 95
            }

        ]
        
        const linux = [
            {
                title: "Read File",
                score: 10
            },
            {
                title: "Hidden Files",
                score: 20
            },
            {
                title: "Unique Flag",
                score: 20
            },
            {
                title: "Pain in dash!",
                score: 25
            },
            {
                title: "Eleven",
                score: 30

            }
        ]
    return(
        <div>
            <div className='technology'>
                <h2 className='tech-title'>{technologies[0]}</h2>
                <div className='cards-ctn'>{
                    programming.map(x => (
                    <ChallangesPage  title={x.title} score={x.score} onClick={() => handleClick(x)}></ChallangesPage>
                 ))
                }</div>
            </div>
            <div className='technology'>
                <h2 className='tech-title'>{technologies[1]}</h2>
                <div className='cards-ctn'>{
                    programming.map(x => (
                    <ChallangesPage  title={x.title} score={x.score} onClick={() => handleClick(x)}></ChallangesPage>
                 ))
                }</div>
            </div>
            
        </div>
    )
}
export default Challanges;