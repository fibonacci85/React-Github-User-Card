import React from 'react';

function Followers(props) {

// console.log(props.followers)

    return(
        <div className="followersContainer">
            <h1>MY FOLLOWERS</h1>
            
            {/* <img width="200px" src={props.followers[0].avatar_url} alt="avatar"></img> */}
            
            {props.followers.map((item) => (
                <img width="200" src={item.avatar_url} key={item.id} alt="avatar"></img>
            ))}



        </div>
        
       
    )
}

export default Followers;