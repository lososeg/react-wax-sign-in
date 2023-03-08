import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Route, Routes} from 'react-router-dom'
import {CircularProgress} from '@mui/material'
import {getLoaded, initialize} from './store/appSlice'
import LayoutDefault from './components/layouts/LayoutDefault'
import NotFound from './components/static/NotFound'
import About from './components/static/About'

const App = () => {
    const loaded = useSelector(getLoaded)

    const dispatch = useDispatch()

    useEffect(() => {
        if (!loaded) {
            dispatch(initialize())
        }
    }, [loaded])

    if (!loaded) {
        return <CircularProgress />
    }

    return <Routes>
        <Route path="/" element={<LayoutDefault/>}>
            <Route exact path="/" element={<About/>}/>
{/*
            <Route path="/user/:name" element={<User/>}/>
            <Route path="/profile" element={<LayoutProfile/>}>
                <Route exact path="/profile" element={<Recommended/>}/>
            </Route>
*/}
            <Route path="*" element={<NotFound/>}/>
        </Route>
    </Routes>
}

export default App
