import * as React from "react";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material"; // Import Grid component from Material-UI
import CardActionArea from "@mui/material/CardActionArea";
import image1 from "./BorageimgDes.jpg";
import image2 from "./LavenderimgDes.jpeg";
import image6 from "./DillimgDes.jpg";
import image5 from "./TulsiimgDes.jpg";
import image3 from "./PeppermintimgDes.jpg";
import image4 from "./RosemaryimgDes.webp";
import { Link } from "react-router-dom";
export default function Varietiesofherbs() {
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
                  Borage Plant
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      textAlign: "end",
                    }}
                  >
                    ₹140
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
            <Link to="/BorageDes">
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
              src={image6}
              display="flex"
              style={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <div style={{ position: "relative" }}>
                  Dill Plant
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      textAlign: "end",
                    }}
                  >
                    ₹150
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
            <Link to="/DillDes">
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
                  Peppermint Plant
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      textAlign: "end",
                    }}
                  >
                    ₹75
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
            <Link to="/PeppermintDes">
              <Button size="small" variant="contained">
                Description
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
      <br></br>
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
                  Rosemary Plant
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      textAlign: "end",
                    }}
                  >
                    ₹95
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
            <Link to="/RosemaryDes">
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
                  Holy Basil Plant
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
            <Link to="/TulsiDes">
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
              src={image2}
              display="flex"
              style={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <div style={{ position: "relative" }}>
                  Lavender Plant
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      textAlign: "end",
                    }}
                  >
                    ₹249
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
            <Link to="/LavenderDes">
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
