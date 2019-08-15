import { useState, useRef, useEffect } from "react"
import randomize from "randomatic"
import Router from "next/router"
import Link from "next/link"
import { motion } from "framer-motion"
import HeadTag from "../components/HeadTag"
import styled from "styled-components"
import CssBaseline from "@material-ui/core/CssBaseline"
import Snackbar from "@material-ui/core/Snackbar"
import { useScrollYPosition } from "react-use-scroll-position"
import ReactFitText from "react-fittext"
import BelowFold from "../components/BelowFold"

const Home = () => {
  const initialPassword = randomize("Aa0!", 10)
  const [password, setPassword] = useState(initialPassword)

  const [snackbarIsOpen, setSnackbarIsOpen] = useState(false)
  const passwordInputRef = useRef(null)

const scrollYProgress = useScrollYPosition()

  const themes = {
    default: {
      name: "default",
      topbarcolor: "#333333",
      background: "white",
      gradientBg: "26deg, #00dbde 0%, #fc00ff 100%",
      inputGradientBg: "26deg, #00dbde 0%, #fc00ff 100%",
      inputBoxShadow: "#ffffff42",
      overlayBoxShadow: "#a3b1d842",
      snackbarBackground: "#333333"
    },
    dark: {
      name: "dark",
      topbarcolor: "#2f3437",
      background: "#2f3437",
      gradientBg: "26deg,#ffffff 0%,#afafaf 100%",
      inputGradientBg: "26deg, #00dbde 0%, #fc00ff 100%",
      inputBoxShadow: "#0a0a0a42",
      overlayBoxShadow: "#0a0a0a42",
      snackbarBackground: "#5eab3e"
    }
  }

  const [colorScheme, setColorScheme] = useState(themes.dark)

  const generateAndCopyPassword = (pattern, length) => {
    setPassword(randomize("Aa0!", 10))
    passwordInputRef.current.select()
    document.execCommand("copy")
    setSnackbarIsOpen(true)
  }

  const handleSnackbarClose = () => setSnackbarIsOpen(false)

  return (
    <>
      <CssBaseline />
      <HeadTag topbarcolor={'#36393e'} />

      <AppContainer colorScheme={colorScheme}>
        <div id="app-container">
          <motion.div
            id="menu-bar"
            animate={{
              opacity: 1,
              filter: "blur(0px)"
            }}
            initial={{
              opacity: 0,
              filter: "blur(10px)"
            }}
            transition={{ ease: "easeOut", duration: 0.2 }}
            className={(scrollYProgress < 1) ? "" : "scrolled-menu-bar"}
          >
            <h1 id="menu-title" onClick={() => Router.reload()}>
              password.kiwi <span>🥝</span>
            </h1>
            {/* <WaveSVG /> */}
          </motion.div>

          <motion.div
            id="main-box"
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            initial={{ scale: 0.5, opacity: 0, filter: "blur(10px)" }}
            transition={{ ease: "easeOut", duration: 0.2 }}
          >
            <div id="input-component">
              <ReactFitText compressor={1.3} maxFontSize={50}>
                <h1
                  style={{ color: "white", textShadow: "0px 1px 3px #1face1" }}
                >
                  secure password generator
                </h1>
              </ReactFitText>
              <motion.input
                id="generated-password-input"
                className="input-gradient-bg"
                type="text"
                readOnly="readonly"
                ref={passwordInputRef}
                value={password}
                onChange={e => setPassword(e.target.value)}
                onClick={() => generateAndCopyPassword()}
                spellCheck={false}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95, filter: "blur(3px)" }}
                transition={{ ease: "easeOut", duration: 0.3 }}
              />

              <h4
                id="click-to-copy"
                style={{ color: "white" }}
                onClick={() => generateAndCopyPassword()}
              >
                click to copy
              </h4>
            </div>

            {/* <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "2vh",
                position: "fixed",
                bottom: "0px",
                alignSelf: "center"
              }}
            >
              <p style={{ color: "white" }}>
                built with ❤ by
                <Link href="https://twitter.com/bruno_crosier">
                  <a style={{ color: "white" }}> Bruno</a>
                </Link>
              </p>
            </div> */}
          </motion.div>

          <StyledSnack
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center"
            }}
            colorScheme={colorScheme}
            open={snackbarIsOpen}
            autoHideDuration={1000}
            message={<span id="message-id">copied to clipboard!</span>}
            onClose={handleSnackbarClose}
          />

          <BelowFold />
        </div>
      </AppContainer>
    </>
  )
}

