import { makeStyles } from '@material-ui/core/styles'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'

export const modalStyle = {
  top: `50%`,
  left: `50%`,
  transform: `translate(-50%, -50%)`
}

export const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: '#242526',
    border: '1px solid grey',
    borderRadius: 5,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 4, 3),
    color: 'white',
    minHeight: 700
  },
  multilineColor: {
    borderRadius: 6,
    margin: theme.spacing(0, 0, 2.5, 0),
    width: '100%',
    '& .MuiOutlinedInput-input': {
      borderColor: 'white',
      color: 'white',
      borderRadius: 6
    },

    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white'
      },
      '&:hover fieldset': {
        borderColor: 'white'
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white'
      }
    }
  },
  ButtonApply: {
    textTransform: 'none',
    backgroundColor: '#1976d2',
    color: 'white',
    fontSize: '1.2rem',
    width: 80,
    position: 'relative',

    left: 320,
    top: 20,
    '&:hover': {
      backgroundColor: '#1e88e5'
    }
  },
  label: {
    '&.MuiInputLabel-formControl': {
      color: 'white'
    }
  },
  SelectIcon: { color: 'white' },
  margin: {
    margin: theme.spacing(1)
  },
  Title: {
    fontSize: '1.8rem',
    margin: theme.spacing(0.5, 0, 4, 0)
  },
  Map: {
    margin: theme.spacing(5)
  },
  IconButtonClose: {
    color: 'white',
    position: 'fixed',
    top: 5,
    right: 10
  }
}))

export const theme = createMuiTheme({
  palette: {
    primary: grey
  }
})
