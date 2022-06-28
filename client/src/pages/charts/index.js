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
import {parseFecha} from "../../@core/utils/parse-fecha";
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

  let colLineas = [];
  let dataTemp = [];
  const largoLinea = data.length-7;
  for (let i=0; i<7; i++){
    colLineas.push(parseFecha(data, largoLinea+i));
    dataTemp.push(data[largoLinea+i]['temperatura']);
  }

  console.log(dataTemp);

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
          <CardHeader title='Últimas horas' titleTypographyProps={{ variant: 'h6' }} />
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
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                {
                  label: 'Temperatura',
                  backgroundColor: '#f87979',
                  data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                }
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
