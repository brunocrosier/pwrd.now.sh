import CssBaseline from "@material-ui/core/CssBaseline"
import { HeadTag } from "../components/HeadTag"

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <HeadTag />
      <Component {...pageProps} />
      {/* <CssBaseline /> */}
      <style jsx global>{`
        html,
        body {
          margin: 0 !important;
        }
      `}</style>
    </>
  )
}

export default MyApp
