import React from "react";
import Facebook from "../Images/Facebook.png";
import LinkedIn from "../Images/LinkedIn.png";
import Twitter from "../Images/Twitter.png";
import AppIdea from "../Images/App-Idea.png";
import { Grid, TextField } from "@mui/material";
import Stripe from "../Images/Stripe.png";
import Whatsappicon from "../Images/Whatsapp-icon.png";
import AmericanExpress from "../Images/American Express.png";
import mastercard from "../Images/mastercard.png";
import visa from "../Images/visa.png";
import Paypal from "../Images/Paypal.png";
import logo from "../Images/logo.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

function Footer() {
  return (
    <div>
      {/* Footer Section */}
      <Box className="footer-sec">
        <Box className="content_container">
          <Box className="footer-head-sec">
            <Grid container direction="row" className="grid-sec">
              <Grid item>
                <Grid container direction="column">
                  <Grid item>
                    <Box>
                      <Stack>
                        <Avatar
                          alt="Remy Sharp"
                          variant="square"
                          src={logo}
                          className="logo"
                        />
                      </Stack>
                    </Box>
                    <Box className="email-content-sec">
                      <p className="email-txt">Email us at</p>
                      <p className="email-id">support@gotheextramile.com</p>
                      <Box>
                        <p className="email-sub-txt">
                          All prices are in Australian Dollars. Additional GST
                          applies in accordance with Australian {/* Law. */}
                        </p>
                      </Box>
                    </Box>
                    <Box className="company-logo-img">
                      <Box>
                        <Stack>
                          <Avatar
                            alt="Remy Sharp"
                            variant="square"
                            src={Stripe}
                            className="logo-stripe"
                          />
                        </Stack>
                      </Box>
                      <Box>
                        <Stack>
                          <Avatar
                            alt="Remy Sharp"
                            variant="square"
                            src={AmericanExpress}
                            className="logo-americanexpress"
                          />
                        </Stack>
                      </Box>
                      <Box>
                        <Stack>
                          <Avatar
                            alt="Remy Sharp"
                            variant="rounded"
                            src={mastercard}
                            className="logo-mastercard"
                          />
                        </Stack>
                      </Box>
                      <Box>
                        <Stack>
                          <Avatar
                            alt="Remy Sharp"
                            variant="square"
                            src={visa}
                            className="logo-visa"
                          />
                        </Stack>
                      </Box>
                      <Box>
                        <Stack>
                          <Avatar
                            alt="Remy Sharp"
                            variant="square"
                            src={Paypal}
                            className="logo-paypal"
                          />
                        </Stack>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item className="middle-grid-sec">
                <Box>
                  <p className="privacy-sec">FAQ</p>
                  <p className="privacy-sec">Terms & Condition</p>
                  <p className="privacy-sec">Privacy Policy</p>
                  <p className="privacy-sec">Terms of use</p>
                  <p className="privacy-sec">Contact Us</p>
                </Box>
              </Grid>
              <Grid item>
                <Box className=" right-grid-sec">
                  <Typography
                    variant="h3"
                    gutterBottom
                    className="right-grid-head-txt"
                  >
                    Sign up for our Newsletter!
                  </Typography>
                </Box>
                <Box className="right-grid-sec">
                  {/*  <form>
                    <input type="text" className="email-footer-sec" />
                  </form> */}
                  <TextField
                    id="outlined-basic"
                    label="Ex: maxsmith@email.com"
                    variant="outlined"
                    className="email-footer-sec"
                  />
                </Box>
                <Box className="right-grid-sec">
                  <Button variant="contained" className="subscribe_btn">
                    Subscribe
                  </Button>
                </Box>
                <Box className="social-media-sec">
                  <Stack>
                    <Avatar
                      alt="Remy Sharp"
                      variant="rounded"
                      src={Facebook}
                      className="facebook-icon"
                    />
                  </Stack>
                  <Stack>
                    <Avatar
                      alt="Remy Sharp"
                      variant="rounded"
                      src={LinkedIn}
                      className="social-media-icon"
                    />
                  </Stack>
                  <Stack>
                    <Avatar
                      alt="Remy Sharp"
                      variant="rounded"
                      src={Twitter}
                      className="social-media-icon"
                    />
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      {/* Footer Section Over */}

      {/* CopyRight Section */}
      <Box className="copyright-sec ">
        <Box className="content_container">
          <p className="copyright-txt">
            Copyright © 2022 Quiz Time in Critical Care Pty Ltd. Australian
            Business No: 74 614 368 973
          </p>
        </Box>
      </Box>
      {/* CopyRight Section Over*/}
    </div>
  );
}

export default Footer;
