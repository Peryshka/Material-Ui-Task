import React from 'react';
import GBImg from "../../assets/img/united-kingdom.png";
import Avatar from '@mui/material/Avatar';
import man from '../../assets/img/man.png';
import Badge from '@mui/material/Badge';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import {styled} from '@mui/material/styles';
import styles from './styles.module.scss';

const Item = styled(Paper)(({theme}) => ({
  background: '#EBEDEF',
  border: 'none'
}));

const UpperWrap = () => {
  return (
    <Stack spacing={{xs: 1, sm: 2}} direction="row" useFlexGap justifyContent="space-between" padding="0 20px"
           marginBottom='40px'>
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
  )
}

export default UpperWrap;

