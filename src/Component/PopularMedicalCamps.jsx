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
import useAuth from '../Hook/useAuth';
import { useQuery } from '@tanstack/react-query';
import axoispublic from '../Hook/AxoissecurePublic';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
const PopularMedicalCamps = () => {
 
// 

const { user, loading } = useAuth()

console.log(user?.email)
const { data: popularcamp, isLoading } = useQuery({
 queryKey: ['popular',user?.email],
 
 queryFn: async () =>  {return await axoispublic('/show-home')},

 
})
console.log(popularcamp)


    return (
      
       <>
        <SectionTitle title={' Insights into Successful and Popular Medical Camps'} heading={'Popular Medical Camps'}></SectionTitle>
        
        <Container maxWidth="lg">
        <Box sx={{ width: '100%', my:10 }}>
            <Grid   data-aos="fade-up"
     data-aos-duration="3000" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 0 }}>
             
                  {
                    popularcamp?.data?.map(camp =>
                    
                    <Grid sx={{mt:2 , px:1}} key={camp?._id} item xs={12} sm={2} md={3} lg={4} 
                    
                    style={{

                      
                      // display: 'flex',
                      // justifyContent: 'center',
                      // alignItems: 'center'
                  }}
                    
                    >
                        <Card sx={{maxHeight:500,maxWidth:500,}}>
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
                               <Typography style={{display:'flex',justifyItems:'center'}} gutterBottom variant="h6" component="div">
                               ${camp?.fees}
                               <Button sx={{ml:24}} variant="outlined">join {camp?.count}</Button>
                               </Typography>
                              </Grid>
                               <Typography variant="body2" color="text.secondary">
                               <LocalHospitalIcon/>  {camp?.services}
                               </Typography>

                               <Typography sx={{mt:2}} variant="body2" color="text.secondary">
                               <PersonIcon/>  {camp?.professional}
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
                               <Link to={`/camp-details/${camp?._id}`}>  <Button variant="contained">Details</Button></Link>
                               </Typography>

                               <Typography sx={{mt:2}} variant="body2" color="text.secondary">
                               
                               </Typography>
                             </CardContent>
                           
                             <CardActions >

                              
                         
                             </CardActions>
                           </Card>
                         </Grid>  )
                  }
                </Grid>
               
           
        </Box>

     
     <Link to={'/avaliblecamps'}>        
     <Button variant="contained" >
  SEE MORE CAMP <ArrowForwardIcon/>
</Button></Link>
        </Container>
        </>
         );

  
};

export default PopularMedicalCamps;


 