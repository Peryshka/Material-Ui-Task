import './App.module.scss';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import styles from './App.module.scss';
import Table from './components/table/index';
import UpperWrap from "./components/UpperWrap";
import MainAppBar from "./components/AppBar";


function App() {
  return (
    <div>
      <Container fixed className={styles.container}>
        <Box sx={{bgcolor: '#EBEDEF', height: '100vh'}}>
          <UpperWrap />
          <MainAppBar  />
          <Box className={styles.tableWrap}>
            <Table />
          </Box>
        </Box>
        {/* The end of AppBar code*/}
      </Container>
    </div>
  );
}

export default App;
