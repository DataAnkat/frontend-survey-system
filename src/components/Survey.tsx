import { Box, Paper, TextField, Typography } from '@mui/material'

const questions = [
  'What is your name?',
  'How did you hear about us?',
  'What could we improve?',
]

function Survey() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper sx={{ p: 4, width: '100%', maxWidth: 500 }}>
        <Typography variant="h5" gutterBottom>
          Survey
        </Typography>
        {questions.map((question) => (
          <Box key={question} sx={{ mt: 3 }}>
            <Typography gutterBottom>{question}</Typography>
            <TextField fullWidth size="small" />
          </Box>
        ))}
      </Paper>
    </Box>
  )
}

export default Survey
