// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Demo Components Imports
import FormLayoutsIcons from 'src/views/form-layouts/FormLayoutsBasic'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'
import FormLayoutsSeparator from "../../views/form-layouts/FormLayoutsSeparator";
import FormLayoutsBasic from "src/views/form-layouts/FormLayoutsBasic";

const Contact = () => {
  return (
    <DatePickerWrapper>
      <Grid container spacing={6} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Grid item xs={12} md={6}>
          <FormLayoutsBasic />
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default Contact
