import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CircularProgressWithLabel from './CircularProgressWithLabel';

export default function SideCard ()
{
    return (
        <Card>
            <CardHeader
                action={
                    <IconButton aria-label="settings">
                        <MoreHorizIcon />
                    </IconButton>
                }
                title=""
                subheader=""
            />
            <CardMedia
                component="img"
                height="194"
                image="/mountains.png"
                alt="Paella dish"
            />
            <CardContent sx={{alignContent: "center"}}>
                <div style={{display: 'flex',justifyContent: 'space-between'}}>
                    <div>
                        <Typography variant="h5">
                            Earning
                        </Typography>
                    </div>
                    <div>
                        <InfoOutlinedIcon />
                    </div>
                </div>
                <div style={{margin: 'auto',textAlign: 'center'}}>
                    <CircularProgressWithLabel value={76} />
                    <Typography variant="h3">
                        $26,256
                    </Typography>
                    <Typography variant="h6">
                        Earning this month
                    </Typography>
                </div>
            </CardContent>
        </Card >
    );
}
