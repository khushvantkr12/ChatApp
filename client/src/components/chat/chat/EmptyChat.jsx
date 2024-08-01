import img from "../../../image/native-desktop-hero_a22b846aefcd2de817624e95873b2064.png";
import {Box,Typography,styled,Button} from "@mui/material";

const Component=styled(Box)`
    background:#f8f9fa;
    padding:30px 0;
    text-align:center;
    height:100vh `

const Container=styled(Box)`
     padding:0 200px;`

const Image=styled('img')({
    width:300,
    marginTop:60
})
const Title=styled(Typography)`
     font-size:28px;
     margin:25px 0 10px 0;
     font-weight:420;
     font-family:inherit;
     color:#41525d;
     white-space: nowrap;
     overflow: hidden;
     width:460px;
     `
     const SubTitle=styled(Typography)`
     font-size:15px;
     font-weight:400;
     font-family:inherit;
     color:#667781;
     
     `
     const SubTitled=styled(Typography)`
     font-size:15px;
     font-weight:400;
     font-family:inherit;
     color:#667781;
     margin-top:60px;
     `
const EmptyChat= () => {
    //const navigate=Navigate();
    return(
        <Component>
            <Container>
            <Image src={img} alt=""/>
            <Title>Download Whatsapp from Windows</Title>
            <SubTitle>Make calls,share your screen and get faster experience when you download Windows app.  </SubTitle>
         <br></br>

         <a href="https://apps.microsoft.com/detail/9NKSQGP7F2NH?hl=en-US&gl=US" target="_blank" rel="noreferrer">    
    <Button  variant="contained" color="success">Get the app</Button>
       </a>
       
       <SubTitled>🔒Your personal messages are end-to-end encrypted </SubTitled>
            </Container>
        </Component>
    )
}
export default EmptyChat;
