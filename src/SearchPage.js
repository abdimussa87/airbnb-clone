import { Button } from '@material-ui/core'
import React from 'react'
import './SearchPage.css'
import SearchResult from './SearchResult'
function SearchPage() {
    return (
        <div className='searchPage'>
            <div className="searchPage__info">
                <p>62 stays · 26 august to 30 august · 2 guest</p>
                <h3>Stays nearby</h3>
                <Button variant='outlined'>
                    Cancellation Flexibility
                </Button>
                <Button variant='outlined'>
                    Type of place
                </Button>
                <Button variant='outlined'>
                    Price
                </Button>
                <Button variant='outlined'>
                    Rooms and beds
                </Button>
                <Button variant='outlined'>
                    More filters
                </Button>
            </div>
            <SearchResult img='https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' location='Private room in the center of Addis Ababa ' title="Stay at this spacious Mella Resort" description="1 guest ·1 bedroom ·1 bed ·1.5 shared bathrooms ·Wifi ·kitchen ·Free parking ·Washing Machine" price='$145/night' total='$179' star='4.73' />
            <SearchResult img='https://images.unsplash.com/photo-1537726235470-8504e3beef77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' location='Private room in the center of Bahirdar' title="Independant luxury studio apartment" description="2 guest ·3 bedroom ·1 bed ·1.5 shared bathrooms ·Wifi ·Kitchen" price='$120/night' total='$179' star='3.85' />
            <SearchResult img='https://images.unsplash.com/photo-1486304873000-235643847519?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80' location='Private room in the center of Adama' title="5 star Luxury Apartment" description="3 guest ·5 bedroom ·1 bed ·1.5 shared bathrooms ·Wifi ·Kitchen" price='$190/night' total='$650' star='5' />
            <SearchResult img='https://images.unsplash.com/photo-1574739782812-9b064e1efeaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=60' location='Private room in the center of Hawasa' title="Haile Resort" description="3 guest ·5 bedroom ·1 bed ·1.5 shared bathrooms ·Wifi ·Kitchen" price='$180/night' total='$650' star='5' />
        </div>
    )
}

export default SearchPage
