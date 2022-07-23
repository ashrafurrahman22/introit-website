import React from 'react';
import Card from './Card';
import Help from './Help';
import Leadership from './Leadership';
import OurCustomer from './OurCustomer';
import Portfolio from './Portfolio';
import Project from './Project';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <div style={{backgroundColor:'#eff2ff'}} className="p-5">
            <Help></Help>
            <Card></Card>
            </div>

            <Portfolio></Portfolio>
            <OurCustomer></OurCustomer>

           <div style={{backgroundColor:"#eff2ff", padding:"12px"}} className="my-16">
           <Review></Review>
           </div>

            <Leadership></Leadership>
           <div className='mt-16 mb-10'>
           <Project></Project>
           </div>

        </div>
    );
};

export default Home;