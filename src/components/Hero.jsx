import TypewriterComponent from "typewriter-effect";
import { Box, Button, Container, Typography } from "../materials";
import { typeWriterTexts } from "../constants";
import carImage from "../assets/hero.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="full-height">
      <Container>
        <Box
          sx={{
            color: "black",
            height: "50vh",
            padding: "0.3em",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "0.1em",
            }}
          >
            <Typography
              fontFamily={"cursive"}
              fontSize={{ lg: "3em", sm: "1em" }}
              color={"black"}
            >
              You are visiting
              <TypewriterComponent
                options={{
                  strings: typeWriterTexts,
                  autoStart: true,
                  loop: true,
                }}
              />
              Car Dealer in the internet
            </Typography>
            <Button color="success" variant="solid" sx={{width:'200px'}}>
              <Link to="/cars" className="link">Explore cars </Link>
            </Button>
          </Box>
          <img className="hero__image" src={carImage} loading="lazy" alt="" />
        </Box>
      </Container>
    </div>
  );
};

export default Hero;
