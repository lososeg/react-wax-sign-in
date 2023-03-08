import React from 'react'
import PropTypes from 'prop-types'
import {withUAL} from 'ual-reactjs-renderer'
import {Button, Typography} from '@mui/material'

const HeaderWallet = (props) => {
    return <>
        {props.ual.activeUser ?
            <>
                <Typography>{props.ual.activeUser.accountName} <Button variant="outlined" onClick={props.ual.logout}>Logout</Button></Typography>
            </>
            :
            <Button variant="outlined" onClick={props.ual.showModal}>Login</Button>
        }

    </>
}

HeaderWallet.propTypes = {
    ual: PropTypes.object,
}
export default withUAL(HeaderWallet)
