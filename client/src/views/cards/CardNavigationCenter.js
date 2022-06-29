// ** React Imports
import React, { useState } from 'react'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Button from '@mui/material/Button'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardMedia from "@mui/material/CardMedia";

const CardNavigationCenter = () => {
  // ** State
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Card>
      <TabContext value={value}>
        <TabList centered onChange={handleChange} aria-label='card navigation example'>
          <Tab value='1' label='Primer Paso' />
          <Tab value='2' label='Segundo Paso' />
          <Tab value='3' label='Tercer Paso' />
        </TabList>
        <CardContent sx={{ textAlign: 'center' }}>
          <TabPanel value='1' sx={{ p: 0 }}>
            <Typography variant='h6' sx={{ marginBottom: 2 }}>
              Descarga la aplicación IPCAM
            </Typography>
            <Typography variant='body2' sx={{ marginBottom: 2 }}>
              La aplicación IP Webcam permitirá establecer una señal de video desde tu teléfono móvil hacia una dirección HTTP,
              la cuál utilizarás posteriormente para conectar el servicio de Baby Cam.
              Los ajustes que recomendamos son:
            </Typography>
            <Typography variant='body2' sx={{ marginBottom: 1 }}>
              ● Utiliza siempre la cámara posterior
            </Typography>
            <Typography variant='body2' sx={{ marginBottom: 1 }}>
              ● Resolución de video 1280x720
            </Typography>
            <Typography variant='body2' sx={{ marginBottom: 1 }}>
              ● 25 Fotogramas por segundo
            </Typography>
            <Typography variant='body2' sx={{ marginBottom: 1 }}>
              ● Una conexión estable a internet
            </Typography>
            <Button sx={{ marginTop: "6px"}} variant='contained' href="https://play.google.com/store/apps/details?id=com.pas.webcam">Descargar en Play Store</Button>
            <Button sx={{ marginLeft: "15px", marginTop: "6px"}} variant='contained' href="https://apps.apple.com/us/app/droidcam-webcam-obs-camera/id1510258102">Alternativa App Store</Button>
          </TabPanel>
          <TabPanel value='2' sx={{ p: 0 }}>
            <Typography variant='h6' sx={{ marginBottom: 2 }}>
              Iniciar servidor IPCAM
            </Typography>
            <Typography variant='body2' sx={{ marginBottom: 1 }}>
              Dirígete al final de la aplicación y apreta el botón "Iniciar Servidor" y otorga permisos a la aplicación.
            </Typography>
            <Typography variant='body2' sx={{ marginBottom: 4 }}>
              Una vez inicies tu servidor IPCAM, te aparecerá una interfaz como la siguiente:
            </Typography>
            <CardMedia sx={{ marginBottom: 4}}
              component="img"
              image="/images/ipcam-ip.jpg"
              alt="Ejemplo"
            />
            <Typography variant='body2' sx={{ marginBottom: 4 }}>
              Como te podrás dar cuenta, aparecé una dirección HTTP "http://10.123.198.175:8080". Guarda esta
              dirección para luego utilizarla en nuestro servicio.
            </Typography>
          </TabPanel>
          <TabPanel value='3' sx={{ p: 0 }}>
            <Typography variant='h6' sx={{ marginBottom: 2 }}>
              Tercer Paso
            </Typography>
            <Typography variant='body2' sx={{ marginBottom: 2 }}>
              Ahora que ya tienes la dirección HTTP del servidor IPCAM, ingrésala en nuestra página de "Reproductor",
              agregándole "/video" al final. Utilizando la dirección anterior como ejemplo, quedaría:
            </Typography>
            <Typography variant='body2' sx={{ marginBottom: 2 }}>
              http://10.123.198.175:8080/video
            </Typography>
            <Typography variant='body2' sx={{ marginBottom: 2 }}>
              Asegúrate de:
            </Typography>
            <Typography variant='body2' sx={{ marginBottom: 1 }}>
              ● Escribir bien la dirección
            </Typography>
            <Typography variant='body2' sx={{ marginBottom: 1 }}>
              ● Mantener el teléfono móvil con carga
            </Typography>
            <Typography variant='body2' sx={{ marginBottom: 4 }}>
              ● Tener todos tus dispositivos conectados a la misma red WiFi
            </Typography>
            <Button variant='contained' href="/player">Probar reproductor</Button>
          </TabPanel>
        </CardContent>
      </TabContext>
    </Card>
  )
}

export default CardNavigationCenter
