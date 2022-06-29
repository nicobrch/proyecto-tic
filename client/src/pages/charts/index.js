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
import {parseFecha, parseWeek} from "../../@core/utils/parse-fecha";
import {fetchRegistros, fetchWeekRegistros} from "../../api";

const Charts = () => {

  const [data, setData] = useState(null);
  const [weekData, setWeekData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchRegistros().then(d => setData(d));
    fetchWeekRegistros().then(w => setWeekData(w));
    setTimeout(() => {
      setLoading(false);
    }, 150)
  }, [])

  if (loading === true){
    return (
      <p>Loading...</p>
    )
  }

  let colLineas = [];
  let dataTemp = [];
  for (let i=6; i>=0; i--){
    colLineas.push(parseFecha(data, i));
    dataTemp.push(data[i]['temperatura']);
  }

  let colBarras = [];
  let weekTemp = [];
  for (let i=6; i>=0; i--){
    colBarras.push(parseWeek(weekData, i));
    weekTemp.push(weekData[i]['temperatura']);
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>
          <Link href='#' target='_blank'>
            Registros
          </Link>
        </Typography>
        <Typography variant='body2'>Información respecto a los datos capturados por el dispositivo Baby Cam.</Typography>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <CardHeader title='Últimos registros' titleTypographyProps={{ variant: 'h6' }} />
          <CChartLine
            data={{
              labels: colLineas,
              datasets: [
                {
                  label: 'Temperatura',
                  backgroundColor: 'rgba(220, 220, 220, 0.2)',
                  borderColor: 'rgba(38, 138, 189, 1)',
                  pointBackgroundColor: 'rgba(38, 138, 189, 1)',
                  pointBorderColor: '#fff',
                  data: dataTemp,
                }
              ]
            }}
          />
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <CardHeader title='Promedio de la última semana' titleTypographyProps={{ variant: 'h6' }} />
          <CChartBar
            data={{
              labels: colBarras,
              datasets: [
                {
                  label: 'Temperatura',
                  backgroundColor: '#f87979',
                  data: weekTemp,
                }
              ],
            }}
            labels="semanas"
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
