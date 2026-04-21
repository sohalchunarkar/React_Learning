import React from 'react'
import Header from './header'
import PageContent from './PageContent'
const Section1 = (props) => {
    return (
        <div className='h-screen w-full'>
            <Header />
            <PageContent users={props.users} />

        </div>
    )
}

export default Section1