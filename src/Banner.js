import React, { useState } from 'react'
import './Banner.css'
import { Button } from '@material-ui/core'
import DatePicker from './DatePicker';
function Banner() {
    const [showDatePicker, setShowDatePicker] = useState(false);
    return (
        <div className='banner'>
            <div className="banner__searchDates">
                <Button variant='outlined' onClick={() => setShowDatePicker(!showDatePicker)}>
                    {showDatePicker ? 'Hide' : 'Search Dates'}
                </Button>
                {showDatePicker && <DatePicker />}
            </div>
            <div className="banner__info">
                <h1>Get out and stretch your imagination</h1>
                <h5>
                    Settle in somewhere new. Discover stays to live, work, or just relax.
                  </h5>
                <Button variant='outlined'>
                    Explore nearby
                  </Button>
            </div>
        </div>
    )
}

export default Banner
