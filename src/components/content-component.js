import React from 'react';
import CarListComponent from './car-list-component';
import CarFilterComponent from './car-filter-component';

const ContentComponent = (props) => {
    return (
        <div className='content container'>
            <div className='row'>
                <div className="col-3">
                    <CarFilterComponent/>
                </div>
                <div className='col-9'>
                    <CarListComponent cars={props.cars}/>
                </div>
            </div>

        </div>
    )
}

export default ContentComponent