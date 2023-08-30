/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import { pink } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Container, HomeIcon } from "../materials";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import AtmIcon from "@mui/icons-material/Atm";
import SpeedIcon from "@mui/icons-material/Speed";
import EngineeringSharpIcon from "@mui/icons-material/EngineeringSharp";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
};
const CarDetailModal = ({ open, handleClose, car }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <Typography id="modal-modal-title" variant="h2" component="h2">
              {car.make}
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {car.model}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              This car is {car.transmission === "a" ? "automatic" : "manual"}{" "}
              transmission with {car.cylinders} cylinders. Manufactured in{" "}
              {car.year}. It uses {car.fuel_type}.
            </Typography>
          </div>

          <Box
            sx={{
              width: 300,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <Container disableGutters sx={{display: "flex", justifyContent:"space-between"}}>
              <LocalGasStationIcon color="primary" />
              <Typography >{car.fuel_type}</Typography>
            </Container>
            <Container disableGutters sx={{display: "flex", justifyContent:"space-between"}}>
            <AtmIcon color="secondary" />
              <Typography >{car.transmission === "a" ? "automatic" : "manual"}</Typography>
            </Container>
            <Container disableGutters sx={{display: "flex", justifyContent:"space-between"}}>
            <SpeedIcon color="action" />
              <Typography >{car.highway_mpg}miles/gallon</Typography>
            </Container>
            <EngineeringSharpIcon sx={{ color: pink[500] }} />
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default CarDetailModal;
