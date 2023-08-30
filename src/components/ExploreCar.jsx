import { Container } from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import GasMeterSharpIcon from "@mui/icons-material/GasMeterSharp";
import CalendarMonthSharpIcon from "@mui/icons-material/CalendarMonthSharp";

import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import { fetchCars } from "../utils/fetchCars";
import CarDetailModal from "./CarDetailModal";
import { generateCarImageUrl } from "../utils/getCarImage";

const ExploreCar = () => {
  const [cars, setCars] = useState([]);
  const [selectedMotor, setSelectedMotor] = useState("toyota");
  const [selectedCar,setSelectedCar] = useState({});
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  
  const handleModalClick = (car) => {
    setSelectedCar(car)
    openModal()
    console.log(selectedCar)
  };

  const displayCars = async () => {
    const data = await fetchCars({ make: selectedMotor });
    setCars(data);
  };

  useEffect(() => {
    displayCars(selectedMotor);
  }, [selectedMotor]);
  return (
    <Container>
      <h1 className="exploreCar__title">
        Find the latest varities of cars here
      </h1>
      <div>
        <SearchBar setSelectedMotor={setSelectedMotor} value={selectedMotor} />
        <h2 className="exploreCar__title">
          Showing results for {selectedMotor}
        </h2>
      </div>
      <div className="exploreCar__wrapper">
        {cars && cars.length > 1 ? (
          cars.map((car, index) => (
            <Card key={index} variant="outlined" sx={{ width: 320 }}>
              <div>
                <Typography level="title-lg">
                  {car.make.toUpperCase()}
                </Typography>
                <Typography level="body-sm">
                  {car.model.toUpperCase()}
                </Typography>
                <IconButton
                  aria-label="bookmark Bahamas Islands"
                  variant="plain"
                  color="neutral"
                  size="sm"
                  sx={{
                    position: "absolute",
                    top: "0.875rem",
                    right: "0.5rem",
                  }}
                ></IconButton>
              </div>
              <AspectRatio minHeight="120px" maxHeight="200px">
                <img
                  src={generateCarImageUrl(car)}
                />
              </AspectRatio>
              <CardContent orientation="horizontal">
                <div>
                  <Typography>
                    <CalendarMonthSharpIcon color="orange" />
                  </Typography>
                  <Typography fontSize="sm" fontWeight="lg">
                    {car.year}
                  </Typography>
                </div>
                <div>
                  <Typography>
                    <GasMeterSharpIcon color="success" />
                  </Typography>
                  <Typography fontSize="sm" fontWeight="lg">
                    {car.city_mpg}m/g
                  </Typography>
                </div>
                <Button
                  onClick={()=>handleModalClick(car)}
                  variant="solid"
                  size="md"
                  color="primary"
                  aria-label="Explore Bahamas Islands"
                  sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
                >
                  More
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography>
            Please select a manufacturer from the form above
          </Typography>
        )}
        <CarDetailModal
          open={open}
          handleClose={closeModal}
          car={selectedCar}
        />
      </div>
    </Container>
  );
};

export default ExploreCar;
