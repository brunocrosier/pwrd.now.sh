import BelowFold from "../components/BottomHalf/BelowFold"
import { AppContainer } from "../components/AppContainer"
import { TopHalf } from "../components/TopHalf/TopHalf"
// import { CssBaseline } from "@material-ui/core"

const Home = () => {
  return (
    <>
      {/* <CssBaseline /> */}
      <AppContainer>
        <TopHalf />
        <BelowFold />
      </AppContainer>
    </>
  )
}

export default Home
