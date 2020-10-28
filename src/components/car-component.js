import React from 'react';

const CarComponent = (props) => {

    console.log(props.car)
    const {name, model, fuelType, fuelPer100Km} = props.car
    return (
        <div className='col-4 car-component'>
            <img className='car-image' src='https://picsum.photos/200/200'/>
            <p className='text-center'>{name} {model}</p>
            <p className='text-center'>{fuelType} {fuelPer100Km}/per 100km</p>

            {/*{id}*/}
        </div>
    )
}

export default CarComponent