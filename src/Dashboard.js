
import * as React from 'react';
import {styled,createTheme,ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import GridViewIcon from '@mui/icons-material/GridView';
import MenuItems from './MenuItems';
import {blueGrey} from '@mui/material/colors';
import Paper from '@mui/material/Paper';
import PieChartIcon from '@mui/icons-material/PieChart';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SideCard from './SideCard';
import Chart from './Chart';

const drawerWidth = 230;
const AppBar = styled(MuiAppBar,{
})(() => ({
  marginLeft: drawerWidth,
  backgroundColor: blueGrey[50],
  color: "black",
  borderTopLeftRadius: "25px",
  width: `calc(100% - ${drawerWidth}px)`
}));
const mdTheme = createTheme();

function DashboardContent ()
{
  return (
    <ThemeProvider theme={mdTheme}>
      <CssBaseline />
      <Grid container>
        <Grid item xs={2} sx={{backgroundColor: blueGrey[50]}}>
          <MenuItems />
        </Grid>
        <Grid item xs={10} sx={{backgroundColor: blueGrey[50]}}>
          <AppBar>
            <Toolbar
              sx={{
                pr: '24px',
                display: 'flex',flexGrow: 1,justifyContent: "space-between"
              }}
            >
              <div>
                <Typography
                  component="h1"
                  variant="h6"
                >
                  Dashboard
                </Typography>
              </div>
              <div >
                <IconButton
                  color="inherit"
                >
                  <SearchIcon />
                </IconButton>
                <IconButton
                  color="inherit"
                >
                  <GridViewIcon />
                </IconButton>
                <IconButton
                  color="inherit"
                >
                  <Badge badgeContent={4} color="secondary" sx={{marginRight: '8px'}}>
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  color="inherit"
                >
                  <SettingsIcon />
                </IconButton>
                <IconButton
                  color="inherit"
                >
                  <Avatar alt="Profile picture" src="/lady.png" />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          <br />
          <br />
          <br />
          <Grid container>
            <Grid item xs={9}>
              <Grid sx={{display: 'flex',flexGrow: 1}} >
                <List sx={{width: '100%',maxWidth: 240,marginRight: "8px",marginLeft: "16px",bgcolor: 'background.paper',borderRadius: "10px"}}>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar sx={{bgcolor: "#2196f3",borderRadius: "5px"}} variant="square" alt="pie chart" >
                        <PieChartIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Revenue"
                      secondary={
                        <div style={{display: 'flex',flexGrow: 1,justifyContent: 'space-between'}}>
                          <div>
                            <Typography
                              component="span"
                              variant="h5"
                              color="text.primary"
                            >
                              $21,456
                            </Typography>
                          </div>
                          <div>
                            <Chip label="+2.56%" color="success" />
                          </div>
                        </div>
                      }
                    />
                  </ListItem>
                </List>

                <List sx={{width: '100%',maxWidth: 240,marginRight: "8px",bgcolor: 'background.paper',borderRadius: "10px"}}>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar sx={{bgcolor: "#2196f3",borderRadius: "5px"}} variant="square" alt="pie chart" >
                        <ShoppingBagIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Orders"
                      secondary={
                        <div style={{display: 'flex',flexGrow: 1,justifyContent: 'space-between'}}>
                          <div>
                            <Typography
                              component="span"
                              variant="h5"
                              color="text.primary"
                            >
                              4,563
                            </Typography>
                          </div>
                          <div>
                            <Chip label="-0.82%" color="error" />
                          </div>
                        </div>
                      }
                    />
                  </ListItem>
                </List>
                <List sx={{width: '100%',maxWidth: 240,marginRight: "8px",bgcolor: 'background.paper',borderRadius: "10px"}}>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar sx={{bgcolor: "#2196f3",borderRadius: "5px"}} variant="square" alt="pie chart" >
                        <PeopleIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Customers"
                      secondary={
                        <div style={{display: 'flex',flexGrow: 1,justifyContent: 'space-between'}}>
                          <div>
                            <Typography
                              component="span"
                              variant="h5"
                              color="text.primary"
                            >
                              45,245
                            </Typography>
                          </div>
                          <div>
                            <Chip label="-1.04%" color="error" />
                          </div>
                        </div>
                      }
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid>
                <Paper
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: "16px",
                    marginTop: "8px",
                    maxWidth: "740px",
                    height: 240,
                  }}
                >
                  <Chart />
                </Paper>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <SideCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider >
  );
}

export default function Dashboard ()
{
  return <DashboardContent />;
}
