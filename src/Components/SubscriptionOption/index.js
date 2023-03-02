import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import img1 from "../../Images/img-1.png";
import img2 from "../../Images/img-2.png";
import img3 from "../../Images/img-3.png";
import img4 from "../../Images/img-4.png";
import img5 from "../../Images/img-5.png";
import Whatsappicon from "../../Images/Whatsapp-icon.png";
import tickmark from "../../Images/tick-mark.png";
import "../../Style/Subscription.scss";
import "../../Style/Header.scss";
import "../../Style/Footer.scss";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ImageList from "@mui/material/ImageList";
import Header from "../Header";
import Footer from "../Footer";
import Avatar from "@mui/material/Avatar";


function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

function SubscriptionOption(props) {
 

  const breadcrumbs = [
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Home
    </Link>,
    <Typography key="3" color="text.primary">
      EDIC and Other Exams
    </Typography>,
  ];

  return (
    <Box>
      {" "}
      <Header/>
      {/* EDIC Section */}
      <Box className="EDIC-head-sec">
        <Box className="content_container">
          <Box>
            <Grid
              container
              direction="row"
              alignItems="center"
              className="head-grid-sec"
            >
              <Grid item>
                <Grid container direction="column">
                  <Grid item>
                    <Box className="head-breadcrumbs">
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
                        variant="h3"
                        className="EDIC-head-txt"
                        gutterBottom
                      >
                        EDIC and Other Exams
                      </Typography>
                      <Typography className="head-small-txt">
                        Prepare for various ICU exams, including EDIC, Exit
                        exam, Primary exam, Board Review, DM entrance exam
                        (India) Prepare for various ICU exams, including EDIC,
                        Exit exam, Primary exam, Board Review, DM entrance exam
                        (India) Prepare for various ICU exams, including EDIC,
                        Exit exam, Primary exam, Board Review, DM entrance exam
                        (India) Prepare for various ICU exams, including EDIC,
                        Exit exam, Primary exam, Board Review, DM entrance exam
                        (India) Prepare for various ICU exams, including EDIC,
                        Exit exam.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                {" "}
                <Card
                  sx={{ width: 281, height: 286 }}
                  className="right-gird-card"
                >
                  <CardContent className="card-sec">
                    <Typography
                      variant="h5"
                      component="Box"
                      className="card-button"
                    >
                      What's included?
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <Typography className="tick-mark-sec">
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
                        <Typography className="card-txt-sec"> 2500 MCQ</Typography>
                      </Box>
                    </Typography>
                    <Typography className="tick-mark-sec">
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
                        <Typography className="card-txt-sec">100 tests</Typography>
                      </Box>
                    </Typography>
                    <Typography className="tick-mark-sec">
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
                        <Typography className="card-txt-sec"> Immediate score</Typography>
                      </Box>
                    </Typography>
                    <Typography className="tick-mark-sec">
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
                        <Typography className="card-txt-sec"> Full Feedback</Typography>
                      </Box>
                    </Typography>
                    <Typography className="tick-mark-sec">
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
                        <Typography className="card-txt-sec">EDIC Mock Exams</Typography>
                      </Box>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      {/* EDIC Section Over */}
      {/* List Of Omnibus Section */}
      <Box className="content_container">
        <Box className="omnibus-sec">
          <Box>
            <Typography variant="h3" className="omnibus-txt" gutterBottom>
              List of Omnibus
            </Typography>
          </Box>
          <Box>
            <ImageList
              sx={{ width: 1088, height: 1283 }}
              className="img-gallery"
            >
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                    className="img-sec"
                  />
                  {/*  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`} */}
                  <ImageListItemBar
                    title={item.title}
                    position="below"
                    className="img-title-txt"
                  />
                  {/* subtitle={<span>by: {item.author}</span>} */}
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
          <Box className="whatsapp-icon-txt">
          <Stack>
            <Avatar alt="Remy Sharp" variant="square" src={Whatsappicon}
            className="side-whatsapp-icon" />
          </Stack>
          </Box>
        </Box>
      </Box>
      {/* List Of Omnibus Section Over */}
     
      <Footer/>
    </Box>
  );
}

const itemData = [
  {
    img: img1,
    title: "EDIC Omnibus",
  },
  {
    img: img2,
    title: "The Critical Care Primary",
  },
  {
    img: img3,
    title: "Critical Care Final Omnibus",
  },
  {
    img: img4,
    title: "The Anaesthetic Primary",
  },
  {
    img: img5,
    title: "Edic Omnibus + Learn-X",
  },
];

export default SubscriptionOption;
