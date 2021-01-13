
import React from 'react';


function UserProfile(props){

    // console.log(props.user)

        return(
            <div>

                <h2>{props.user.name}</h2>
                <img width="200" src={props.user.avatar_url} alt="avatar pic"></img>
                <h3>Username:{props.user.login}</h3>
                <h3>Location:{props.user.location}</h3>
                <h3>Bio:{props.user.bio}</h3>
                <h3>Followers:{props.user.followers}</h3>

            
            </div>
        )
    }

export default UserProfile;