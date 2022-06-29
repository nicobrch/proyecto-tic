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
import {parseFecha} from "../../@core/utils/parse-fecha";
import {Toaster} from "react-hot-toast";

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

  let fecha = parseFecha(data, 0);

  return (
    <ApexChartWrapper>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <StatisticsCard/>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats={data[0]['temperatura'] + '°'}
                icon={<Thermometer/>}
                color='success'
                title='Grados C°'
                subtitle={'Registro mas reciente a las: ' + fecha + ' horas'}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats={data[0]['sonido'] === 'high' ? 'Está llorando!' : 'Está calmado'}
                title='Sonido'
                color='secondary'
                subtitle={'Registro mas reciente a las: ' + fecha + ' horas'}
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
