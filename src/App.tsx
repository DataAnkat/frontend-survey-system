import { AppBar, Container, CssBaseline, Toolbar, Typography } from '@mui/material'
import './App.css'
import SurveyList from './components/SurveyList'

function App() {

  return (
    <Container>
      <AppBar>
        <Toolbar>
          <Typography variant='h6'>Survey List</Typography>
        </Toolbar>
      </AppBar>
      <SurveyList/>
      <CssBaseline/>
    </Container>
  )
}

export default App
