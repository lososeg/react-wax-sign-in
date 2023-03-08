import React, {useState} from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import {
    AppBar,
    Avatar,
    Box,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import HeaderWallet from '../wallet/HeaderWallet'


const Header = () => {
    const navigate = useNavigate()

    const [anchorElNav, setAnchorElNav] = useState(null)
    const pages = [
        {title: 'Not found', link: '/any-url'},
    ]

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }
    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    return <AppBar>
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <NavLink to={'/'}>
                    <Avatar src={'/logo192.png'} sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
                </NavLink>
                <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: {xs: 'block', md: 'none'},
                        }}
                    >
                        {pages.map((page, index) => (
                            <MenuItem key={index} onClick={() => {
                                handleCloseNavMenu()
                                navigate(page.link)
                            }}>
                                <Typography textAlign="center">{page.title}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
                <Avatar src={'/logo192.png'} sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>
                <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                    {pages.map((page, index) => (
                        <Button
                            key={index}
                            onClick={() => {
                                handleCloseNavMenu()
                                navigate(page.link)
                            }}
                            sx={{my: 2, color: 'white', display: 'block'}}
                        >
                            {page.title}
                        </Button>
                    ))}
                </Box>
                <Box sx={{flexGrow: 0}}>
                    <HeaderWallet/>
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
}

export default Header
