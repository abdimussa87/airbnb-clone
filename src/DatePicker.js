import React from 'react'
import './DatePicker.css'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People'
import { useHistory } from 'react-router-dom';
function DatePicker() {
    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }
    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
    return (
        <div className='datePicker'>
            <center>

                <DateRangePicker
                    ranges={[selectionRange]}
                    onChange={handleSelect}
                />
                <div className="datePicker__guests">
                    <h2>
                        Number of guests
                    <PeopleIcon />
                    </h2>
                    <input type="number" min={0} defaultValue={2} />
                </div>
                <Button onClick={() => history.push('./search')} >Search Airbnb</Button>
            </center>
        </div>
    )
}

export default DatePicker
