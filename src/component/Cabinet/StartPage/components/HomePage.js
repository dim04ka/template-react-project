import React, { useState, Suspense  } from 'react';
import clsx from 'clsx';
import { useStyles } from '@cabinet/StartPage/style';
import { Drawer, AppBar, Toolbar, CssBaseline,Typography,
Divider, ListItem, ListItemIcon,ListItemText, Box }  from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import { menuList } from '@cabinet/StartPage/setting';
import { Switch, Route, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import { NavLink  } from 'react-router-dom';

import { compose } from 'redux';
import PropTypes from 'prop-types';

const Dictionary = React.lazy(() => import('@cabinet/Dictionary'));

const HomePage = ({history: { push }}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const openPage = link => {
    push(link)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Уроки английского языка
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <Box className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </Box>
        {
          menuList.map(({id, title, Icon, link}) => {
            return (
              <NavLink  to={link} key={id} activeClassName="selected" className={classes.hover}>
                <Divider />
                <ListItem>
                  <ListItemIcon>{Icon !== undefined ? <Icon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={title} />
                </ListItem>
              </NavLink>
            )
          })
        }
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Suspense fallback={<div>Загрузка...</div>}>
          <Switch>
              <Route exact path='/' component={() => <div>Home</div>}/>
              <Route path='/theme' component={() => <div>theme</div>}/>
              <Route path='/words' component={Dictionary}/>
              <Route path='/test' component={() => <div>test</div>}/>
              <Route path='' component={() => <Redirect to="/" />}/>
            </Switch>
        </Suspense>

      </main>
    </div>
  );
}

HomePage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
}

export default compose(
  withRouter
)(HomePage)
