import React from 'react';
import {AppBar, Toolbar, IconButton, Typography, InputBase, makeStyles } from '@material-ui/core';
import { SearchAppBarStyle } from './searchApBarStyle';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import {CardWidget} from '../CardWidget/CardWidget'

const useStyles = makeStyles((theme) => SearchAppBarStyle(theme))

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.shoppingCart}>
            <CardWidget/>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}