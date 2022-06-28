// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Thermometer from 'mdi-material-ui/Thermometer'
import VolumeHigh from 'mdi-material-ui/VolumeHigh'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import React, {useState, useEffect} from "react";
import {fetchLastRegistro} from "../../api";

const Dashboard = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchLastRegistro().then(d => setData(d));
    setTimeout(() => {
      setLoading(false);
    }, 150)
  }, [])

  if (loading === true){
    return (
      <p>Loading...</p>
    )
  }

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <StatisticsCard/>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats={data.data[0]['temperatura'] + '°'}
                icon={<Thermometer/>}
                color='success'
                title='Grados C°'
                subtitle={'Registro mas reciente a las: ' + data.data[0]['fecha'][11] + data.data[0]['fecha'][12]
              + data.data[0]['fecha'][13] + data.data[0]['fecha'][14] + data.data[0]['fecha'][15] + ' horas'}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats={data.data[0]['sonido'] === 'high' ? 'Está llorando!' : 'Está calmado'}
                title='Sonido'
                color='secondary'
                subtitle={'Registro mas reciente a las: ' + data.data[0]['fecha'][11] + data.data[0]['fecha'][12]
                  + data.data[0]['fecha'][13] + data.data[0]['fecha'][14] + data.data[0]['fecha'][15] + ' horas'}
                icon={<VolumeHigh />}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
