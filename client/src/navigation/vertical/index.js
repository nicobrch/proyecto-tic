// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import VideoWireless from 'mdi-material-ui/VideoWireless'
import ChartLine from 'mdi-material-ui/ChartLine'
import Email from 'mdi-material-ui/Email'

const navigation = () => {
  return [
    {
      title: 'Inicio',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Reproductor',
      icon: VideoWireless,
      path: '/player'
    },
    {
      title: 'Gráficos',
      icon: ChartLine,
      path: '/charts'
    },
    {
      title: 'Contacto',
      icon: Email,
      path: '/contact'
    }
  ]
}

export default navigation
