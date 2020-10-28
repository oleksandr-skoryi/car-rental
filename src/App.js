import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import ContentComponent from './components/content-component';

function App() {

    let appState = {
        cars: [
            {
                id: 1,
                name: 'Nissan',
                model: 'Qashqai',
                year: 2004,
                fuelPer100Km: 5,
                fuelType: 'DIESEL'
            },
            {
                id: 2,
                name: 'Opel',
                model: 'Omega',
                year: 2008,
                fuelPer100Km: 6,
                fuelType: 'GASOLINE'
            },
            {
                id: 3,
                name: 'Opel',
                model: 'Astra',
                year: 2008,
                fuelPer100Km: 6,
                fuelType: 'GASOLINE'
            },
            {
                id: 4,
                name: 'Opel',
                model: 'Cadet',
                year: 2008,
                fuelPer100Km: 6,
                fuelType: 'GASOLINE'
            },
            {
                id: 5,
                name: 'Opel',
                model: 'Tigra',
                year: 2008,
                fuelPer100Km: 6,
                fuelType: 'GASOLINE'
            },
            {
                id: 6,
                name: 'Tesla',
                model: 'S',
                year: 2008,
                fuelPer100Km: 6,
                fuelType: 'ELECTRIC'
            },
            {
                id: 7,
                name: 'Nissan',
                model: 'Leaf',
                year: 2008,
                fuelPer100Km: 6,
                fuelType: 'ELECTRIC'
            }
        ]
    }

    const [state, setState] = useState(appState)

    return (
        <div className="wrapper">
            <Header/>
            <ContentComponent cars={state.cars}/>
            <Footer/>
        </div>
    );
}

export default App;
