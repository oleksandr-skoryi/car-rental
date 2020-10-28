import React from 'react'
import CarComponent from './car-component';

const CarListComponent = (props) => {
    return (
        <div className='row'>
            {
                props.cars.map(car => {
                    return <CarComponent key={car.id} car={car}/>
                })
            }
        </div>
    )
}

export default CarListComponent