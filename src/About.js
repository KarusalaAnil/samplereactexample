import { useDispatch } from "react-redux";
import { updateLoginStatus } from "./actions";

function About() {
    let dispatch = useDispatch();
    return (
        <>
        <h1>This Is About Component</h1>
        <button onClick={()=>{
            // dispatch(updateLoginStatus(true));
            dispatch({type:'updateLoginStatus',payload:true});
        }}>Save</button>
        </>

    )
}
export default About;