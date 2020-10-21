import React from 'react'
import Banner from './Banner'
import Card from './Card'
import './Home.css'
function Home() {
    return (
        <div className='home'>

            <Banner />
            <div className="home__row">
                <Card
                    src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=60" title="Online Experiences" description="Unique activities we can dSonny Sangha led by a world of hosts." />

                <Card src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" title="Unique stays" description="Spaces that are more than just a place to sleep." />

                <Card src="https://images.unsplash.com/photo-1537726235470-8504e3beef77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                    title="Entire homes" description="Comfortable private places, with room for friends or family" />
            </div>
            <div className="home__row">
                <Card src="https://images.unsplash.com/photo-1558442074-3c19857bc1dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80" title='3 Bedroom Flat in Bournemouth' description='Superhost with a stunning view of the beachside in Sunny Bournemouth' price='$130' />

                <Card src='https://images.unsplash.com/photo-1486304873000-235643847519?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80' title='Penthouse in London' description='Enjoy the amazing sights of London with this stunning penthouse' price='$350' />

                <Card src='https://images.unsplash.com/photo-1574739782812-9b064e1efeaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=60' title='1 Bedroom aprtment' description='Superhost with great amenities and a fabulous shopping complex nearby' price='$200' />
            </div>
        </div>
    )
}

export default Home
