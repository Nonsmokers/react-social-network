import React from 'react';
import user from '../user.png';


const User = () =>{
  return(
    <div className="content_user">
    <div className="content_user_icon">
        <img src={user}></img>
    </div>
    <div className="content_user_info">
      <ul className="">
        <li className=""><h1>Dmitry I.I.</h1></li>
        <li className="">Date of Birth: 2 april</li>
        <li className="">City: Minsk</li>
        <li className="">Education: BNTU 20'</li>
        <li className="">Web-site: http://it-kamasutra.com</li>
      </ul>
    </div>
    </div>
  )
}
export default User;