import React, { Profiler } from 'react';

import Profile from './components/Profile/Profile';
import Stats from './components/Statistics/Stats';
import FriendsList from './components/Friends/FriendsList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import user from './user.json';
import statistical from './statistical-data.json';
import friends from './friends.json';
import transactionData from './transactions.json';



const App =() => {
    return (
        <div>
        <Profile
        avatar = {user.avatar}
        name = {user.name}
        tag = {user.tag}
        location = {user.location}
        stats ={user.stats}
        />
        <Stats title="Upload stats" stats={statistical} />
        <FriendsList friends = {friends} />
        <TransactionHistory items ={transactionData} />
        </div>
    );

};



export default App;