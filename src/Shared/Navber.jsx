import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { ListItem } from '@mui/material';
import { Link,NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import useAuth from '../Hook/useAuth';
import toast from 'react-hot-toast';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navber = () => {

     const{user,logOut} = useAuth()

     const handlelogout = () => {

        logOut()
        .then(res => { console.log(res)
            toast.success('Logout Successfuly')
        })
     }
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <div>
            <AppBar position="fixed">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                    <img src={logo} alt="" className='w-[30px]'/>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{

                                mr: 10,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            
                             <Link to={'/'}>
                             Ruby Medical Camps
                             </Link>
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
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
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <NavLink
     to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-green-400" : ""
  }
>
<MenuItem>Home</MenuItem>
</NavLink>


<NavLink
     to="/avaliblecamps"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-green-400" : ""
  }
>
<MenuItem>Available Camps</MenuItem>
</NavLink>

<NavLink
     to="/dashboard"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-green-400" : ""
  }
>
<MenuItem>Dashboard</MenuItem>
</NavLink>

<NavLink
     to="/contactus"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-green-400" : ""
  }
>
<MenuItem>Contact Us</MenuItem>
</NavLink>
                             
                               
                              
                            </Menu>
                        </Box>
                        {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                      {/* <img src={logo} alt="" /> */}
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                       
                        <NavLink
     to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-green-400" : ""
  }
>
<MenuItem>Home</MenuItem>
</NavLink>


<NavLink
     to="/avaliblecamps"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-green-400" : ""
  }
>
<MenuItem>Available Camps</MenuItem>
</NavLink>

<NavLink
     to="/dashboard"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-green-400" : ""
  }
>
<MenuItem>Dashboard</MenuItem>
</NavLink>

<NavLink
     to="/contactus"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-green-400" : ""
  }
>
<MenuItem>Contact Us</MenuItem>
</NavLink>
                        </Box>

         {

            user?   <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src={user?.photoURL} />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                <ListItem>
                <button onClick={handlelogout}>
                <MenuItem>LogOut </MenuItem>
                </button>
               
                </ListItem>
            </Menu>
        </Box> :  <Box className={'flex gap-2'}>
        <Link to={'/signin'} >
                                    <MenuItem>Login </MenuItem>
                                </Link>

                                <Link to={'/signup'}>
                                    <MenuItem sx={{mr:2}}>Register </MenuItem>
                                </Link>
        </Box>
         }


                       

                      
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}

export default Navber