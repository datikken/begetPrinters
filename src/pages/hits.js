import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HitsHero from "../components/hits/hits_hero"

import { Link } from "gatsby"

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import "../styles/scss/main.scss"

const useStyles = makeStyles(theme => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Hits = () => (
  <Layout>
    <SEO title="Hits" />
 
      <div className="crumbs_wrap">
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <Link color="inherit" href="/" onClick={() => {}}>
            Главная
          </Link>
          <Typography color="textPrimary">Хит-парад принтеров</Typography>
        </Breadcrumbs>
      </div>
    
    <Breadcrumbs />
    <HitsHero />


  </Layout>
)

export default Hits