// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Button from '@mui/material/Button'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

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
            <Typography variant='body2' sx={{ marginBottom: 4 }}>
              ● Una conexión estable a internet
            </Typography>
            <Button variant='contained' href="https://play.google.com/store/apps/details?id=com.pas.webcam">Play Store</Button>
          </TabPanel>
          <TabPanel value='2' sx={{ p: 0 }}>
            <Typography variant='h6' sx={{ marginBottom: 2 }}>
              Header Two
            </Typography>
            <Typography variant='body2' sx={{ marginBottom: 4 }}>
              Dragée chupa chups soufflé cheesecake jelly tootsie roll cupcake marzipan. Carrot cake sweet roll gummi
              bears caramels jelly beans.
            </Typography>
            <Button variant='contained'>Button Two</Button>
          </TabPanel>
          <TabPanel value='3' sx={{ p: 0 }}>
            <Typography variant='h6' sx={{ marginBottom: 2 }}>
              Header Three
            </Typography>
            <Typography variant='body2' sx={{ marginBottom: 4 }}>
              Icing cake macaroon macaroon jelly chocolate bar. Chupa chups dessert dessert soufflé chocolate bar
              jujubes gummi bears lollipop.
            </Typography>
            <Button variant='contained'>Button Three</Button>
          </TabPanel>
        </CardContent>
      </TabContext>
    </Card>
  )
}

export default CardNavigationCenter
