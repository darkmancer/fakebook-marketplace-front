import { makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#18191A'
  },
  paper: {
    margin: theme.spacing(5),
    marginTop: theme.spacing(8),
    padding: theme.spacing(1),
    backgroundColor: '#242526',
    borderRadius: 5,
    justifyContent: 'center'
  },
  Box: {
    height: 600,
    width: 800,
    padding: theme.spacing(2),
    borderRadius: 5,
    backgroundColor: 'red'
  },
  dividerLine: {
    backgroundColor: 'grey'
  },
  formControl: {
    margin: theme.spacing(0, 1, 1),
    minWidth: 120
    // backgroundColor: "pink",
  },
  selectEmpty: {
    marginTop: theme.spacing(1)
  },
  fontColor: {
    color: 'grey'
  },
  buttonColor: {
    backgroundColor: 'grey',
    color: 'white',
    borderRadius: 15,
    margin: theme.spacing(1)
  },
  paperSelling: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: theme.spacing(2),
    padding: theme.spacing(1),
    backgroundColor: '#4E4F50',
    borderRadius: 5,
    '&:hover': {
      borderRadius: 6,
      backgroundColor: '#3e5e85'
    }
  },
  title: {
    display: 'flex',
    margin: theme.spacing(1)
  },
  text: {
    margin: theme.spacing(1),
    color: 'white'
  }
}))
