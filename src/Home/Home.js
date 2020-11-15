import React from 'react';
import FoodCard from '../FoodCard/FoodCard';
import Service from '../Service/Service';
import Footer from '../Footer/Footer'
import './Home.css'
import Navigation from '../NavBar/Navigation';
const Home = () => {
    return (
        <div className="">
            <Navigation></Navigation>
        <div className = "Home-container">
            <h2 style ={{paddingTop:'10rem', fontSize: '40px'}}>Best Food waiting for your belly</h2>
            <input  style ={{position :'relative',padding:'10px 10%' ,border:'none', borderRadius:'10px'}} type="text"/> <button style ={{position:'absolute', marginLeft:'-60px',padding:'10px 20px',border:'none',borderRadius:'10px' , backgroundColor:'orange',cursor:'pointer'}}>Search</button>
        </div>
        <FoodCard></FoodCard>
        <Service></Service>
        <Footer></Footer>
        </div>
       
    );
};

export default Home;