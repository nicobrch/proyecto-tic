// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import React from "react";
import CardNavigationCenter from "../views/cards/CardNavigationCenter";
import CardHorizontalRatings from "../views/cards/CardHorizontalRatings";
import CardSupport from "../views/cards/CardSupport";
import {Toaster} from "react-hot-toast"

const Dashboard = () => {
  return (
    <ApexChartWrapper>
      <Toaster/>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Typography variant='h5'>
            <Link href='#' target='_blank'>
              Inicio
            </Link>
          </Typography>
          <Typography variant='body2'>Todo sobre la aplicación</Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <CardNavigationCenter />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CardHorizontalRatings />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CardSupport/>
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
