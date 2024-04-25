import { CardHeader, CardHeaderProps } from '@mui/material';


function WrappedCardHeader(props: CardHeaderProps){

    return(

        <CardHeader title="poop" />
        ) 
    }
    WrappedCardHeader.muiName = 'CardHeader';


export default function DiyCardHeader(){

    return(

        <CardHeader>
            hello
            </CardHeader>
    )

}