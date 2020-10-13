import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#45a8b9',
      darkest: '#215a63'
    },
  },
  typography: {
    h1: {
      fontFamily: 'Roboto Slab, serif',
      fontSize: '4em',
      fontWeight: 'normal',
    },
    h2: {
      fontFamily: 'Roboto Slab, serif',
      fontSize: '3em',
    },
    h3: {
      fontFamily: 'Roboto Slab, serif',
    },
  },
})

theme.typography.h1 = {
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.2em',
  },
  fontSize: '4em'
}

theme.typography.h2 = {
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.9em',
  },
  fontSize: '2.2em'
}

theme.typography.h6 = {
  [theme.breakpoints.down('sm')]: {
    fontSize: '1em',
  },
  fontSize: '1.2em'
}

export default theme
