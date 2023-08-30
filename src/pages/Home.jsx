import { Divider } from "@mui/material"
import { ExploreCar, Hero } from "../components"
import RootLayout from "../layout/RootLayout"

const Home = () => {
  return (
    <div>
        <RootLayout>
            <Hero />
            <Divider />
            <ExploreCar />
        </RootLayout>
    </div>
  )
}

export default Home
