// react-router-domのインポート
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";

// 作成済みコンポーネントのインポート
import { Home } from "./components/Home";
import { Login } from "./components/Login";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #84fab0 30%, #8fd3f4 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 63,
    padding: "0 30px",
  },
});

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className="App">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar className={classes.root} position="static">
            <Toolbar>
              <Link to="/">
                <IconButton>
                  <HomeIcon />
                </IconButton>
              </Link>
              <Typography ml={2} variant="h6" sx={{ flexGrow: 1 }}>
                test app
              </Typography>
              <Button color="inherit" href="/login">
                Login
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
        <Routes>
          {/* exact をつけると完全一致になる */}
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
