import Challenges from "../../Challanges";

function ChallangesPage(props){
    return(
        
            <button className="Card">
             <p>{props.title}</p>
            <p>{props.score}</p>          
            </button>
    )
}
export default ChallangesPage;