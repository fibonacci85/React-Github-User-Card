import React from 'react';

function UserForm(props){

        return(
            <div className="formInput">

                <form>
                    <input onChange={props.handleChange} type="text" />
                    <button onClick={props.handleClick}>Search</button>
                </form>

            </div>

        )
    }


export default UserForm;