import React from 'react'
import { AppBar, Toolbar, Typography, Tab, Tabs,
    useMediaQuery, useTheme,
     Button } from '@mui/material'
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
import DrawerComp from '../drawer/drawer.component';
import { useState } from 'react';

const PAGES = ["Products", "Services", "About Us", "Contact us"]


const Header = () => {
    //States
    const [value, setValue] = useState()

    //Theme
    const theme = useTheme()
    //mediaquery
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <>
        <AppBar sx={{background: 'linear-gradient(158deg, rgba(6,102,216,1) 39%, rgba(215,15,15,1) 68%, rgba(255,255,255,1) 86%);' }} >
            <Toolbar>
                <Typography>
                    <StoreRoundedIcon />
                </Typography>


                {
                    isMatch ? (
                        <>
                        <Typography 
                        sx={{fontSize: "1.3rem",
                        paddingLeft: '1%', 
                        color: "seablue"}}>
                            TESCON
                        </Typography>
                        <DrawerComp />

                        </>
                    )
                    : (
                        <>
                        
                                       {/* This the tabs */}

                <Tabs  value={value}
                    onChange={(e, value) => setValue(value)}
                     textColor="inherit"
                     indicatorColor="secondary"
                    sx={{marginLeft: 'auto'}} >

                        {
                            PAGES.map((page, index) => (
                                <Tab key={index} label={page} />
                            ))
                        }
                    
                </Tabs>

                {/* Buttons */}

                <Button  variant='contained' 
                sx={{marginLeft: 'auto', background: "rgba(6,102,216,1) 39%"}}
                 >
                    SIGN UP
                </Button>

                    {/* to leave spaces between the buttons
                    I add marginLeft; '10px' */}
                <Button variant='contained' 
                sx={{marginLeft: '10px', background: "rgba(215,15,15,1) 68%"}}
                color='success' >
                    SIGN UP
                </Button>


                        </>
                    )
                }


 
            </Toolbar>
            
            
        </AppBar>
    </>
  )
}

export default Header
