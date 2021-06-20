import './App.css';
import { Grid, withStyles } from '@material-ui/core';
import SearchAppBar from './components/SearchAppBar/SearchAppBar'
import AppContent from './screens/AppContent/AppContent'

const styles = theme => ({
  appContainer: {
    background: theme.palette.background.default,
    height: '100%',
    flexWrap: 'nowrap'
  },
  appContent: {
    flex: 1,
    width: '100%',
    maxWidth: '90%',
    margin: [[0, 'auto']]
  }
})

function App(props) {
  const { classes} = props
  return (
    <Grid container direction={'column'} classes={{ root: classes.appContainer }}>
        <SearchAppBar position={'up'} />
        <Grid item classes={{ root: classes.appContent }}>
            <AppContent/>
        </Grid>
    </Grid>
  );
}

export default withStyles(styles)(App)
