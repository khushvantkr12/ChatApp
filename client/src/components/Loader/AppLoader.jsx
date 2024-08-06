import { CircularProgress } from "@mui/material"

const AppLoader = () => {
    return (
        <div style={{display:"flex",justifyContent:"center",marginTop:"1rem"}}>
        <CircularProgress />
        </div>
    )
}

export default AppLoader;