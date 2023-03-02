import React from "react";
import "../../Style/SubscriptionNew.scss";
import "../../Style/Header.scss";
import "../../Style/Footer.scss";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Grid, TextField } from "@mui/material";
import heartimg from "../../Images/heart-img.png";
import timerimg from "../../Images/timer-img.png";
import tickmark from "../../Images/tick-mark.png";
import whitearrow from "../../Images/white-arrow.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { FaShoppingCart } from "react-icons/fa";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Whatsappicon from "../../Images/Whatsapp-icon.png";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Avatar from "@mui/material/Avatar";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

function Subscription(props) {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      EDIC and Other Exams
    </Link>,
    <Link
      underline="hover"
      key="3"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      CICM (AUS) Primary OMNIBUS
    </Link>,
  ];

  return (
    <Box>
      {" "}
      <Header />
      {/* CICM Section */}
      <Box className="CICM-head-sec">
        <Box className="content_container">
          <Box>
            <Grid
              container
              direction="row"
              alignItems="center"
              className="head-CICM-grid-sec"
            >
              <Grid item>
                <Grid container direction="column">
                  <Grid item>
                    <Box className="CICM-head-breadcrumbs">
                      <Stack spacing={2}>
                        <Breadcrumbs
                          separator={<NavigateNextIcon fontSize="small" />}
                          aria-label="breadcrumb"
                        >
                          {breadcrumbs}
                        </Breadcrumbs>
                      </Stack>
                    </Box>
                  </Grid>
                  <Grid item>
                    <Box>
                      <Typography
                        className="CICM-head-txt "
                        variant="h3"
                        gutterBottom
                      >
                        CICM (AUS) PRIMARY OMNIBUS
                      </Typography>
                      <Typography className="head-CICM-small-txt">
                        Over 1100 questions and cover several key topics for the
                        primary exam in Intensive Care. Extensive collection of
                        questions in Respiratory Physiology (150 Questions),
                        Physics, Procedures, Monitoring, Pharmacology,
                        interpretation of blood tests, ABG, etc. Please note
                        that{" "}
                        <span style={{ color: "#405CFB" }}>
                          gotheextramile.com
                        </span>{" "}
                        is NOT endorsed by the college of intensive care in any
                        country.
                      </Typography>
                    </Box>
                    <Grid item>
                      <Box className="cart-sec">
                        <Typography
                          variant="h3"
                          className="doller-rs-txt"
                          gutterBottom
                        >
                          AU $99.99
                        </Typography>
                        <Box>
                          <Button
                            variant="outlined"
                            startIcon={<FaShoppingCart />}
                            className="cart-btn-sec"
                          >
                            Add to Cart
                          </Button>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                {" "}
                <Card
                  sx={{ width: 281, height: 290 }}
                  className="CICM-right-gird-card"
                >
                  <CardContent className="CICM-card-sec">
                    <Typography
                      variant="h5"
                      component="Box"
                      className="CICM-card-button"
                    >
                      What's included?
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <Typography className="CICM-tick-mark-sec">
                      <Box>
                        <Stack>
                          <Avatar
                            alt="Remy Sharp"
                            variant="rounded"
                            src={tickmark}
                            className="blue-tick"
                          />
                        </Stack>
                      </Box>
                      <Box>
                        <Typography className="CICM-card-txt-sec"> 1100 MCQ</Typography>
                      </Box>
                    </Typography>
                    <Typography className="CICM-tick-mark-sec">
                      <Box>
                        <Stack>
                          <Avatar
                            alt="Remy Sharp"
                            variant="rounded"
                            src={tickmark}
                            className="blue-tick"
                          />
                        </Stack>
                      </Box>
                      <Box>
                        <Typography className="CICM-card-txt-sec">50 tests</Typography>
                      </Box>
                    </Typography>
                    <Typography className="CICM-tick-mark-sec">
                      <Box>
                        <Stack>
                          <Avatar
                            alt="Remy Sharp"
                            variant="rounded"
                            src={tickmark}
                            className="blue-tick"
                          />
                        </Stack>
                      </Box>
                      <Box>
                        <Typography className="CICM-card-txt-sec"> Immediate score</Typography>
                      </Box>
                    </Typography>
                    <Typography className="CICM-tick-mark-sec">
                      <Box>
                        <Stack>
                          <Avatar
                            alt="Remy Sharp"
                            variant="rounded"
                            src={tickmark}
                            className="blue-tick"
                          />
                        </Stack>
                      </Box>
                      <Box>
                        <Typography className="CICM-card-txt-sec"> Full Feedback</Typography>
                      </Box>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      {/* CICM Section Over */}
      {/* Header Bottom Section */}
      <Box className="head-bottom-sec">
        <Box className="content_container">
          <Box className="bottom-note-sec">
            <Box className="white-cart">
              <Stack>
                <Avatar alt="Remy Sharp" variant="rounded" src={timerimg} />
              </Stack>
            </Box>
            <Box>
              <Typography className="bottom-note-txt">
                Subscription to OMNIBUS provides you access to all of the
                following CHAPTERS. Each CHAPTER has multiple TESTS.
              </Typography>
              <Typography className="bottom-note-txt">
                Subscription valid for One Year or a maximum of 3 attempts for
                each test, whichever occurs earlier
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Header Bottom Section Over */}
      {/* Card section */}
      <Box className="content_container CICM-whatsapp-icon">
        <Grid
          container
          direction="row"
          className="heart-card-grid-sec first-grid-sec"
        >
          <Grid item sm={6}>
            <Box>
              <Card className="heart-card-sec">
                <CardMedia
                  sx={{ height: 140 }}
                  image={heartimg}
                  title="green iguana"
                  className="heart-img"
                />
                <CardContent className="heart-card-content-sec">
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="Box"
                    className="heart-card-head-txt"
                  >
                    Primary Exam - Acid Base And Electrolyte Abnormalities
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="heart-card-small-txt"
                  >
                    Physics, Chemistry, statistics, Mathematics and other weird
                    stuff Physics, Chemistry, statistics, Mathematics and other
                    weird stuff Physics, Chemistry, statistics, Mathematics and
                    other weird stuff
                  </Typography>
                </CardContent>
                <CardActions className="card-bottom-sec">
                  <Button className="heart-card-doller-txt">$39.99</Button>
                  <Button className="list-of-test-btn">
                    List of Tests
                    <Stack>
                      <Avatar
                        alt="Remy Sharp"
                        className="list-btn-arrow"
                        variant="square"
                        src={whitearrow}
                      />
                    </Stack>{" "}
                  </Button>
                </CardActions>
              </Card>
            </Box>
          </Grid>
          <Grid item sm={6}>
            <Box>
              <Card className="heart-card-sec">
                <CardMedia
                  sx={{ height: 140 }}
                  image={heartimg}
                  title="green iguana"
                  className="heart-img"
                />
                <CardContent className="heart-card-content-sec">
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="Box"
                    className="heart-card-head-txt"
                  >
                    Primary Exam - Acid Base And Electrolyte Abnormalities
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="heart-card-small-txt"
                  >
                    Physics, Chemistry, statistics, Mathematics and other weird
                    stuff Physics, Chemistry, statistics, Mathematics and other
                    weird stuff Physics, Chemistry, statistics, Mathematics and
                    other weird stuff
                  </Typography>
                </CardContent>
                <CardActions className="card-bottom-sec">
                  <Button className="heart-card-doller-txt">$39.99</Button>
                  <Button className="list-of-test-btn">
                    List of Tests
                    <Stack>
                      <Avatar
                        alt="Remy Sharp"
                        className="list-btn-arrow"
                        variant="square"
                        src={whitearrow}
                      />
                    </Stack>{" "}
                  </Button>
                </CardActions>
              </Card>
            </Box>
          </Grid>
        </Grid>
        <Grid container direction="row" className="heart-card-grid-sec">
          <Grid item sm={6}>
            <Box>
              <Card className="heart-card-sec">
                <CardMedia
                  sx={{ height: 140 }}
                  image={heartimg}
                  title="green iguana"
                  className="heart-img"
                />
                <CardContent className="heart-card-content-sec">
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="Box"
                    className="heart-card-head-txt"
                  >
                    Primary Exam - Acid Base And Electrolyte Abnormalities
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="heart-card-small-txt"
                  >
                    Physics, Chemistry, statistics, Mathematics and other weird
                    stuff Physics, Chemistry, statistics, Mathematics and other
                    weird stuff Physics, Chemistry, statistics, Mathematics and
                    other weird stuff
                  </Typography>
                </CardContent>
                <CardActions className="card-bottom-sec">
                  <Button className="heart-card-doller-txt">$39.99</Button>
                  <Button className="list-of-test-btn">
                    List of Tests
                    <Stack>
                      <Avatar
                        alt="Remy Sharp"
                        className="list-btn-arrow"
                        variant="square"
                        src={whitearrow}
                      />
                    </Stack>{" "}
                  </Button>
                </CardActions>
              </Card>
            </Box>
          </Grid>
          <Grid item sm={6}>
            <Box>
              <Card className="heart-card-sec">
                <CardMedia
                  sx={{ height: 140 }}
                  image={heartimg}
                  title="green iguana"
                  className="heart-img"
                />
                <CardContent className="heart-card-content-sec">
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="Box"
                    className="heart-card-head-txt"
                  >
                    Primary Exam - Acid Base And Electrolyte Abnormalities
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="heart-card-small-txt"
                  >
                    Physics, Chemistry, statistics, Mathematics and other weird
                    stuff Physics, Chemistry, statistics, Mathematics and other
                    weird stuff Physics, Chemistry, statistics, Mathematics and
                    other weird stuff
                  </Typography>
                </CardContent>
                <CardActions className="card-bottom-sec">
                  <Button className="heart-card-doller-txt">$39.99</Button>
                  <Button className="list-of-test-btn">
                    List of Tests
                    <Stack>
                      <Avatar
                        alt="Remy Sharp"
                        className="list-btn-arrow"
                        variant="square"
                        src={whitearrow}
                      />
                    </Stack>{" "}
                  </Button>
                </CardActions>
              </Card>
            </Box>
          </Grid>
        </Grid>
        <Grid container direction="row">
          <Grid item sm={6}>
            <Box>
              <Card className="heart-card-sec">
                <CardMedia
                  sx={{ height: 140 }}
                  image={heartimg}
                  title="green iguana"
                  className="heart-img"
                />
                <CardContent className="heart-card-content-sec">
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="Box"
                    className="heart-card-head-txt"
                  >
                    Primary Exam - Acid Base And Electrolyte Abnormalities
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="heart-card-small-txt"
                  >
                    Physics, Chemistry, statistics, Mathematics and other weird
                    stuff Physics, Chemistry, statistics, Mathematics and other
                    weird stuff Physics, Chemistry, statistics, Mathematics and
                    other weird stuff
                  </Typography>
                </CardContent>
                <CardActions className="card-bottom-sec">
                  <Button className="heart-card-doller-txt">$39.99</Button>
                  <Button className="list-of-test-btn">
                    List of Tests
                    <Stack>
                      <Avatar
                        alt="Remy Sharp"
                        className="list-btn-arrow"
                        variant="square"
                        src={whitearrow}
                      />
                    </Stack>{" "}
                  </Button>
                </CardActions>
              </Card>
            </Box>
          </Grid>
          <Grid item sm={6}>
            <Box>
              <Card className="heart-card-sec">
                <CardMedia
                  sx={{ height: 140 }}
                  image={heartimg}
                  title="green iguana"
                  className="heart-img"
                />
                <CardContent className="heart-card-content-sec">
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="Box"
                    className="heart-card-head-txt"
                  >
                    Primary Exam - Acid Base And Electrolyte Abnormalities
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="heart-card-small-txt"
                  >
                    Physics, Chemistry, statistics, Mathematics and other weird
                    stuff Physics, Chemistry, statistics, Mathematics and other
                    weird stuff Physics, Chemistry, statistics, Mathematics and
                    other weird stuff
                  </Typography>
                </CardContent>
                <CardActions className="card-bottom-sec">
                  <Button className="heart-card-doller-txt">$39.99</Button>
                  <Button className="list-of-test-btn">
                    List of Tests
                    <Stack>
                      <Avatar
                        alt="Remy Sharp"
                        className="list-btn-arrow"
                        variant="square"
                        src={whitearrow}
                      />
                    </Stack>{" "}
                  </Button>
                </CardActions>
              </Card>
            </Box>
          </Grid>
        </Grid>
        <Box className="CICM-whatsapp-icon-txt-home">
          <Stack>
            <Avatar alt="Remy Sharp" variant="square" src={Whatsappicon}
            className="side-whatsapp-icon" />
          </Stack>
        </Box>
      </Box>
      {/* Card section Over*/}
      <Footer />
    </Box>
  );
}

export default Subscription;
