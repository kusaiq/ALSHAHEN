import React ,{ useState, useMemo } from 'react';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { blue } from '@mui/material/colors';
// import LocalPhoneTwoToneIcon from '@mui/icons-material/LocalPhoneTwoTone';
import Typography from '@mui/material/Typography';
import { useTheme , createTheme, ThemeProvider } from '@mui/material/styles';
import CompanyImage from '../../Assest/images/CompanyImage.jpg'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';



const ColorModeContext = React.createContext({ toggleColorMode: () => {} });


function MyApp() {
  //This hook returns the theme object so it can be used inside a function component.
  const theme = useTheme();
  console.log(theme)
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        // display: 'flex',
        // width: '100%',
        // alignItems: 'center',
        // justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}

//copy write
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}





// on submit function
export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };


  // theme data 
  const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
          background: {
            default: blue[300],
            
          },
          }
        : null
            // palette values for dark mode
          ),
    },
  });
 //true for light
  const [mode, setMode] =useState('light');

  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode(( prevMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );

  // Update the theme only if the mode changes
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]); 

  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
    
      {/* <Switch checked={mode} onChange={() => setMode("dark")} /> */}
      <Grid container component="main"  xs={{height: '100vh' }} >
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://cdn.dribbble.com/users/788099/screenshots/7320102/media/dd827902eed2b3585bb321af22a39555.png?compress=1&resize=800x600)',
            // backgroundImage: 'url(https://cdn.dribbble.com/users/1597968/screenshots/7880521/media/c5505cf6b7ced7f6374e36aa9f7ff7e1.png)',
            // backgroundImage: 'url(https://cdn.dribbble.com/users/79449/screenshots/4643021/harbor_app_artwork_800x600.png?compress=1&resize=800x600)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : null,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
       
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
           

        <MyApp />
        
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}> */}
            <Avatar
            alt="CompanyImage"
            src= {CompanyImage}
            sx={{ width: 175, height: 175 }}
                >
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}