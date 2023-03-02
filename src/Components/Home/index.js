import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "../../Style/Home.scss";
import "../../Style/Header.scss";
import "../../Style/Footer.scss";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import pluscircle from "../../Images/plus-circle.png";
import Groupicon from "../../Images/Group-icon.png";
import mapshield from "../../Images/map-shield.png";
import sliderImg from "../../Images/slider-img.png";
import appstore from "../../Images/app-store.png";
import drimg from "../../Images/dr-card-img.png";
import stars from "../../Images/stars.png";
import card1 from "../../Images/card-1.png";
import card2 from "../../Images/card-2.png";
import card3 from "../../Images/card-3.png";
import card4 from "../../Images/card-4.png";
import WhatsApp from "../../Images/WhatsApp.png";
import arrow from "../../Images/arrow.png";
import qrcode from "../../Images/qr-code.png";
import Whatsappicon from "../../Images/Whatsapp-icon.png";
import googleplay from "../../Images/google-play.png";
import phone from "../../Images/phone.png";
import AppIdea from "../../Images/App-Idea.png";
import { Grid, Stack } from "@mui/material";
import { FaRegPlayCircle } from "react-icons/fa";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  const cardSlider = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
  };

  return (
    <Box>
      <Header />

      {/* Slider Section */}
      <Box>
        <Slider {...settings} className="head-slider">
          <Box className="slick-slider-head">
            <Box className="content_container">
              <Box>
                <Box className="slide-content">
                  <Box className="left-grid">
                    <Box className="left-grid-content">
                      <Typography
                        className="slider-header"
                        variant="h3"
                        gutterBottom
                      >
                        An Online platform for Multiple Choice Question in
                        Intensive Care Medicine
                      </Typography>
                      <Box className="btn-container">
                        <Button
                          variant="outlined"
                          startIcon={<FaRegPlayCircle />}
                          className="how-it-work-btn"
                        >
                          How it Works?
                        </Button>
                        <Button variant="outlined" className="sample-tests-btn">
                          Sample Tests
                        </Button>
                      </Box>
                      <Box className="group-icon">
                        {" "}
                        <Stack>
                          <Avatar
                            alt="Remy Sharp"
                            src={Groupicon}
                            variant="square"
                            className="slider-group-img"
                          />
                        </Stack>{" "}
                        <Stack>
                          <Avatar
                            alt="Remy Sharp"
                            src={pluscircle}
                            variant="rounded"
                            className="plus-icon"
                          />
                        </Stack>
                      </Box>
                      <Box className="breakcrumbs">
                        <Stack>
                          <Avatar
                            alt="Remy Sharp"
                            src={mapshield}
                            variant="rounded"
                            className="mapshield-img"
                          />
                        </Stack>
                        <Typography className="breacrumbs-content">
                          Trusted by over 1500 users from over 50 countries
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <Stack>
                      <Avatar
                        alt="Remy Sharp"
                        src={sliderImg}
                        variant="rounded"
                        className="slide-img"
                      />
                    </Stack>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="slick-slider slick-slider-head">
            <Box className="content_container">
              <Box>
                <Box className="slide-content">
                  <Box className="left-grid">
                    <Box className="left-grid-content">
                      <Typography
                        className="slider-header"
                        variant="h3"
                        gutterBottom
                      >
                        An Online platform for Multiple Choice Question in
                        Intensive Care Medicine
                      </Typography>
                      <Box className="btn-container">
                        <Button
                          variant="outlined"
                          startIcon={<FaRegPlayCircle />}
                          className="how-it-work-btn"
                        >
                          How it Works?
                        </Button>
                        <Button variant="outlined" className="sample-tests-btn">
                          Sample Tests
                        </Button>
                      </Box>
                      <Box className="group-icon">
                        <Stack>
                          <Avatar
                            alt="Remy Sharp"
                            src={Groupicon}
                            variant="square"
                            className="slider-group-img"
                          />
                        </Stack>{" "}
                        <Stack>
                          <Avatar
                            alt="Remy Sharp"
                            src={pluscircle}
                            variant="rounded"
                            className="plus-icon"
                          />
                        </Stack>
                      </Box>
                      <Box className="breakcrumbs">
                        <Stack>
                          <Avatar
                            alt="Remy Sharp"
                            src={mapshield}
                            variant="rounded"
                            className="mapshield-img"
                          />
                        </Stack>
                        <Typography className="breacrumbs-content">
                          Trusted by over 1500 users from over 50 countries
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <Stack>
                      <Avatar
                        alt="Remy Sharp"
                        src={sliderImg}
                        variant="rounded"
                        className="slide-img"
                      />
                    </Stack>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="slick-slider slick-slider-head">
            <Box className="content_container">
              <Box>
                <Box className="slide-content">
                  <Box className="left-grid">
                    <Box className="left-grid-content">
                      <Typography
                        className="slider-header"
                        variant="h3"
                        gutterBottom
                      >
                        An Online platform for Multiple Choice Question in
                        Intensive Care Medicine
                      </Typography>
                      <Box className="btn-container">
                        <Button
                          variant="outlined"
                          startIcon={<FaRegPlayCircle />}
                          className="how-it-work-btn"
                        >
                          How it Works?
                        </Button>
                        <Button variant="outlined" className="sample-tests-btn">
                          Sample Tests
                        </Button>
                      </Box>
                      <Box className="group-icon">
                        <Stack>
                          <Avatar
                            alt="Remy Sharp"
                            src={Groupicon}
                            variant="square"
                            className="slider-group-img"
                          />
                        </Stack>{" "}
                        <Stack>
                          <Avatar
                            alt="Remy Sharp"
                            src={pluscircle}
                            variant="rounded"
                            className="plus-icon"
                          />
                        </Stack>
                      </Box>
                      <Box className="breakcrumbs">
                        <Stack>
                          <Avatar
                            alt="Remy Sharp"
                            src={mapshield}
                            variant="rounded"
                            className="mapshield-img"
                          />
                        </Stack>
                        <Typography className="breacrumbs-content">
                          Trusted by over 1500 users from over 50 countries
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <Stack>
                      <Avatar
                        alt="Remy Sharp"
                        src={sliderImg}
                        variant="rounded"
                        className="slide-img"
                      />
                    </Stack>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="slick-slider slick-slider-head">
            <Box className="content_container">
              <Box>
                <Box className="slide-content">
                  <Box className="left-grid">
                    <Box className="left-grid-content">
                      <Typography
                        className="slider-header"
                        variant="h3"
                        gutterBottom
                      >
                        An Online platform for Multiple Choice Question in
                        Intensive Care Medicine
                      </Typography>
                      <Box className="btn-container">
                        <Button
                          variant="outlined"
                          startIcon={<FaRegPlayCircle />}
                          className="how-it-work-btn"
                        >
                          How it Works?
                        </Button>
                        <Button variant="outlined" className="sample-tests-btn">
                          Sample Tests
                        </Button>
                      </Box>
                      <Box className="group-icon">
                        <Stack>
                          <Avatar
                            alt="Remy Sharp"
                            src={Groupicon}
                            variant="square"
                            className="slider-group-img"
                          />
                        </Stack>{" "}
                        <Stack>
                          <Avatar
                            alt="Remy Sharp"
                            src={pluscircle}
                            variant="rounded"
                            className="plus-icon"
                          />
                        </Stack>
                      </Box>
                      <Box className="breakcrumbs">
                        <Stack>
                          <Avatar
                            alt="Remy Sharp"
                            src={mapshield}
                            variant="rounded"
                            className="mapshield-img"
                          />
                        </Stack>
                        <Typography className="breacrumbs-content">
                          Trusted by over 1500 users from over 50 countries
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <Stack>
                      <Avatar
                        alt="Remy Sharp"
                        src={sliderImg}
                        variant="rounded"
                        className="slide-img"
                      />
                    </Stack>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="slick-slider slick-slider-head">
            <Box className="content_container">
              <Box>
                <Box className="slide-content">
                  <Box className="left-grid">
                    <Box className="left-grid-content">
                      <Typography
                        className="slider-header"
                        variant="h3"
                        gutterBottom
                      >
                        An Online platform for Multiple Choice Question in
                        Intensive Care Medicine
                      </Typography>
                      <Box className="btn-container">
                        <Button
                          variant="outlined"
                          startIcon={<FaRegPlayCircle />}
                          className="how-it-work-btn"
                        >
                          How it Works?
                        </Button>
                        <Button variant="outlined" className="sample-tests-btn">
                          Sample Tests
                        </Button>
                      </Box>
                      <Box className="group-icon">
                        <Stack>
                          <Avatar
                            alt="Remy Sharp"
                            src={Groupicon}
                            variant="square"
                            className="slider-group-img"
                          />
                        </Stack>{" "}
                        <Stack>
                          <Avatar
                            alt="Remy Sharp"
                            src={pluscircle}
                            variant="rounded"
                            className="plus-icon"
                          />
                        </Stack>
                      </Box>
                      <Box className="breakcrumbs">
                        <Stack>
                          <Avatar
                            alt="Remy Sharp"
                            src={mapshield}
                            variant="rounded"
                            className="mapshield-img"
                          />
                        </Stack>
                        <Typography className="breacrumbs-content">
                          Trusted by over 1500 users from over 50 countries
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <Stack>
                      <Avatar
                        alt="Remy Sharp"
                        src={sliderImg}
                        variant="rounded"
                        className="slide-img"
                      />
                    </Stack>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Slider>
      </Box>
      {/* Slider Section Over */}

      {/* Download Our App Section */}
      <Box className="download-sec">
        <Box className="content_container download-app-sec">
          <Typography className="download-head" variant="h3" gutterBottom>
            Download Our App
          </Typography>
          <Box className="critical-care">
            <Stack>
              <Avatar alt="Remy Sharp" src={AppIdea} variant="rounded" />
            </Stack>
            <Typography className="critical-care-txt">Critical Care MCQ</Typography>
          </Box>
          <Box className="app-store">
            <Box>
              <Stack>
                <Avatar
                  alt="Remy Sharp"
                  src={googleplay}
                  variant="square"
                  className="googleplay-img"
                />
              </Stack>
            </Box>
            <Box>
              <Stack>
                <Avatar
                  alt="Remy Sharp"
                  src={appstore}
                  variant="square"
                  className="appstore-img"
                />
              </Stack>
            </Box>
          </Box>
          <Box>
            <Stack >
              <Avatar
                alt="Remy Sharp"
                src={phone}
                variant="square"
                className="phone"
              />
            </Stack>
          </Box>
          <Box className="whatsapp-icon-txt-home">
            <Stack>
              <Avatar
                alt="Remy Sharp"
                variant="square"
                src={Whatsappicon}
                className="side-whatsapp-icon"
              />
            </Stack>
          </Box>
        </Box>
      </Box>
      {/* Download Our App Section */}

      {/* About Us Section */}
      <Box className="content_container">
        <Box className="about-us-sec">
          <Typography className="aboutus-head" variant="h3" gutterBottom>
            About Us
          </Typography>
          <Typography className="child-txt first-child-txt">
            Go The Extra Mile (GTEM) is an online platform for practising
            multiple choice questions{" "}
            <span style={{ fontWeight: "bold", color: "black" }}>(MCQ)</span> in
            intensive care medicine.
          </Typography>
          <Typography className="child-txt">
            <span style={{ fontWeight: "bold", color: "black" }}>
              {" "}
              ORGANIZATION{" "}
            </span>
            - The site contains over
            <span style={{ fontWeight: "bold", color: "black" }}>
              {" "}
              1850 unique questions
            </span>
            . These include MCQ (With single or multiple answers), True-False
            and Matching the choices from two columns. The questions are
            packaged together in the form of{" "}
            <span style={{ fontWeight: "bold", color: "black" }}>TESTS</span>.
            The tests from related topics are bundled together in the form of
            <span style={{ fontWeight: "bold", color: "black" }}>
              {" "}
              CHAPTERS
            </span>
            . Several chapters are compiled to create an{" "}
            <span style={{ fontWeight: "bold", color: "black" }}>OMNIBUS</span>.
            [For example, tests on CRRT, Electrolyte imbalance and acid-base
            abnormalities are assembled together for form the Renal Chapter. A
            compilation of chapters – e.g. renal, cardiology, ICU procedure
            <Link href="#">read more</Link>
          </Typography>
        </Box>
      </Box>
      {/* About Us Section Over */}

      {/* SubScription Option Section */}
      <Box className="content_container">
        <Box className="subscription-sec">
          <Typography className="subscription-txt" variant="h3" gutterBottom>
            Subscription Options
          </Typography>
          <Grid container className="first-grid-sec">
            <Grid item sm={6}>
              <Card
                sx={{ maxWidth: 518, minHeight: 400 }}
                className="card-blue"
              >
                <Box>
                  <Stack>
                    <Avatar
                      alt="Remy Sharp"
                      variant="rounded"
                      src={card1}
                      className="blue-img-icon"
                    />
                  </Stack>
                </Box>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="Box"
                    className="card-header-txt"
                  >
                    EDIC and Other Exams
                  </Typography>
                  <Typography variant="body2" className="card-small-txt">
                    Over 2500 original MCQ, including 6 EDIC Mock Exams. 30
                    Questions in each test, with complete feedback at the end of
                    the test and instant marking. For exit exams in Intensive
                    Care like EDIC, FFICM (UK), DM Entrance and Exit Exams
                    (India) and others.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Card-2 */}
            <Grid item sm={6}>
              <Card
                sx={{ maxWidth: 518, minHeight: 400 }}
                className="card-green"
              >
                <Box>
                  <Stack>
                    <Avatar
                      alt="Remy Sharp"
                      variant="rounded"
                      src={card2}
                      className="blue-img-icon"
                    />
                  </Stack>
                </Box>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="Box"
                    className="card-header-txt"
                  >
                    Learn-X
                  </Typography>
                  <Typography variant="body2" className="card-small-txt">
                    Small, bite-size tests. 10 questions per test. Answer and
                    feedback immediately after each question, and again at the
                    end of the test. 220 Tests (Same questions as EDIC Omnibus).
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* Card-2 */}
          </Grid>

          {/* card-3 */}
          <Grid container className="second-grid-sec">
            <Grid item sm={6}>
              <Card
                sx={{ maxWidth: 518, minHeight: 400 }}
                className="card-orange"
              >
                <Box>
                  <Stack>
                    <Avatar
                      alt="Remy Sharp"
                      variant="rounded"
                      src={card3}
                      className="blue-img-icon"
                    />
                  </Stack>
                </Box>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="Box"
                    className="card-header-txt"
                  >
                    Orientation
                  </Typography>
                  <Typography variant="body2" className="card-small-txt">
                    For new ICU Trainees, starting a rotation in Cardiothoracic
                    ICU or a Neuro ICU.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* card-3 */}

            {/* Card-4 */}
            <Grid item sm={6}>
              <Card
                sx={{ maxWidth: 518, minHeight: 400 }}
                className="card-pink"
              >
                <Box>
                  <Stack>
                    <Avatar
                      alt="Remy Sharp"
                      variant="rounded"
                      src={card4}
                      className="blue-img-icon"
                    />
                  </Stack>
                </Box>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="Box"
                    className="card-header-txt"
                  >
                    Nursing
                  </Typography>
                  <Typography variant="body2" className="card-small-txt">
                    600 MCQ in Critical Care Nursing including cardiothoracic
                    critical care, mechanical ventilation, CRRT and ECMO.
                    Certificate of Completion upon completing every test.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* Card-4 */}
          </Grid>
        </Box>
      </Box>
      {/* SubScription Option Section Over */}

      {/* Testimonial Section */}

      <Box className="content_container">
        <Box className="testimonial-sec">
          <Box>
            <Typography
              gutterBottom
              variant="h3"
              className="testimonial-head-txt"
            >
              Testimonials
            </Typography>
          </Box>
          <Slider {...cardSlider} className="card-sec-slider">
            <Box>
              <Box className="card-slider-sec">
                {" "}
                <Card
                  sx={{
                    maxWidth: 410,
                    minHeight: 306,
                  }}
                  className="card-design"
                >
                  <Box className="dr-img-card-sec">
                    <Stack>
                      <Avatar
                        alt="Remy Sharp"
                        variant="rounded"
                        src={drimg}
                        className="dr-img"
                      />
                    </Stack>
                  </Box>
                  <Box>
                    <CardContent>
                      <Typography gutterBottom className="dr-name-txt">
                        Dr Sophie Kerr
                      </Typography>
                    </CardContent>
                  </Box>
                  <Box className="star-img-sec">
                    <Stack>
                      <Avatar
                        alt="Remy Sharp"
                        variant="square"
                        src={stars}
                        className="star-img"
                      />
                    </Stack>
                  </Box>
                  <CardContent>
                    <Typography sx={{ mb: 1.5 }} className="dr-card-small-txt">
                      Go the extra mile was unanimously suggested by many of my
                      seniors. The 30 questions/test was a comfortable way to
                      revise core topics, even after a rough day at work.
                      Explanations were appropriate and adequate for the
                      concerned topic. The WhatsApp study
                      <Link href="#">read more</Link>
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Box>

            <Box>
              <Box className="card-slider-sec">
                {" "}
                <Card
                  sx={{
                    maxWidth: 410,
                    minHeight: 306,
                  }}
                  className="card-design"
                >
                  <Box className="dr-img-card-sec">
                    <Stack>
                      <Avatar
                        alt="Remy Sharp"
                        variant="rounded"
                        src={drimg}
                        className="dr-img"
                      />
                    </Stack>
                  </Box>
                  <Box>
                    <CardContent>
                      <Typography gutterBottom className="dr-name-txt">
                        Dr Sophie Kerr
                      </Typography>
                    </CardContent>
                  </Box>
                  <Box className="star-img-sec">
                    <Stack>
                      <Avatar
                        alt="Remy Sharp"
                        variant="square"
                        src={stars}
                        className="star-img"
                      />
                    </Stack>
                  </Box>
                  <CardContent>
                    <Typography sx={{ mb: 1.5 }} className="dr-card-small-txt">
                      Go the extra mile was unanimously suggested by many of my
                      seniors. The 30 questions/test was a comfortable way to
                      revise core topics, even after a rough day at work.
                      Explanations were appropriate and adequate for the
                      concerned topic. The WhatsApp study
                      <Link href="#">read more</Link>
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Box>

            <Box>
              <Box className="card-slider-sec">
                {" "}
                <Card
                  sx={{
                    maxWidth: 410,
                    minHeight: 306,
                  }}
                  className="card-design"
                >
                  <Box className="dr-img-card-sec">
                    <Stack>
                      <Avatar
                        alt="Remy Sharp"
                        variant="rounded"
                        src={drimg}
                        className="dr-img"
                      />
                    </Stack>
                  </Box>
                  <Box>
                    <CardContent>
                      <Typography gutterBottom className="dr-name-txt">
                        Dr Sophie Kerr
                      </Typography>
                    </CardContent>
                  </Box>
                  <Box className="star-img-sec">
                    <Stack>
                      <Avatar
                        alt="Remy Sharp"
                        variant="square"
                        src={stars}
                        className="star-img"
                      />
                    </Stack>
                  </Box>
                  <CardContent>
                    <Typography sx={{ mb: 1.5 }} className="dr-card-small-txt">
                      Go the extra mile was unanimously suggested by many of my
                      seniors. The 30 questions/test was a comfortable way to
                      revise core topics, even after a rough day at work.
                      Explanations were appropriate and adequate for the
                      concerned topic. The WhatsApp study
                      <Link href="#">read more</Link>
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Box>

            <Box>
              <Box className="card-slider-sec">
                {" "}
                <Card
                  sx={{
                    maxWidth: 410,
                    minHeight: 306,
                  }}
                  className="card-design"
                >
                  <Box className="dr-img-card-sec">
                    <Stack>
                      <Avatar
                        alt="Remy Sharp"
                        variant="rounded"
                        src={drimg}
                        className="dr-img"
                      />
                    </Stack>
                  </Box>
                  <Box>
                    <CardContent>
                      <Typography gutterBottom className="dr-name-txt">
                        Dr Sophie Kerr
                      </Typography>
                    </CardContent>
                  </Box>
                  <Box className="star-img-sec">
                    <Stack>
                      <Avatar
                        alt="Remy Sharp"
                        variant="square"
                        src={stars}
                        className="star-img"
                      />
                    </Stack>
                  </Box>
                  <CardContent>
                    <Typography sx={{ mb: 1.5 }} className="dr-card-small-txt">
                      Go the extra mile was unanimously suggested by many of my
                      seniors. The 30 questions/test was a comfortable way to
                      revise core topics, even after a rough day at work.
                      Explanations were appropriate and adequate for the
                      concerned topic. The WhatsApp study
                      <Link href="#">read more</Link>
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Box>

            <Box>
              <Box className="card-slider-sec">
                {" "}
                <Card
                  sx={{
                    maxWidth: 410,
                    minHeight: 306,
                  }}
                  className="card-design"
                >
                  <Box className="dr-img-card-sec">
                    <Stack>
                      <Avatar
                        alt="Remy Sharp"
                        variant="rounded"
                        src={drimg}
                        className="dr-img"
                      />
                    </Stack>
                  </Box>
                  <Box>
                    <CardContent>
                      <Typography gutterBottom className="dr-name-txt">
                        Dr Sophie Kerr
                      </Typography>
                    </CardContent>
                  </Box>
                  <Box className="star-img-sec">
                    <Stack>
                      <Avatar
                        alt="Remy Sharp"
                        variant="square"
                        src={stars}
                        className="star-img"
                      />
                    </Stack>
                  </Box>
                  <CardContent>
                    <Typography sx={{ mb: 1.5 }} className="dr-card-small-txt">
                      Go the extra mile was unanimously suggested by many of my
                      seniors. The 30 questions/test was a comfortable way to
                      revise core topics, even after a rough day at work.
                      Explanations were appropriate and adequate for the
                      concerned topic. The WhatsApp study
                      <Link href="#">read more</Link>
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Box>

            <Box>
              <Box className="card-slider-sec">
                {" "}
                <Card
                  sx={{
                    maxWidth: 410,
                    minHeight: 306,
                  }}
                  className="card-design"
                >
                  <Box className="dr-img-card-sec">
                    <Stack>
                      <Avatar
                        alt="Remy Sharp"
                        variant="rounded"
                        src={drimg}
                        className="dr-img"
                      />
                    </Stack>
                  </Box>
                  <Box>
                    <CardContent>
                      <Typography gutterBottom className="dr-name-txt">
                        Dr Sophie Kerr
                      </Typography>
                    </CardContent>
                  </Box>
                  <Box className="star-img-sec">
                    <Stack>
                      <Avatar
                        alt="Remy Sharp"
                        variant="square"
                        src={stars}
                        className="star-img"
                      />
                    </Stack>
                  </Box>
                  <CardContent>
                    <Typography sx={{ mb: 1.5 }} className="dr-card-small-txt">
                      Go the extra mile was unanimously suggested by many of my
                      seniors. The 30 questions/test was a comfortable way to
                      revise core topics, even after a rough day at work.
                      Explanations were appropriate and adequate for the
                      concerned topic. The WhatsApp study
                      <Link href="#">read more</Link>
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Box>

            <Box>
              <Box className="card-slider-sec">
                {" "}
                <Card
                  sx={{
                    maxWidth: 410,
                    minHeight: 306,
                  }}
                  className="card-design"
                >
                  <Box className="dr-img-card-sec">
                    <Stack>
                      <Avatar
                        alt="Remy Sharp"
                        variant="rounded"
                        src={drimg}
                        className="dr-img"
                      />
                    </Stack>
                  </Box>
                  <Box>
                    <CardContent>
                      <Typography gutterBottom className="dr-name-txt">
                        Dr Sophie Kerr
                      </Typography>
                    </CardContent>
                  </Box>
                  <Box className="star-img-sec">
                    <Stack>
                      <Avatar
                        alt="Remy Sharp"
                        variant="square"
                        src={stars}
                        className="star-img"
                      />
                    </Stack>
                  </Box>
                  <CardContent>
                    <Typography sx={{ mb: 1.5 }} className="dr-card-small-txt">
                      Go the extra mile was unanimously suggested by many of my
                      seniors. The 30 questions/test was a comfortable way to
                      revise core topics, even after a rough day at work.
                      Explanations were appropriate and adequate for the
                      concerned topic. The WhatsApp study
                      <Link href="#">read more</Link>
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Box>

            <Box>
              <Box className="card-slider-sec">
                {" "}
                <Card
                  sx={{
                    maxWidth: 410,
                    minHeight: 306,
                  }}
                  className="card-design"
                >
                  <Box className="dr-img-card-sec">
                    <Stack>
                      <Avatar
                        alt="Remy Sharp"
                        variant="rounded"
                        src={drimg}
                        className="dr-img"
                      />
                    </Stack>
                  </Box>
                  <Box>
                    <CardContent>
                      <Typography gutterBottom className="dr-name-txt">
                        Dr Sophie Kerr
                      </Typography>
                    </CardContent>
                  </Box>
                  <Box className="star-img-sec">
                    <Stack>
                      <Avatar
                        alt="Remy Sharp"
                        variant="square"
                        src={stars}
                        className="star-img"
                      />
                    </Stack>
                  </Box>
                  <CardContent>
                    <Typography sx={{ mb: 1.5 }} className="dr-card-small-txt">
                      Go the extra mile was unanimously suggested by many of my
                      seniors. The 30 questions/test was a comfortable way to
                      revise core topics, even after a rough day at work.
                      Explanations were appropriate and adequate for the
                      concerned topic. The WhatsApp study
                      <Link href="#">read more</Link>
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Box>

            <Box>
              <Box className="card-slider-sec">
                {" "}
                <Card
                  sx={{
                    maxWidth: 410,
                    minHeight: 306,
                  }}
                  className="card-design"
                >
                  <Box className="dr-img-card-sec">
                    <Stack>
                      <Avatar
                        alt="Remy Sharp"
                        variant="rounded"
                        src={drimg}
                        className="dr-img"
                      />
                    </Stack>
                  </Box>
                  <Box>
                    <CardContent>
                      <Typography gutterBottom className="dr-name-txt">
                        Dr Sophie Kerr
                      </Typography>
                    </CardContent>
                  </Box>
                  <Box className="star-img-sec">
                    <Stack>
                      <Avatar
                        alt="Remy Sharp"
                        variant="square"
                        src={stars}
                        className="star-img"
                      />
                    </Stack>
                  </Box>
                  <CardContent>
                    <Typography sx={{ mb: 1.5 }} className="dr-card-small-txt">
                      Go the extra mile was unanimously suggested by many of my
                      seniors. The 30 questions/test was a comfortable way to
                      revise core topics, even after a rough day at work.
                      Explanations were appropriate and adequate for the
                      concerned topic. The WhatsApp study
                      <Link href="#">read more</Link>
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Box>

            <Box>
              <Box className="card-slider-sec">
                {" "}
                <Card
                  sx={{
                    maxWidth: 410,
                    minHeight: 306,
                  }}
                  className="card-design"
                >
                  <Box className="dr-img-card-sec">
                    <Stack>
                      <Avatar
                        alt="Remy Sharp"
                        variant="rounded"
                        src={drimg}
                        className="dr-img"
                      />
                    </Stack>
                  </Box>
                  <Box>
                    <CardContent>
                      <Typography gutterBottom className="dr-name-txt">
                        Dr Sophie Kerr
                      </Typography>
                    </CardContent>
                  </Box>
                  <Box className="star-img-sec">
                    <Stack>
                      <Avatar
                        alt="Remy Sharp"
                        variant="square"
                        src={stars}
                        className="star-img"
                      />
                    </Stack>
                  </Box>
                  <CardContent>
                    <Typography sx={{ mb: 1.5 }} className="dr-card-small-txt">
                      Go the extra mile was unanimously suggested by many of my
                      seniors. The 30 questions/test was a comfortable way to
                      revise core topics, even after a rough day at work.
                      Explanations were appropriate and adequate for the
                      concerned topic. The WhatsApp study
                      <Link href="#">read more</Link>
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Box>

            <Box>
              <Box className="card-slider-sec">
                {" "}
                <Card
                  sx={{
                    maxWidth: 410,
                    minHeight: 306,
                  }}
                  className="card-design"
                >
                  <Box className="dr-img-card-sec">
                    <Stack>
                      <Avatar
                        alt="Remy Sharp"
                        variant="rounded"
                        src={drimg}
                        className="dr-img"
                      />
                    </Stack>
                  </Box>
                  <Box>
                    <CardContent>
                      <Typography gutterBottom className="dr-name-txt">
                        Dr Sophie Kerr
                      </Typography>
                    </CardContent>
                  </Box>
                  <Box className="star-img-sec">
                    <Stack>
                      <Avatar
                        alt="Remy Sharp"
                        variant="square"
                        src={stars}
                        className="star-img"
                      />
                    </Stack>
                  </Box>
                  <CardContent>
                    <Typography sx={{ mb: 1.5 }} className="dr-card-small-txt">
                      Go the extra mile was unanimously suggested by many of my
                      seniors. The 30 questions/test was a comfortable way to
                      revise core topics, even after a rough day at work.
                      Explanations were appropriate and adequate for the
                      concerned topic. The WhatsApp study
                      <Link href="#">read more</Link>
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Box>

            <Box>
              <Box className="card-slider-sec">
                {" "}
                <Card
                  sx={{
                    maxWidth: 410,
                    minHeight: 306,
                  }}
                  className="card-design"
                >
                  <Box className="dr-img-card-sec">
                    <Stack>
                      <Avatar
                        alt="Remy Sharp"
                        variant="rounded"
                        src={drimg}
                        className="dr-img"
                      />
                    </Stack>
                  </Box>
                  <Box>
                    <CardContent>
                      <Typography gutterBottom className="dr-name-txt">
                        Dr Sophie Kerr
                      </Typography>
                    </CardContent>
                  </Box>
                  <Box className="star-img-sec">
                    <Stack>
                      <Avatar
                        alt="Remy Sharp"
                        variant="square"
                        src={stars}
                        className="star-img"
                      />
                    </Stack>
                  </Box>
                  <CardContent>
                    <Typography sx={{ mb: 1.5 }} className="dr-card-small-txt">
                      Go the extra mile was unanimously suggested by many of my
                      seniors. The 30 questions/test was a comfortable way to
                      revise core topics, even after a rough day at work.
                      Explanations were appropriate and adequate for the
                      concerned topic. The WhatsApp study
                      <Link href="#">read more</Link>
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Box>
            <Box>
              <Box className="card-slider-sec">
                {" "}
                <Card
                  sx={{
                    maxWidth: 410,
                    minHeight: 306,
                  }}
                  className="card-design"
                >
                  <Box className="dr-img-card-sec">
                    <Stack>
                      <Avatar
                        alt="Remy Sharp"
                        variant="rounded"
                        src={drimg}
                        className="dr-img"
                      />
                    </Stack>
                  </Box>
                  <Box>
                    <CardContent>
                      <Typography gutterBottom className="dr-name-txt">
                        Dr Sophie Kerr
                      </Typography>
                    </CardContent>
                  </Box>
                  <Box className="star-img-sec">
                    <Stack>
                      <Avatar
                        alt="Remy Sharp"
                        variant="square"
                        src={stars}
                        className="star-img"
                      />
                    </Stack>
                  </Box>
                  <CardContent>
                    <Typography sx={{ mb: 1.5 }} className="dr-card-small-txt">
                      Go the extra mile was unanimously suggested by many of my
                      seniors. The 30 questions/test was a comfortable way to
                      revise core topics, even after a rough day at work.
                      Explanations were appropriate and adequate for the
                      concerned topic. The WhatsApp study
                      <Link href="#">read more</Link>
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Box>
            <Box>
              <Box className="card-slider-sec">
                {" "}
                <Card
                  sx={{
                    maxWidth: 410,
                    minHeight: 306,
                  }}
                  className="card-design"
                >
                  <Box className="dr-img-card-sec">
                    <Stack>
                      <Avatar
                        alt="Remy Sharp"
                        variant="rounded"
                        src={drimg}
                        className="dr-img"
                      />
                    </Stack>
                  </Box>
                  <Box>
                    <CardContent>
                      <Typography gutterBottom className="dr-name-txt">
                        Dr Sophie Kerr
                      </Typography>
                    </CardContent>
                  </Box>
                  <Box className="star-img-sec">
                    <Stack>
                      <Avatar
                        alt="Remy Sharp"
                        variant="square"
                        src={stars}
                        className="star-img"
                      />
                    </Stack>
                  </Box>
                  <CardContent>
                    <Typography sx={{ mb: 1.5 }} className="dr-card-small-txt">
                      Go the extra mile was unanimously suggested by many of my
                      seniors. The 30 questions/test was a comfortable way to
                      revise core topics, even after a rough day at work.
                      Explanations were appropriate and adequate for the
                      concerned topic. The WhatsApp study
                      <Link href="#">read more</Link>
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Box>
            <Box>
              <Box className="card-slider-sec">
                {" "}
                <Card
                  sx={{
                    maxWidth: 410,
                    minHeight: 306,
                  }}
                  className="card-design"
                >
                  <Box className="dr-img-card-sec">
                    <Stack>
                      <Avatar
                        alt="Remy Sharp"
                        variant="rounded"
                        src={drimg}
                        className="dr-img"
                      />
                    </Stack>
                  </Box>
                  <Box>
                    <CardContent>
                      <Typography gutterBottom className="dr-name-txt">
                        Dr Sophie Kerr
                      </Typography>
                    </CardContent>
                  </Box>
                  <Box className="star-img-sec">
                    <Stack>
                      <Avatar
                        alt="Remy Sharp"
                        variant="square"
                        src={stars}
                        className="star-img"
                      />
                    </Stack>
                  </Box>
                  <CardContent>
                    <Typography sx={{ mb: 1.5 }} className="dr-card-small-txt">
                      Go the extra mile was unanimously suggested by many of my
                      seniors. The 30 questions/test was a comfortable way to
                      revise core topics, even after a rough day at work.
                      Explanations were appropriate and adequate for the
                      concerned topic. The WhatsApp study
                      <Link href="#">read more</Link>
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Box>
          </Slider>
        </Box>
      </Box>
      {/* Testimonial Section Section */}

      {/* Contact Us Section */}
      <Box className="contact-us-sec">
        <Box className="content_container">
          <Box>
            <Box>
              <Typography
                className="contact-us-head-txt"
                variant="h3"
                gutterBottom
              >
                Contact us
              </Typography>
            </Box>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
              marginTop={0}
              marginLeft={0}
            >
              <Grid item>
                <Typography className="form-txt">User Name*</Typography>
                <form>
                  <input type="text" className="singleline-txt" />
                </form>
              </Grid>
              <Grid item>
                <Typography className="form-txt">Email*</Typography>
                <form>
                  <input type="text" className="singleline-txt" />
                </form>
              </Grid>
              <Grid item>
                <Typography className="form-txt">Your Message*</Typography>
                <form>
                  <textarea type="text" className="multiline-txtfield" />
                </form>
              </Grid>
              <Grid item>
                <Button variant="contained" className="send_btn">
                  Send
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      {/* Contact Us Section Over */}

      {/* WhatsApp Section */}
      <Box className="content_container">
        <Box className="whatsapp-no-sec">
          <Box className="whatsapp-txt-sec">
            <Grid container className="whatsapp-color-sec">
              <Grid item>
                <Stack>
                  <Avatar
                    alt="Remy Sharp"
                    variant="rounded"
                    src={WhatsApp}
                    className="whatsapp-icon"
                  />
                </Stack>
              </Grid>
              <Grid item>
                <Typography className="whatsapp-txt">WhatsApp</Typography>
              </Grid>
              <Grid item className="whatsapp-circle-sec">
                <Typography className="circle-txt">Text Only</Typography>
              </Grid>
            </Grid>
            <Typography className="whatsapp-no">+61402090219</Typography>
          </Box>
          <Box className="qr-sec-txt">
            <Typography>Scan the QR code and ask your question!</Typography>
            <Stack>
              <Avatar
                alt="Remy Sharp"
                variant="square"
                src={arrow}
                className="qr-code-arrow"
              />
            </Stack>
          </Box>
          <Box className="qr-code-img">
            <Stack>
              <Avatar
                alt="Remy Sharp"
                variant="square"
                src={qrcode}
                className="qr-code-img"
              />
            </Stack>
          </Box>
        </Box>
      </Box>
      {/* WhatsApp Section Over */}
      <Footer />
    </Box>
  );
}

export default Home;
