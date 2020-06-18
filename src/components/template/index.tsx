import React, { FunctionComponent } from 'react'
import clsx from 'clsx'
import Header from './header'
import { useStyles } from './styles'
import { withStyles } from '@material-ui/core'
import HomePage from '../../pages/home'
const Template: FunctionComponent<any> = ({classes}) => {
  return (
  <>
    <Header></Header>
    <div className={classes.root}>
      <main className={clsx(classes.content)}>
        <div className={classes.drawerHeader} />
        {/* <Routes /> */}
        <HomePage />
      </main>
    </div>
  </>
  )
}

export default withStyles(useStyles)(Template);