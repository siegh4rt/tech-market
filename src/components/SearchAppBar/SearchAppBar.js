import React, {useState} from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, makeStyles, Button, Menu, MenuItem } from '@material-ui/core';
import { SearchAppBarStyle } from './searchApBarStyle';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import { CardWidget } from '../CardWidget/CardWidget';


const useStyles = makeStyles((theme) => SearchAppBarStyle(theme))

export default function SearchAppBar(props) {
  const {getTargetProduct} = props
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    getTargetProduct(e.target.innerText);
    
  };

  const categories = ['Nuts', 'Vegetals', 'Fruits', 'Flour', 'Drinks', 'dairy products', 'Mushrooms', 'grain'];
  
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
            <>
              <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <Typography className={classes.title} variant="h6" noWrap>Categories</Typography>
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {categories && categories.map((elem, i)=> {
                   return <MenuItem key={i} onClick={handleClose}>{elem}</MenuItem>
                })}
              </Menu>
            </>
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
            <CardWidget />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}