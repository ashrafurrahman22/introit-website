import React from 'react';
import Card from './Card';
import Help from './Help';

const Home = () => {
    return (
        <div>
            <div style={{backgroundColor:'#eff2ff'}} className="p-5">
            <Help></Help>
            <Card></Card>
            </div>
        </div>
    );
};

export default Home;