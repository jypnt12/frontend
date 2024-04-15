import React, { useEffect, useState } from 'react'
// import { useStudentsContext } from '../../hooks/useStudentsContext';
// import { Grid, TextField, Typography, Button  } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import FormLabel from '@mui/material/FormLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/system';
import { MenuItem, Select } from '@mui/material';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));



const Profile = () => {



  const defaultTheme = createTheme();
    const user = JSON.parse(localStorage.getItem('user_details'))
    // const {students, dispatch} = useStudentsContext();
    const [error, setError] = useState(null)
    const [formData, setFormData] = useState({
      firstname: '',
      lastname: '',
      middlename: '',
      status: '',
      birthday: '',
      gender: '',
      nationality: '',
      user_id: '',
      barangay: '',
      municipality: '',
      province: '',
      postal_code :'',
      country : '',
    });

    useEffect(()=>{
        const fetchUsers = async ()=> {
          try
          {
            const response = await fetch('http://localhost:3001/api/user/personal-details/' + user.id )
            const json = await response.json()

            if (!response.ok) 
            {
              throw new Error('Login failed');
            }
            if(response.ok){
              //store the data to students state in useReducer
              // dispatch({type: 'SET_STUDENTS', payload: json[0]})
              console.log('found', json)
              
              setFormData({
                firstname: json[0].firstname,
                lastname: json[0].lastname,
                middlename: json[0].middlename,
                status: json[0].status,
                birthday: json[0].birthday,
                gender: json[0].gender,
                nationality: json[0].nationality,
                user_id: json[0].user_id,
                barangay: json[0].barangay,
                municipality: json[0].municipality,
                province: json[0].province,
                postal_code :json[0].postal_code,
                country : json[0].country,
              });
              
              setError(null);
            }
          }catch (error) {
            setError('Failed to fetch user details');
          }
        }
        fetchUsers();
      }, [])


    
      const handleSubmit = async(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const userData = {
          firstname: data.get('firstname'),
          lastname: data.get('lastname'),
          middlename: data.get('middlename'),
          status: data.get('status'),
          birthday: data.get('birthday'),
          gender: data.get('gender'),
          nationality: data.get('nationality'),
          user_id: user.id,
          barangay: data.get('barangay'),
          municipality: data.get('municipality'),
          province: data.get('province'),
          postal_code : data.get('postal_code'),
          country : data.get('country'),
        }
        console.log(userData)
        const response = await fetch('http://localhost:3001/api/user/personal-details', {
          method: 'POST',
          body: JSON.stringify(userData),
          headers: {
              'Content-Type':'application/json'
          }
        })

        const json = await response.json()

        if(!response.ok){
          setError(json.error)
        }
        if(response.ok){
          setError(null)
          console.log("personal details added", json)
          // dispatch({type: 'CREATE_STUDENT', payload:json})
          
        }

      };
    
      const handleChange = (event) => {
        console.log(formData.firstname)
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
      
      
  return (
    <ThemeProvider theme={defaultTheme}>
    <Container component="main" maxWidth="md">
      <CssBaseline />
       
      <Grid container spacing={3} component="form" noValidate onSubmit={handleSubmit}> 
        <FormGrid item xs={12} md={4}>
          <FormLabel htmlFor="firstname" required>
            First name
          </FormLabel>
          <OutlinedInput
            id="firstname"
            name="firstname"
            type="text"
            placeholder={formData.firstname ?'': 'Juan'}
            value={formData.firstname ? formData.firstname : "" }
            autoComplete="first name"
            required
          />
        </FormGrid>
        
        <FormGrid item xs={12} md={4}>
          <FormLabel htmlFor="middlename" required>
            Middle name
          </FormLabel>
          <OutlinedInput
            id="middlename"
            name="middlename"
            type="text"
            placeholder={formData.middlename ?'': 'Dela'}
            value={formData.middlename ? formData.middlename : '' }
            autoComplete="additional-name"
            required
          />
        </FormGrid>
        <FormGrid item xs={12} md={4}>
          <FormLabel htmlFor="lastname" required>
            Last name
          </FormLabel>
          <OutlinedInput
            id="lastname"
            name="lastname"
            type="text"
            placeholder={formData.lastname ?'': 'Cruz'}
            value={formData.lastname ? formData.lastname: '' }
            autoComplete="family-name"
            required
          />
        </FormGrid>
        <FormGrid item xs={12} md={3}>
          <FormLabel htmlFor="status" required>
            Civil status
          </FormLabel>
          <Select
            id="gender"
            name='gender'
            value={formData.status ? formData.status: 'S'}
          >
            <MenuItem value="S">Single</MenuItem>
            <MenuItem value="M">Maried</MenuItem>
          </Select>
        </FormGrid>
        <FormGrid item xs={12} md={3}>
          <FormLabel htmlFor="birthday" required>
            Birthdate
          </FormLabel>
          <TextField
            id="birthday"
            name="birthday"
            type="date"
            autoComplete="birth-date"
            required
          />
        </FormGrid>
        <FormGrid item xs={12} md={3}>
          <FormLabel htmlFor="gender" required>
            Gender
          </FormLabel>
          
          <Select
            id="gender"
            name='gender'
            value={formData.gender ? formData.gender: '-'}
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="-">Rather not say</MenuItem>
          </Select>
        </FormGrid>

        <FormGrid item xs={12} md={3}>
          <FormLabel htmlFor="nationality" required>
            Nationality
          </FormLabel>
          <Select
            id="nationality"
            name='nationality'
            value={formData.nationality ? formData.nationality: 'Filipino'}
          >
            <MenuItem value="Filipino">Filipino</MenuItem>
            <MenuItem value="Others">Others</MenuItem>
          </Select>
        </FormGrid>

        
        <FormGrid item xs={6}>
          <FormLabel htmlFor="barangay" required>
            Barangay
          </FormLabel>
          <OutlinedInput
            id="barangay"
            name="barangay"
            type="text"
            placeholder={formData.barangay ?'': 'Barangay'}
            value={formData.barangay ? formData.barangay: '' }
            autoComplete="Barangay"
            required
          />
        </FormGrid>
        <FormGrid item xs={6}>
          <FormLabel htmlFor="munipality" required>
          Munipality
          </FormLabel>
          <OutlinedInput
            id="munipality"
            name="munipality"
            type="text"
            placeholder={formData.municipality ?'': 'Municipality'}
            value={formData.municipality ? formData.municipality: '' }
            autoComplete="munipality"
            required
          />
        </FormGrid>
        <FormGrid item xs={6}>
          <FormLabel htmlFor="province" required>
          Province
          </FormLabel>
          <OutlinedInput
            id="province"
            name="province"
            type="text"
            placeholder={formData.province ?'': 'Province'}
            value={formData.province ? formData.province: '' }
            autoComplete="Province"
            required
          />
        </FormGrid>
        <FormGrid item xs={3}>
          <FormLabel htmlFor="zip" required>
            Zip / Postal code
          </FormLabel>
          <OutlinedInput
            id="zip"
            name="zip"
            type="text"
            placeholder={formData.postal_code ?'': '1234'}
            value={formData.postal_code ? formData.postal_code: '' }
            autoComplete="postal-code"
            required
          />
        </FormGrid>
        <FormGrid item xs={3}>
          <FormLabel htmlFor="country" required>
            Country
          </FormLabel>
          <OutlinedInput
            id="country"
            name="country"
            type="country"
            placeholder={formData.country ?'': 'Country'}
            value={formData.country ? formData.country: '' }
            autoComplete="Country"
            required
          />
        </FormGrid>
        <FormGrid item xs={12}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            >
            Save
          </Button>
        </FormGrid>
      </Grid>

      
      </Container>
    </ThemeProvider>
  )
}

export default Profile