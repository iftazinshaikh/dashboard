import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import {styled} from '@mui/material/styles';
import List from '@mui/material/List';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import GridViewIcon from '@mui/icons-material/GridView';
import CalendarIcon from '@mui/icons-material/CalendarMonth';
import ChatIcon from '@mui/icons-material/ChatBubbleOutline';
import FileManagerIcon from '@mui/icons-material/Inventory2';
import EcommerceIcon from '@mui/icons-material/LocalMall';
import EmailIcon from '@mui/icons-material/Email';
import InvoiceIcon from '@mui/icons-material/PhoneAndroid';
import ContactIcon from '@mui/icons-material/Wifi';
import ProjectIcon from '@mui/icons-material/BusinessCenter';
import IconButton from '@mui/material/IconButton';
import UtilityIcon from '@mui/icons-material/ViewInAr';
import PersonIcon from '@mui/icons-material/Person';
import UIElementIcon from '@mui/icons-material/Layers';
import FormIcon from '@mui/icons-material/BorderColor';
import NotesIcon from '@mui/icons-material/Notes';
import {Box,Chip} from '@mui/material';
import {grey} from '@mui/material/colors';

const Drawer = styled(MuiDrawer,{shouldForwardProp: (prop) => prop !== 'open'})(
  ({theme,open}) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      color: "white",
      backgroundColor: grey[900],
      ...(!open && {
        overflowX: 'hidden',
        width: theme.spacing(8),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(8),
        },
      }),
    },
    'div[class*=" drawer-list-subheader"]': {
      backgroundColor: grey[900],
      color: grey[200]
    },
  }),
);

export default function MenuItems (props)
{
  const [open,setOpen] = React.useState(false);
  const [openEcommerce,setOpenEcommerce] = React.useState(false);

  const handleClick = () =>
  {
    setOpen(!open);
  };

  const handleEcommerceClick = () =>
  {
    setOpenEcommerce(!openEcommerce);
  };

  return (
    <Box >
      <Drawer variant="permanent" open >
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1],
          }}
        >
          <IconButton >
            <NotesIcon sx={{color: grey[200]}} />
          </IconButton>
        </Toolbar>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader" className="drawer-list-subheader">
              Menu
            </ListSubheader>
          }
        >
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <GridViewIcon sx={{color: grey[200]}} />
            </ListItemIcon>
            <ListItemText primary="Dashboards" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{pl: 4}}>
                <ListItemText primary="Ecommerce" />
              </ListItemButton>
              <ListItemButton sx={{pl: 4}}>
                <ListItemText primary="Saas" />
              </ListItemButton>
              <ListItemButton sx={{pl: 4}}>
                <ListItemText primary="Crypto" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>

        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader" className="drawer-list-subheader">
              Applications
            </ListSubheader>
          }
        >
          <ListItemButton>
            <ListItemIcon>
              <CalendarIcon sx={{color: grey[200]}} />
            </ListItemIcon>
            <ListItemText primary="Calendar" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ChatIcon sx={{color: grey[200]}} />
            </ListItemIcon>
            <ListItemText primary="Chat" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <FileManagerIcon sx={{color: grey[200]}} />
            </ListItemIcon>
            <ListItemText primary="File manager" />
          </ListItemButton>
          <ListItemButton onClick={handleEcommerceClick}>
            <ListItemIcon>
              <EcommerceIcon sx={{color: grey[200]}} />
            </ListItemIcon>
            <ListItemText primary="Ecommerce" />
            {openEcommerce ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <ListItemButton onClick={handleEcommerceClick}>
            <ListItemIcon>
              <EmailIcon sx={{color: grey[200]}} />
            </ListItemIcon>
            <ListItemText primary="Email" />
            {openEcommerce ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <ListItemButton onClick={handleEcommerceClick}>
            <ListItemIcon>
              <InvoiceIcon sx={{color: grey[200]}} />
            </ListItemIcon>
            <ListItemText primary="Invoices" />
            {openEcommerce ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <ListItemButton onClick={handleEcommerceClick}>
            <ListItemIcon>
              <ProjectIcon sx={{color: grey[200]}} />
            </ListItemIcon>
            <ListItemText primary="Projects" />
            {openEcommerce ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <ListItemButton onClick={handleEcommerceClick}>
            <ListItemIcon>
              <ContactIcon sx={{color: grey[200]}} />
            </ListItemIcon>
            <ListItemText primary="Contacts" />
            {openEcommerce ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </List>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader" className="drawer-list-subheader">
              Layouts
            </ListSubheader>
          }
        ></List>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader" className="drawer-list-subheader">
              Pages
            </ListSubheader>
          }
        >
          <ListItemButton onClick={handleEcommerceClick}>
            <ListItemIcon>
              <PersonIcon sx={{color: grey[200]}} />
            </ListItemIcon>
            <ListItemText primary="Authentication" />
            <Chip color="primary" label="8" />
          </ListItemButton>
          <ListItemButton onClick={handleEcommerceClick}>
            <ListItemIcon>
              <UtilityIcon sx={{color: grey[200]}} />
            </ListItemIcon>
            <ListItemText primary="Utility" />
            {openEcommerce ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </List>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader" className="drawer-list-subheader">
              Components
            </ListSubheader>
          }
        >
          <ListItemButton onClick={handleEcommerceClick}>
            <ListItemIcon>
              <UIElementIcon sx={{color: grey[200]}} />
            </ListItemIcon>
            <ListItemText primary="UI Elements" />
            {openEcommerce ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <ListItemButton onClick={handleEcommerceClick}>
            <ListItemIcon>
              <FormIcon sx={{color: grey[200]}} />
            </ListItemIcon>
            <ListItemText primary="Forms" />
            {openEcommerce ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </List>
      </Drawer>
    </Box>
  );
}
