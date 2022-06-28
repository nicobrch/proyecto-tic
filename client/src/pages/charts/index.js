import React, {useEffect, useState} from 'react'
import {
  CChartBar,
  CChartLine,
} from '@coreui/react-chartjs'
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import TableStickyHeader from "../../views/tables/TableStickyHeader";
import {fetchRegistros} from "../../api";

const Charts = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchRegistros().then(d => setData(d));
    setTimeout(() => {
      setLoading(false);
    }, 150)
  }, [])

  if (loading === true){
    return (
      <p>Loading...</p>
    )
  }

  console.log(data);

  const random = () => Math.round(Math.random() * 100)

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>
          <Link href='#' target='_blank'>
            Registros
          </Link>
        </Typography>
        <Typography variant='body2'>Información respecto a los datos capturados por el dispositivo Arduino.</Typography>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <CardHeader title='Última semana' titleTypographyProps={{ variant: 'h6' }} />
          <CChartLine
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                {
                  label: 'Temperatura',
                  backgroundColor: 'rgba(220, 220, 220, 0.2)',
                  borderColor: 'rgba(220, 220, 220, 1)',
                  pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                  pointBorderColor: '#fff',
                  data: [random(), random(), random(), random(), random(), random(), random()],
                },
                {
                  label: 'Sonido',
                  backgroundColor: 'rgba(151, 187, 205, 0.2)',
                  borderColor: 'rgba(151, 187, 205, 1)',
                  pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                  pointBorderColor: '#fff',
                  data: [random(), random(), random(), random(), random(), random(), random()],
                },
              ],
            }}
          />
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <CardHeader title='Promedio de las últimas horas' titleTypographyProps={{ variant: 'h6' }} />
          <CChartBar
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                {
                  label: 'Temperatura',
                  backgroundColor: '#f87979',
                  data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                },
                {
                  label: 'Sonido',
                  backgroundColor: '#f87979',
                  data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                },
              ],
            }}
            labels="months"
          />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Todos los registros' titleTypographyProps={{ variant: 'h6' }} />
          <TableStickyHeader data={data}/>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Charts
