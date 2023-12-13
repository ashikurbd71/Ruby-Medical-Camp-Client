import React from 'react';
import SectionTitle from '../Shared/SectionTitle';
import { Container ,Grid,Box} from '@mui/material'
import banner from '../assets/who-we-are.jpg'
import Typography from '@mui/material/Typography';
const WhoWeAre = () => {
    return (

        <>
        
        <SectionTitle title={'Empowering Communities through Compassionate Healthcare'} heading={'Who We Are'}></SectionTitle>
        
           <Container maxWidth='lg'>

            <Box sx={{my:10}}>

                <Grid data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                  <img src={banner} alt="" />
                </Grid>

               <Grid>
                <Typography sx={{my:3,   fontSize: '2rem' , borderBottom: 'solid',}}>
                INTRODUCTION
                </Typography>
               </Grid>

                <Grid  data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" >
                    <Typography sx={{fontWeight: 'light' }}>
                    The Hon'ble Chief Minister Shri Jyoti Basu inaugurated Ruby General Hospital on 25th April 1995. Mother Teresa opened the Cardiac Unit on 28th October 1995.

The motto of Ruby General Hospital is to give honest, caring, compassionate and economical care to the people of Eastern India. The consultants working at Ruby are the best with national repute. The quality of medical care is always monitored so that the patients are assured that medically necessary treatment is only being given to them. There is also a constant inflow of doctors from United States who bring the latest advances of treatment to the patients at Ruby Hospital.

Dr. Kamal K. Dutta, is also the Chairman cum Managing Director of Ruby General Hospital. He graduated from R.G. Kar Medical College in Calcutta and went to the United States in 1976. He is a Consultant Gynaecologist who is attached to the leading hospitals in New Jersey, USA. He was the Chairman of the Dept. of Obstetrics & Gynaecology at St. Mary's Hospital and also the Chairman at General Hospital Center in New Jersey, USA.

Dr. Dutta is a Diplomate of American Board of Obstetrics & Gynaecology and he was awarded the prestigious Fellowship of the American College of Surgeons and also the Fellowship of American College of Gynaecologists.

He has also been awarded the highest degree for Hospital Management in the United States.

He has written numerous medical articles and published a book named "A Simple Guide to Birth ControL"

He lives in Calcutta and New Jersey, with his wife Ruby and children Tanya, Tia and Sourav.
                    </Typography>
                </Grid>

            </Box>
          
           </Container>

        </>
      
    );
};

export default WhoWeAre;