import './App.css';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField id="outlined-basic" label="Ingrese un valor" variant="outlined" />
            </form>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Button variant="contained" color="primary">
              1
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Button variant="contained" color="primary">
              2
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Button variant="contained" color="primary">
              3
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Button variant="contained" color="default">
              +
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Button variant="contained" color="secondary">
              4
            </Button>
          </Paper>
        </Grid><Grid item xs={3}>
          <Paper className={classes.paper}>
            <Button variant="contained" color="secondary">
              5
            </Button>
          </Paper>
        </Grid><Grid item xs={3}>
          <Paper className={classes.paper}>
            <Button variant="contained" color="secondary">
              6
            </Button>
          </Paper>
        </Grid><Grid item xs={3}>
          <Paper className={classes.paper}>
            <Button variant="contained" color="default">
              -
            </Button>
          </Paper>
        </Grid><Grid item xs={3}>
          <Paper className={classes.paper}>
            <Button variant="contained">
              7
            </Button>
          </Paper>
        </Grid><Grid item xs={3}>
          <Paper className={classes.paper}>
            <Button variant="contained">
              8
            </Button>
          </Paper>
        </Grid><Grid item xs={3}>
          <Paper className={classes.paper}>
            <Button variant="contained">
              9
            </Button>
          </Paper>
        </Grid><Grid item xs={3}>
          <Paper className={classes.paper}>
            <Button variant="contained" color="default">
              *
            </Button>
          </Paper>
        </Grid><Grid item xs={3}>
          <Paper className={classes.paper}>
            <Button variant="contained" color="primary">
              .
            </Button>
          </Paper>
        </Grid><Grid item xs={3}>
          <Paper className={classes.paper}>
            <Button variant="contained" color="primary">
              0
            </Button>
          </Paper>
        </Grid><Grid item xs={3}>
          <Paper className={classes.paper}>
            <Button variant="contained" color="primary">
              =
            </Button>
          </Paper>
        </Grid><Grid item xs={3}>
          <Paper className={classes.paper}>
            <Button variant="contained" color="default">
              /
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
