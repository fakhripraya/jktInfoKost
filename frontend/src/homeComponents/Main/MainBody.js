import React from 'react'
import Home from './Home'
import Sewaan from './Sewaan'
import Tanah from './Tanah'
import { useSelector } from 'react-redux'

function MainBody() {

    const pageIndex = useSelector(state => state.homePageDataReducer.pageIndex)

    if (pageIndex === 0) {
        return <Home />;
    }
    else if (pageIndex === 1) {
        return <Tanah />;
    }
    else if (pageIndex === 2) {
        return <Sewaan />;
    }
}

export default MainBody;