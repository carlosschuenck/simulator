import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText, Toolbar,
  Typography
} from '@material-ui/core';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { AttachMoney, ChevronLeft, ChevronRight, Mail, Menu as MenuIcon } from '@material-ui/icons';
import clsx from 'clsx';
import React, { FunctionComponent, useState } from 'react';
import { useStyles } from '../styles';
import { useHistory } from "react-router-dom";

interface Module {
  title: string,
  link: string,
  icon: string,
}

interface OwnProps {
  classes: any,
  theme: any
}

type Props = OwnProps;

const Menu: FunctionComponent<any> = ({classes, theme}: Props) => {

  const [open, setOpen] = useState(false)
  let history = useHistory();
  
  const modules: Module[] = [
    { title: 'Home', link: '', icon: 'home' },
    { title: 'Juros Compostos', link: 'juros-compostos', icon: 'juros-compostos'},
  ];

  const iconOptions: any = {
    'home': <MenuIcon />,
    'juros-compostos': <AttachMoney />
  }

  const getIconOfMenu = (icon: string) => {
    return iconOptions[icon]
  }

  const redirect = (uri: string) => {
    history.push(uri)
  }

  return (
    <>
      <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, { [classes.appBarShift]: open,})}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => setOpen(true)}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Simulador
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}>
          <div className={classes.drawerHeader}>
            <IconButton onClick={() => setOpen(false)}>
              {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
            </IconButton>
          </div>
        <Divider />
        <List>
          {modules.map(({ title, link, icon }, index) => (
            <ListItem button key={title} onClick= { () => redirect(`/${encodeURIComponent(link)}`) }>
                <ListItemIcon> { getIconOfMenu(icon) } </ListItemIcon>
                <ListItemText primary={title} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Contato'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon><Mail /></ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  )
}



export default withStyles(useStyles)(withTheme(Menu));