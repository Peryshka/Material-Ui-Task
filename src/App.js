import './App.module.scss';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import GBImg from './assets/img/united-kingdom.png';
import styles from './App.module.scss';
import Avatar from '@mui/material/Avatar';
import man from './assets/img/man.png'
import Badge from '@mui/material/Badge';
import {alpha} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from './assets/img/sort.png';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const Item = styled(Paper)(({theme}) => ({
  background: '#EBEDEF',
  border: 'none'
}));

const styles1 = theme => ({
  margin: {
    margin: theme.spacing.unit * 2
  },
  customBadge: {
    backgroundColor: "#00AFD7",
    color: "white"
  }
});
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


function App() {
  return (
    <div>
      <Container fixed className={styles.container}>
        <Box sx={{bgcolor: '#EBEDEF', height: '100vh'}}>
          <Stack spacing={{xs: 1, sm: 2}} direction="row" useFlexGap justifyContent="space-between" padding="0 20px" marginBottom= '40px'>
            <Item className={styles.cardFirst}>
              <SearchIcon style={{color: 'gray'}}/>
            </Item>
            <Item className={styles.card}>
              <img src={GBImg} alt="Great Britain Flag" className={styles.flag}/>
              <Badge sx={{
                "& .MuiBadge-badge": {
                  color: "white",
                  backgroundColor: "#f44336"
                }
              }}
                     badgeContent={2} className={styles.badge}>
                <NotificationImportantIcon/>
              </Badge>
              <Avatar
                alt="Remy Sharp"
                sx={{width: 24, height: 24}}
              >
                <img src={man} alt="man" className={styles.avatar}/>
              </Avatar>
            </Item>
          </Stack>
          {/*AppBar*/}
          <Box sx={{flexGrow: 1}} className={styles.mainWrap}>
            <Typography variant="h5" component="h5">
              Users
            </Typography>
            <Button component="label" variant="contained" style={{fontSize: '12px'}} startIcon={<AddIcon />} className={styles.btn}>
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
        </Box>
        {/* The end of AppBar code*/}
      </Container>
    </div>
  );
}

export default App;
