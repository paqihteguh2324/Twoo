import { Avatar, Box, Grid, Typography } from "@mui/material"
import Layout from "@/components/Layout/Layout"


const LineItem: React.FC<{ item: string, variant: 'body1' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'caption' | 'button' | 'overline' | 'inherit', sx?: React.CSSProperties }> = ({ item, variant, sx={} }) => {
    return (
        <Grid item>
            <Typography variant={variant} sx={{ ...sx }}>{item}</Typography>
        </Grid>
    )
}

export default function Welcome() {
    return (
            <Grid container spacing={2} height={"100vh"}>
                <Grid md={6} xs={12} display={"flex"} alignItems={"center"} flexDirection={"column"} alignContent={"space-around"} justifyContent={"center"}>
                    <LineItem item="Hii Everyone, My Name is" variant="subtitle1" sx={{color: "#eeea", WebkitTextStroke:"2 px blue", textShadow:"1px 1px 2px #0ba3b8"}} />
                    <LineItem item="Paqih Teguh Maulana" variant="h3" sx={{color: "#eeea", WebkitTextStroke:"2 px blue", textShadow:"1px 1px 2px #2cd0e6"}} />
                    <LineItem item="I am a Software Developer" variant="h5" sx={{color: "#eeea", WebkitTextStroke:"2 px blue", textShadow:"1px 1px 2px #0ba3b8"}}  />
                </Grid>
                <Grid md={6} xs={12} >
                  <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", height: {md:"80vh", xs:"40vh"}, border:"5px solid #032f5c", margin:{md:12, xs:5}, borderRadius:{xs:"4px", md:"10%"}}} >
                    <Avatar src="/static/images/avatar/1.jpg" sx={{width:"100%", height:"100%", borderRadius:{xs:"4px", md:"10%"}}}/>
                    </Box>
                </Grid>
            </Grid>
    )
}
