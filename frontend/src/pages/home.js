import React, { Fragment } from 'react'
import Navbar from '../homeComponents/Navbar'
import MainBody from '../homeComponents/Main/MainBody'
import Footer from '../homeComponents/Footer'

function home() {
    return (
        <Fragment>
            <Navbar />
            <MainBody />
            <Footer />
        </Fragment>
    )
}

export default home
