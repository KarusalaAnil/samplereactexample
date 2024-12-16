function User(probs){
    // console.log(probs);
    return (
        <div style={{background:'#CCC' , border:'1px solid',padding:'1em'}}>
            <h2>This is {probs.name} </h2>
            <p>Place : {probs.location}</p>
            <p>Age : {probs.age}</p>
            <p>Id : {probs.id}</p>
        </div>
        
    )
}

export default User