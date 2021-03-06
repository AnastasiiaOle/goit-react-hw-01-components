import React from 'react';


const FriendsListItem = ({avatar, name, isOnline}) =>{
   return(
<li class="item">
  <span class="status">{isOnline}</span>
  <img class="avatar" src={avatar} alt={name} width="48" />
  <p class="name">{name}</p>
</li>
   )
};




export default FriendsListItem;