import React from 'react';
import Box from "@mui/material/Box";
import styles from "./styles.module.scss";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "../../assets/img/sort.png";
import {alpha} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import InputBase from '@mui/material/InputBase';
import {styled} from '@mui/material/styles';

// SearchAppBar
const Search = styled('div')(({theme}) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


const MainAppBar = () => {
  return (
    <>
      <Box sx={{flexGrow: 1}} className={styles.mainWrap}>
        <Typography variant="h5" component="h5">
          Users
        </Typography>
        <Button component="label" variant="contained" style={{fontSize: '12px'}} startIcon={<AddIcon/>}
                className={styles.btn}>
          New User
        </Button>
      </Box>
      <Box sx={{flexGrow: 1}} className={styles.appbarWrap}>
        <AppBar position="static" color='grey' className={styles.appbar}>
          <Toolbar className={styles.toolbar}>
            <Search className={styles.searchWrap}>
              <SearchIconWrapper>
                <SearchIcon style={{color: 'gray'}}/>
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{'aria-label': 'search'}}
              />
            </Search>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{mr: 2}}
            >
              <img src={MenuIcon} alt="Menu Icon" className={styles.menuIcon}/>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default MainAppBar;

