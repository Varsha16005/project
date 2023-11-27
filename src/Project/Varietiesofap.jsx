import * as React from "react";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material"; // Import Grid component from Material-UI
import CardActionArea from "@mui/material/CardActionArea";
import image1 from "./Plants/SwissimgDes.jpeg";
import image2 from "./Plants/AnthuriumimgDes.webp";
import image6 from "./Plants/PeacelilyimgDes.jpeg";
import image5 from "./Plants/PrayerimgDes.jpeg";
import image3 from "./Plants/SpringimgDes.jpeg";
import image4 from "./Plants/TillandsiaimgDes.jpeg";
import { Link } from "react-router-dom";
export default function VarietiesofAp() {
  return (
    <Grid container spacing={2} padding={7}>
      {" "}
      {/* Create a grid container with spacing */}
      {/* First Card */}
      <Grid item xs={12} sm={4}>
        {" "}
        {/* Set the width for each card on different screen sizes */}
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="150"
              src={image1}
              display="flex"
              style={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <div style={{ position: "relative" }}>
                  Swiss cheese plant
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      textAlign: "end",
                    }}
                  >
                    ₹187
                  </div>
                </div>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" variant="contained">
              Add to cart
            </Button>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <Link to="/SwissDes">
              <Button size="small" variant="contained">
                Description
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
      {/* Second Card */}
      <Grid item xs={12} sm={4}>
        {" "}
        {/* Set the width for each card on different screen sizes */}
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="150"
              src={image2}
              display="flex"
              style={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <div style={{ position: "relative" }}>
                  Anthurium Plant
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      textAlign: "end",
                    }}
                  >
                    ₹85
                  </div>
                </div>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" variant="contained">
              Add to cart
            </Button>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <Link to="/AnthuriumDes">
              <Button size="small" variant="contained">
                Description
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
      {/* Third Card */}
      <Grid item xs={12} sm={4}>
        {" "}
        {/* Set the width for each card on different screen sizes */}
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="150"
              src={image3}
              display="flex"
              style={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <div style={{ position: "relative" }}>
                  String of Perls Plant
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      textAlign: "end",
                    }}
                  >
                    ₹216
                  </div>
                </div>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" variant="contained">
              Add to cart
            </Button>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <Link to="/StringDes">
              <Button size="small" variant="contained">
                Description
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
      <br></br>
      <br></br>
      <Grid item xs={12} sm={4}>
        {" "}
        {/* Set the width for each card on different screen sizes */}
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="150"
              src={image4}
              display="flex"
              style={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <div style={{ position: "relative" }}>
                  Pink Quill Plant
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      textAlign: "end",
                    }}
                  >
                    ₹390
                  </div>
                </div>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" variant="contained">
              Add to cart
            </Button>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <Link to="/TillandsiaDes">
              <Button size="small" variant="contained">
                Description
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
      {/* Second Card */}
      <Grid item xs={12} sm={4}>
        {" "}
        {/* Set the width for each card on different screen sizes */}
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="150"
              src={image5}
              display="flex"
              style={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <div style={{ position: "relative" }}>
                  Prayer Plant
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      textAlign: "end",
                    }}
                  >
                    ₹220
                  </div>
                </div>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" variant="contained">
              Add to cart
            </Button>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <Link to="/PrayerDes">
              <Button size="small" variant="contained">
                Description
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
      {/* Third Card */}
      <Grid item xs={12} sm={4}>
        {" "}
        {/* Set the width for each card on different screen sizes */}
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="150"
              src={image6}
              display="flex"
              style={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <div style={{ position: "relative" }}>
                  Peace Lily
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      textAlign: "end",
                    }}
                  >
                    ₹125
                  </div>
                </div>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" variant="contained">
              Add to cart
            </Button>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <Link to="/PeacelilyDes">
              <Button size="small" variant="contained">
                Description
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
