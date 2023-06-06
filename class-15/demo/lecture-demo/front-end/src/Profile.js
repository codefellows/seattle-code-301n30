import { withAuth0 } from "@auth0/auth0-react";
import React from "react";

class Profile extends React.Component{
    render(){
        const {isAuthenticated, user} = this.props.auth0;

        return (
            isAuthenticated && (
              <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </div>
            )
          );
    }
}

export default withAuth0(Profile);