const AppContainer = styled.div`
  #menu-bar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: sticky;
    top: 0px;
    z-index: 10;
    box-shadow: 0px 0px 1px #1ac3e138;
    background: #00000014;
    height: 10vh;
  }

  .scrolled-menu-bar {
    box-shadow: 0px 0px 7px #31313138!important;
    background: linear-gradient(0deg,#212121,#36393e)!important;
  }
  
  #main-box {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-self: center;
    justify-content: center;
    justify-items: center;
    width: 100vw;
    height: 100vh;
    margin-top: -13vh;
    background-image: url("../static/shape-1.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top right;
  }

  input#generated-password-input {
    border-radius: 50vw;
    font-size: 30px;
    height: 80px;
    text-align: center;
    letter-spacing: 5px;
    border: 0px solid transparent;
    box-shadow: 0px 2px 10px #44444442;
    padding: 10px 0px 5px 0px;
    font-weight: 700;
    color: white;
    -webkit-tap-highlight-color: transparent;
    justify-self: center;
    align-self: center;
    max-width: 100%;
  }
  input#generated-password-input ::selection {
    background: transparent;
  }
  input#generated-password-input:focus {
    outline: 1px transparent solid;
  }
  input#generated-password-input:hover {
    cursor: pointer;
  }
  h1#menu-title {
    padding: 1vh 0vh;
    color: white;
    text-align: center;
  }
  p {
    /* width: max-content; */
    -webkit-tap-highlight-color: transparent;
    font-size: 1.05rem;
  }
  #app-container {
    display: flex;
    flex-direction: column;
    align-content: center;
    min-height: 100vh;
    background: linear-gradient(129deg,#292929,#272727);
  }

  body {
    margin: 0px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  input {
    font-family: "Josefin Sans", sans-serif;
  }

  p {
    font-family: "Josefin Sans", sans-serif;
  }

  a {
    color: ${({ theme }) => theme.colors.darkgray};
    text-decoration: none;
    font-weight: bold;
  }

  h4#click-to-copy {
    color: ${({ theme }) => theme.colors.darkgray};
    text-transform: uppercase;
    letter-spacing: 7px;
    opacity: 0.8;
  }

  .text-container {
    display: flex;
    padding: 2vh 8vw;
    border-radius: 20px;
    font-family: "Colfax";
    align-self: center;
    max-width: 100%;
  }

  #input-component {
    display: flex;
    flex-direction: column;
    /* position: sticky;
    top: 10vh; */
    z-index: 2;
    padding: 5vh;
    width: 100vw;
    align-self: center;
    background: linear-gradient(45deg, #335fdc52, #4c4c4c08);
    border-radius: 20px;
    box-shadow: 0px 5px 5px #18191957;
  }

  .gradient-bg {
    background: ${({ colorScheme }) =>
      `linear-gradient(${colorScheme.gradientBg})`};
  }

  .input-gradient-bg {
    background: ${({ colorScheme }) =>
      `linear-gradient(${colorScheme.inputGradientBg})`};
  }

  .clip-text {
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (min-width: 768px) {

    #input-component {
      width: 67vw;
    }

    #main-box {
        margin-top: -10vh;
    }
  }

  @media (orientation: landscape) {
    #generated-password-input {
      max-width: 50vw;
    }
  }
`

const StyledSnack = styled(Snackbar)`
  div {
    background: transparent;
    flex-grow: 0;
    padding: 6px 36px;
  }
  .MuiTypography-root {
    background: ${({ colorScheme }) =>
      `linear-gradient(${colorScheme.inputGradientBg})`};
  }
  span {
    font-family: "Josefin Sans";
  }
`

export default Home
