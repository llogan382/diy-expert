import * as React from 'react';
import Box from '@mui/material/Box';
import Card, { CardProps } from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DiyCardHeader from './cardHeader';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

// const card = (
//   <React.Fragment>
//     <CardContent>
//       <Typography variant="h5" component="div">
//         be{bull}nev{bull}o{bull}lent
//       </Typography>
//       <Typography sx={{ mb: 1.5 }} color="text.secondary">
//         adjective
//       </Typography>
//       <Typography variant="body2">
//         well meaning and kindly.
//         <br />
//         {'"a benevolent smile"'}
//       </Typography>
//     </CardContent>
//     <CardActions>
//       <Button size="small">Learn More</Button>
//     </CardActions>
//   </React.Fragment>
// );

function WrappedCard(props: any){
    console.log(props)
    return(
        <React.Fragment>
        <CardContent>
          <Typography variant="h5" component="div">
        firstName: {props?.children?.firstName}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Username: {props?.children?.userName}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </React.Fragment>
    )
}
WrappedCard.muiName = 'CardContent';
export default function DiyCard({user}: any) {
    console.log(user)
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
    <WrappedCard>{user}</WrappedCard>
    <ul>
        <li></li>
    </ul>
        </Card>
    </Box>
  );
}
