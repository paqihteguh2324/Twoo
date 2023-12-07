import { Grid, Box, Typography } from "@mui/material";

const background = [
    {
        instansi: "Politeknik Negeri Bandung",
        role: "D3 Teknik Informatika",
    },
    {
        instansi: "PT Padepokan Tujuh Sembilan",
        role: "Software Developer",
    },
    {
        instansi: "FreeLance",
        role: "Software Developer",
    }
]

export default function Background() {
    return (
        <Grid container spacing={2} height={"100vh"}>
            <Grid md={6} xs={12} display={"flex"} alignItems={"center"} flexDirection={"column"} alignContent={"center"} justifyContent={"center"}>
                <Typography variant="h3" sx={{ color: "#eeea", WebkitTextStroke: "2 px blue", textShadow: "1px 1px 2px #2cd0e6", textAlign: "center" }} >A Quick <br /> Background</Typography>
            </Grid>
            <Grid md={6} xs={12} display={"flex"} alignItems={"center"} flexDirection={"column"} justifyContent={"center"} >
                {background.map((item, index) => (
                    <Grid container key={index} spacing={1}>
                        <Grid item xs={2} justifyContent={"center"} marginY={2} padding={1} >
                            <Typography variant="h5" sx={{ color: "#eeea", WebkitTextStroke: "2 px blue", border:"3px solid #032f5c", textShadow: "1px 1px 2px #0ba3b8", textAlign: "center", width:"fit-content", padding:"5px", borderRadius:"20%"}} >{index + 1}</Typography>
                        </Grid>
                        <Grid item xs={10}>
                    <Box flexDirection={"column"} alignContent={"space-between"} justifyContent={"center"} sx={{ display: "flex", height: "fit-content", width:"80%", border: "5px solid #032f5c" }} marginY={2} padding={1} >
                        <Grid xs={12}>
                            <Typography variant="h5" sx={{ color: "#eeea", WebkitTextStroke: "2 px blue", textShadow: "1px 1px 2px #0ba3b8", textAlign: "left" }} >{item.instansi}</Typography>
                        </Grid>
                        <Grid xs={12}>
                            <Typography variant="h6" sx={{ color: "#eeea", WebkitTextStroke: "2 px blue", textShadow: "1px 1px 2px #0ba3b8", textAlign: "left" }} >{item.role}</Typography>
                        </Grid>
                    </Box>
                    </Grid>
                        </Grid>
                ))
                }
            </Grid>
        </Grid>
    )
}