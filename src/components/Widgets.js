import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import BookIcon from '@mui/icons-material/Book';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';

import profileImage from '../assets/images/profile.png'
import { Container } from '@mui/material';

const Widgets = () => {
  return (
    
    <div className='inline-container'>
        <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 125 }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                    0
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    Assignment
                </Typography>
                </CardContent>
                
                </Box>
                <CardMedia
                component="img"
                sx={{ width: 100 }}
                image={profileImage}
                alt="Project"
            />
        </Card>
        <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 125 }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                    0
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    Project
                </Typography>
                </CardContent>
                
                </Box>
                <CardMedia
                component="img"
                sx={{ width: 100 }}
                image={profileImage}
                alt="Project"
            />
        </Card>
        <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 125 }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                    0
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    Project
                </Typography>
                </CardContent>
                
                </Box>
                <CardMedia
                component="img"
                sx={{ width: 100 }}
                image={profileImage}
                alt="Project"
            />
        </Card>
        <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 125 }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                    0
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    Project
                </Typography>
                </CardContent>
                
                </Box>
                <CardMedia
                component="img"
                sx={{ width: 100 }}
                image={profileImage}
                alt="Project"
            />
        </Card>

    </div>

  )
}

export default Widgets