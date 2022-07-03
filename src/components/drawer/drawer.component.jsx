import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useState } from 'react'


const PAGES = ["Products", "Services", "About Us", "Contact us", "SignIn", "SignOut"]

const DrawerComp = () => {


  //states
  const [openDrawer, setOpenDrawer] = useState(false)


  return (
    <>
    <Drawer  open={openDrawer} 
    onClose={() => setOpenDrawer(false)} >
      <List  >
        {
          PAGES.map((page, index) => (
            <ListItemButton 
            onClick={() => setOpenDrawer(false)}
             key={index}>
          <ListItemIcon>
            <ListItemText>
              {page}
            </ListItemText>
          </ListItemIcon>
        </ListItemButton>
          ))
        }
        
      </List>
    </Drawer>

    <IconButton sx={{color:'red', marginLeft: 'auto'}}
     onClick={() => setOpenDrawer(!openDrawer)} >
        <MenuRoundedIcon />
    </IconButton>
    </>
  )
}

export default DrawerComp
