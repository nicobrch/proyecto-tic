import React, {useEffect, useState} from "react";

// ** MUI Imports
import CardMedia from '@mui/material/CardMedia'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import CardActions from "@mui/material/CardActions";

import toast from "react-hot-toast"
import {validUrl} from "../../@core/utils/valid-url";
import {validVideo} from "../../@core/utils/valid-video";

const StatisticsCard = () => {

  const [video, setVideo] = useState("/images/video.png");
  const [ipcam, setIpcam] = useState("");

  const onTextChange = (e) => {
    e.preventDefault();

    return setIpcam(e.target.value);
  }

  const handleSubmit = () => {
    if(ipcam === "" || ipcam === undefined){
      toast.error("No has ingresado ninguna dirección HTTP")

      return setVideo("/images/video.png");
    }
    if (!validUrl(ipcam)){
      toast.error("No es una dirección HTTP válida")

      return setVideo("/images/video.png");
    }
    if (!validVideo(ipcam)){
      toast.error("La dirección no contiene el formato /video")

      return setVideo("/images/video.png");
    }
    toast.success("Dirección valida!")

    return setVideo(ipcam);
  }

  return (
    <Card>
      <CardHeader
        title='Reproductor de video'
        subheader={
          <Typography variant='body2'>
            Ingresa la dirección IP de la IP-CAM para empezar a ver video en vivo.
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: '2rem !important',
            letterSpacing: '0.15px !important'
          }
        }}
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
        <CardMedia
          component="img"
          image={video}
          alt="Reproductor de Video"
        />
      </CardContent>
      <CardActions>
        <Grid container justifyContent="flex-end">
          <TextField
            id="outlined-basic"
            label="Dirección IP"
            variant="outlined"
            value={ipcam}
            size="small"
            placeholder="http://192.168.1.80:8080/video"
            onChange={(e) => (
              onTextChange(e)
            )}
          />
        </Grid>
        <Grid container justifyContent="flex-start">
          <Button variant="contained" onClick={() => (
            handleSubmit()
          )}>Actualizar Video</Button>
        </Grid>
      </CardActions>
    </Card>
  )
}

export default StatisticsCard
