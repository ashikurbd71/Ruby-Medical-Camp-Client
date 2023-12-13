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
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Groups2Icon from '@mui/icons-material/Groups2';
import PinDropIcon from '@mui/icons-material/PinDrop';
import axoispublic from '../Hook/AxoissecurePublic';
import useAuth from '../Hook/useAuth';
import { useQuery } from '@tanstack/react-query';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { Link } from 'react-router-dom';
const UpcomingCamp = () => {
 

  const { user, loading } = useAuth()

     
     const { data: upcoming, isLoading,refetch } = useQuery({
      queryKey: ['upcoming',user?.email],
      // enabled: !loading && !!user?.email,
      queryFn: async () =>  {return await axoispublic('/all-upcamingcamp')},
     
      
    })
 console.log(upcoming)

    return (
      
       <>
        <SectionTitle title={' Discover Tomorrows Path to Health Today'} heading={'Upcoming Camps'}></SectionTitle>
        
        <Container maxWidth="lg">
        <Box  data-aos="fade-up"
     data-aos-duration="3000" sx={{ width: '100%', my:10 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 0 }}>
             
                  {
                    upcoming?.data?.map(camp =>
                    <Grid sx={{mt:2,px:1}} key={camp?.title} item xs={12} sm={2} md={3} lg={4}
                    >
                        <Card sx={{maxHeight:500,maxWidth:500 ,}}>
                             <CardMedia
                               sx={{ height: 150 }}
                               image={camp?.image}
                               
                               
                               title="green iguana"
                             />
                             <CardContent>
                              <Grid>
                              <Typography gutterBottom sx={{fontWeight:700}} variant="h6" component="div">
                                 {camp?.campname}
                               </Typography >
                               <Typography gutterBottom variant="h6" sx={{textColor:'#1976D2'}} component="div">
                               ${camp?.fees}
                               </Typography>
                              </Grid>
                               <Typography variant="body2" color="text.secondary">
                               <LocalHospitalIcon/>  {camp?.services}
                               </Typography>

                               <Typography sx={{mt:2}} variant="body2" color="text.secondary">
                               <AccessAlarmIcon/>  {camp?.time}
                               </Typography>

                                <Typography sx={{mt:2}} variant="body2" color="text.secondary">
                               <PinDropIcon/>  {camp?.location}
                               </Typography>

                                          <Typography sx={{mt:2}} variant="body2" color="text.secondary">
                         <CalendarTodayIcon/> {camp?.date}
                               </Typography>

                               <Typography sx={{mt:2}} variant="body2" color="text.secondary">
                               <Groups2Icon/>  {camp?.audience}
                               </Typography>

                               <Typography sx={{mt:2}} variant="body2" color="text.secondary">
                               <Link to={`/upcamingcamp-details/${camp?._id}`}>  <Button variant="contained">Details</Button></Link>
                               </Typography>
                             </CardContent>
                             <CardActions sx={{mx:5}}>
                              
                             
                             </CardActions>

                              {/* <Link to={`/upcamingcamp-details/${camp?._id}`}>
                              <Button variant="contained" disableElevation>
                                     View Details
                                     </Button></Link> */}
                           </Card>
                         </Grid>  )
                  }
   
                </Grid>
               
   
        </Box>
         
 
        </Container>
        </>
         );

  
};

export default UpcomingCamp;


 