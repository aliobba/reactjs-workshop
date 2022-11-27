import React from "react";
import {
  Container,
  Grid,
  Box,
  Collapse,
  Alert,
  Typography,
  IconButton,
} from "@mui/material";
import huge from "../../assets/images/png/huge.png";
import GoogleIcon from "@mui/icons-material/Google";
import CloseIcon from "@mui/icons-material/Close";
import {
  Image,
  ImageBackdrop,
  ImageSrc,
  ImageButton,
  ImageMarked,
} from "../../components";
import { GoogleLogin } from "react-google-login";
import axiosInstance from "../../api/axiosInstance";
import { useCookies } from "react-cookie";

export default function Login() {
  const [cookies, setCookie] = useCookies(["access_token"]);
  const [open, setOpen] = React.useState(false);
  const googleAuth = () => {
    window.open(
        `http://localhost:5000/googleAuth/auth/google/callback`,
        "_self"
    );
    /* axiosInstance
      .get("googleAuth")
      .then(() => {
        window.open(
          `http://localhost:5000/googleAuth/auth/google/callback`,
          "_self"
        );
      })
      .catch(() => {}); */
  };

  return (
    <Container maxWidth="lg">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            minWidth: 300,
            width: "100%",
            justifyContent: "center",
          }}
        >
          <ImageButton
            focusRipple
            key={"Google"}
            style={{
              width: "30%",
            }}
            onClick={googleAuth}
          >
            <ImageSrc style={{ backgroundImage: `url(${huge})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {/* <GoogleLogin
                  clientId="93541029152-62o0qca0egrs7ic0jvjr0imm6qhkd7jm.apps.googleusercontent.com"
                  style={{ opacity: 1 }}
                  onSuccess={googleResponse}
                  onFailure={onFailure}
                /> */}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        </Box>
        <Collapse in={open}>
          <Alert
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            erreur authentification
          </Alert>
        </Collapse>
      </Grid>
    </Container>
  );
}
