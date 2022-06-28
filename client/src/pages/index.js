// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import React from "react";

const Dashboard = () => {
  return (
    <ApexChartWrapper>
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
          <StatisticsCard/>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='$25.6k'
                icon={<Poll />}
                color='success'
                trendNumber='+42%'
                title='Total Profit'
                subtitle='Weekly Profit'
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='$78'
                title='Refunds'
                trend='negative'
                color='secondary'
                trendNumber='-15%'
                subtitle='Past Month'
                icon={<CurrencyUsd />}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
