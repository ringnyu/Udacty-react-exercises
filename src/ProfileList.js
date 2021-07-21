import React, {Component} from 'react'

class ProfileList extends Component {
  render(){
    
  		return(
        	<div className='profile-list'>
          		
          			{this.props.profiles.map(profile => {
        					const userName= this.props.users[profile.userID].name;
   							const favMovie= this.props.movies[profile.favoriteMovieID].name;
							return (
          						<li key={profile.id}>
                              	<p>{userName}'s favourite movie is {favMovie}</p>
								</li>);
                  })}
          		
          		
          	</div>
        );
  	}

}

export default ProfileList;
