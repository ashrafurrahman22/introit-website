import React from 'react';
import Card from './Card';
import Help from './Help';
import Portfolio from './Portfolio';

const Home = () => {
    return (
        <div>
            <div style={{backgroundColor:'#eff2ff'}} className="p-5">
            <Help></Help>
            <Card></Card>
            </div>

            <Portfolio></Portfolio>
        </div>
    );
};

export default Home;