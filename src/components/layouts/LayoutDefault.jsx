import React from 'react'
import {Outlet} from 'react-router-dom'
import {Container} from '@mui/material'
import Header from './Header'
import Footer from './Footer'

const LayoutDefault = () => {
    return <>
        <Header navPosition="right" className="reveal-from-bottom"/>
        <Container
            maxWidth="md"
            sx={{
                borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                mt: 8,
                py: [3, 6],
            }}
        >
            <Outlet/>
        </Container>
        <Footer/>
    </>
}

export default LayoutDefault