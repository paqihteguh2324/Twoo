import Layout from "@/components/Layout/Layout"
import Welcome from "./section/Welcome"
import Background from "./section/Background";
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          // Menghilangkan scroll bar
          body: {
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          },
        },
      },
    },
  });

export default function Dashboard() {
    return (
        <ThemeProvider theme={theme}>
        <Layout>
            <Welcome />
            <Background />
        </Layout>
        </ThemeProvider>
    )
}
