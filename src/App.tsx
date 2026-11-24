import { AppBar, Container, CssBaseline, Toolbar, Typography } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router'
import Answers from './components/Answers'
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
          <Route path="/surveys/:id/answers" element={<Answers/>} />
        </Routes>
        <CssBaseline/>
      </Container>
    </BrowserRouter>
  )
}

export default App
