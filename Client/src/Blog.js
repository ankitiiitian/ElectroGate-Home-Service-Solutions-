import React from 'react'
import "./Blog.css";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Pagination from '@material-ui/lab/Pagination';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2)), url('https://media.istockphoto.com/vectors/hand-drawn-india-skyline-vector-illustration-vector-id621577320?k=20&m=621577320&s=612x612&w=0&h=TftZMHvFeCNUIjZvjyuE5w9QxO_0xpDPvUt-SLaiNiE=')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em"
    }
  },
  hero1:{
      fontFamily:"Lucida Grande",
      fontSize: "3vmax",
  },
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
  author: {
    display: "flex"
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
    color: "white"
  }
}));

function Blog() {
  const classes = useStyles();

  return (
    <div className="App">
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" color="primary" >
            <h3 style={{ color: "blue", fontWeight: "bolder"}}>Blog</h3> 
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.hero}>
        <Box><p><i><h2 style={{fontWeight: "700", fontSize: "80px", color: "white"}}>Electro Guide</h2></i></p><p><Box style={{color: "white"}}className={classes.hero1}>By ElectroGate</Box></p></Box>
      </Box>
      
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle} style={{ color: "white"}}>
          Articles
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              
              <CardActionArea>
              <a href="https://www.bijlibachao.com/air-conditioner-ac/latest-air-conditioner-technologies-india-review-2.html">
                <CardMedia
                  className={classes.media}
                  image="https://controlledaircon.com.au/wp-content/uploads/2017/09/bigstock-Young-Asian-Male-Technician-Re-202685743-1080x675.jpg"
                  title="Contemplative Reptile"
                />
                </a>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    AC Technology
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Latest Air Conditioner Technologies in India – Review 2022
                  </Typography>
                </CardContent>
              </CardActionArea>
      
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Rishab Kumar
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      Jan 14, 2022
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <a href='https://www.bijlibachao.com/refrigerators/latest-refrigerator-technologies-india-review.html'>
                <CardMedia
                  className={classes.media}
                  image="https://gadgets360.com/static/v1/images/og_refrigerator.jpg"
                  title="Contemplative Reptile"
                />
                </a>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    New Refrigerator
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Refrigerators Price List in India
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Priya Kumar
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      Feb 14, 2022
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <a href='https://www.apple.com/in/newsroom/2021/10/apple-unveils-game-changing-macbook-pro/'>
                <CardMedia
                  className={classes.media}
                  image="https://9to5mac.com/wp-content/uploads/sites/6/2021/10/14-macbook-pro-vs-16-macbook-pro-vs-earlier-models.jpg?quality=82&strip=all"
                  title="Contemplative Reptile"
                />
                </a>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Macbook New Technologies
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Apple unveils game-changing MacBook Pro
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Sol smith
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      March 10, 2022
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
              <a href='https://www.lg.com/in/qned-tvs/2021/technology?cmpid=2022HQSEM_NanoCell-TV_IL_Google_Picture-Quality-8K_Generic-Upper_Exact_8K_t190732135216554_pc_EOL&utm_content=Picture-Quality-8K&utm_term=Generic&gclid=CjwKCAjw9LSSBhBsEiwAKtf0n_eRHcTHwb0frDoujM6SHm343b2eDRKM2RG4nQ_WaIZyMxllAGadcxoCQxsQAvD_BwE&gclsrc=aw.ds#iw_comp1621484513263'>
                <CardMedia
                  className={classes.media}
                  image="https://www.trustedreviews.com/wp-content/uploads/sites/54/2018/11/Samsung-Q80R-4K-QLED-920x749.jpg"
                  title="Contemplative Reptile"
                />
                </a>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Ultra 8k TVs
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    New Tech Comes in Era.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Guy Clemons
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      Feb 24, 2022
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Box style={{color: "white"}} my={4} className={classes.paginationContainer}>
          <Pagination style={{color: "white"}} count={10} />
        </Box>
      </Container>
    </div>
  );
}

export default Blog;