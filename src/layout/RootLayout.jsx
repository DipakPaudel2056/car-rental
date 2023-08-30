/* eslint-disable react/prop-types */
import { Footer, Navbar } from "../components"

const RootLayout = ({children}) => {
  return (
      <>
        <Navbar />
        <div className="full-height">
        {children}
        </div>
        <Footer />
      </>
  )
}

export default RootLayout
