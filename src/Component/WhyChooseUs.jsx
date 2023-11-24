import React from 'react';
import { Container ,Grid,Box} from '@mui/material'
import SectionTitle from '../Shared/SectionTitle';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import CellTowerIcon from '@mui/icons-material/CellTower';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const WhyChooseUs = () => {
    return (

        <>
      <SectionTitle  title={'Comprehensive Healthcare with a Community Focus'} heading={'Why Choose Us'}></SectionTitle>
      <Container maxWidth='lg'>

      <Box sx={{ width: '100%', my:10 }}>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 3 }}>

      <Grid sx={{mt:2}}  item xs={8} sm={2} md={3} lg={4}>

      <Card sx={{ minWidth: 275, }}>
      <CardContent style={{textAlign:'center'}}>
        <Typography sx={{ fontSize: 14,py:2, }} color="text.secondary" gutterBottom>

        <VolunteerActivismIcon sx={{fontSize:'2.5rem'}}/>

        </Typography>
      
        <Typography sx={{ mb: 1.5 , fontWeight: 'bold',fontSize:'1.5rem'}} color="text.secondary">
        Trust
        </Typography>
        <Typography sx={{fontWeight: 'medium',px:4}} variant="body2">
        We believe in fundamental honesty is the keystone of business.
    
        </Typography>

      </CardContent>
    
    </Card>

      </Grid>

{/* card2 */}

<Grid sx={{mt:2}}  item xs={8} sm={2} md={3} lg={4}>

      <Card sx={{ minWidth: 275, }}>
      <CardContent style={{textAlign:'center'}}>
        <Typography sx={{ fontSize: 14,py:2, }} color="text.secondary" gutterBottom>

        <ThumbUpIcon sx={{fontSize:'2.5rem'}}/>

        </Typography>
      
        <Typography sx={{ mb: 1.5 , fontWeight: 'bold',fontSize:'1.5rem'}} color="text.secondary">
        Strength
        </Typography>
        <Typography sx={{fontWeight: 'medium',px:4}} variant="body2">
        The strength of our company is different people with different perspective.
        </Typography>

      </CardContent>
    
    </Card>

      </Grid>


      {/* card3 */}


      <Grid sx={{mt:2}}  item xs={8} sm={2} md={3} lg={4}>

      <Card sx={{ minWidth: 275, }}>
      <CardContent style={{textAlign:'center'}}>
        <Typography sx={{ fontSize: 14,py:2, }} color="text.secondary" gutterBottom>

        <CellTowerIcon sx={{fontSize:'2.5rem'}}/>

        </Typography>
      
        <Typography sx={{ mb: 1.5 , fontWeight: 'bold',fontSize:'1.5rem'}} color="text.secondary">
        Commitment
        </Typography>
        <Typography sx={{fontWeight: 'medium',px:4}} variant="body2">
        We have commitment to the people for provision of Quality medicine.
        </Typography>

      </CardContent>
    
    </Card>

      </Grid>

      </Grid>
             


      </Box>
      
      </Container>
      </>
    );
};

export default WhyChooseUs;