import { AppBar, Container, CssBaseline, Toolbar, Typography } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import SurveyList from './components/SurveyList'
import Survey from './components/Survey'

function App() {

  return (
    <BrowserRouter>
      <Container>
        <AppBar>
          <Toolbar>
            <Typography variant='h6'>Survey List</Typography>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<SurveyList/>} />
          <Route path="/surveys/:id" element={<Survey/>} />
        </Routes>
        <CssBaseline/>
      </Container>
    </BrowserRouter>
  )
}

export default App
