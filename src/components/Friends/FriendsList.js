import React from 'react';
import FriendsListItem from './FriendsListItem/FriendsListItem';
import PropTypes from 'prop-types';



const FriendsList = ({friends}) => {
    return (
        <ul class ='friend-list'>
           {friends.map(item => (
               <FriendsListItem
               avatar = {item.avatar}
               name = {item.name}
               isOnline = {item.isOnline}
               key = {item.id} />
           ))}
        </ul>

    );
};

FriendsList.propTypes = {
    frineds: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        }).isRequired,
    ).isRequired,
};


export default FriendsList;