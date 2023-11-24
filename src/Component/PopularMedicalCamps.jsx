import React, { useEffect, useState } from 'react';
import SectionTitle from '../Shared/SectionTitle';
import { Container ,Grid,Box} from '@mui/material'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import { red } from '@mui/material/colors';
import PinDropIcon from '@mui/icons-material/PinDrop';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Groups2Icon from '@mui/icons-material/Groups2';
const PopularMedicalCamps = () => {
    const[data,setData] = useState()
  useEffect(() => {

  
  fetch('Campdata.json')
  .then(res => res.json())
  .then(data => setData(data))

  },[])

  console.log(data?.Image)
    return (
      
       <>
        <SectionTitle title={' Insights into Successful and Popular Medical Camps'} heading={'Popular Medical Camps'}></SectionTitle>
        
        <Container maxWidth="lg">
        <Box sx={{ width: '100%', my:10 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 3 }}>
             
                  {
                    data?.map(camp =><Grid sx={{mt:2}} key={camp?.title} item xs={8} sm={2} md={3} lg={4}>
                        <Card sx={{maxHeight:500}}>
                             <CardMedia
                               sx={{ height: 150 }}
                               image='https://ibb.co/XZGgfcg'
                               
                               
                               title="green iguana"
                             />
                             <CardContent>
                              <Grid>
                              <Typography gutterBottom sx={{fontWeight:700}} variant="h6" component="div">
                                 {camp?.CampName}
                               </Typography >
                               <Typography gutterBottom variant="h6" component="div">
                               {camp?.CampFees}
                               </Typography>
                              </Grid>
                               <Typography variant="body2" color="text.secondary">
                               <LocalHospitalIcon/>  {camp?.SpecializedServices}
                               </Typography>

                               <Typography sx={{mt:2}} variant="body2" color="text.secondary">
                               <PersonIcon/>  {camp?.HealthcareProfessionals}
                               </Typography>

                               <Typography sx={{mt:2}} variant="body2" color="text.secondary">
                               <PinDropIcon/>  {camp?.VenueLocation}
                               </Typography>
                        
                         <Typography sx={{mt:2}} variant="body2" color="text.secondary">
                         <CalendarTodayIcon/> {camp?.ScheduledDateTime}
                               </Typography>

                               <Typography sx={{mt:2}} variant="body2" color="text.secondary">
                               <Groups2Icon/>  {camp?.TargetAudience}
                               </Typography>

                        
                             </CardContent>
                             <CardActions >

                              
                         
                             </CardActions>
                           </Card>
                         </Grid>  )
                  }
                </Grid>
               
           
        </Box>
         
        </Container>
        </>
         );

  
};

export default PopularMedicalCamps;


 