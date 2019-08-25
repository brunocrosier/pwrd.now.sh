import { useState, useRef, useEffect } from "react"
import randomize from "randomatic"
import Router from "next/router"
import { motion } from "framer-motion"
import HeadTag from "../components/HeadTag"
import styled from "styled-components"
import CssBaseline from "@material-ui/core/CssBaseline"
import Snackbar from "@material-ui/core/Snackbar"
import { useScrollYPosition } from "react-use-scroll-position"
import ReactFitText from "react-fittext"
import BelowFold from "../components/BelowFold"
import Logo from "../components/Logo"

import useClipboard from "react-use-clipboard"

const Home = () => {
  const initialPassword =
    process.browser !== undefined ? randomize("Aa0!", 10) : null
  const [password, setPassword] = useState(initialPassword)

  const [snackbarIsOpen, setSnackbarIsOpen] = useState(false)
  const passwordInputRef = useRef(null)

  const scrollYProgress = useScrollYPosition()

  const [isCopied, setCopied] = useClipboard(password)

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
      inputGradientBg: "23deg,rgb(185,228,139),rgb(131,189,70)",
      inputBoxShadow: "#0a0a0a42",
      overlayBoxShadow: "#0a0a0a42",
      snackbarBackground: "#5eab3e"
    }
  }

  const [colorscheme, setcolorscheme] = useState(themes.dark)

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
      <HeadTag />

      <AppContainer colorscheme={colorscheme}>
        <div id="app-container">
          <div
            id="menu-bar"
            className={scrollYProgress < 1 ? "" : "scrolled-menu-bar"}
          >
            <h1 id="menu-title" onClick={() => Router.reload()}>
              password.kiwi
              <Logo />
            </h1>
          </div>

          <div id="main-box">
            <div id="input-component">
              <ReactFitText compressor={1.5} maxFontSize={45}>
                <h1 style={{ color: "#8ac24f" }}>secure password generator</h1>
              </ReactFitText>

              <motion.button
                id="generated-password-input"
                name="generated-password"
                aria-label="generated-password"
                className="input-gradient-bg"
                onClick={() => {
                  setCopied()
                  setPassword(randomize("Aa0!", 10))
                  setSnackbarIsOpen(true)
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95, filter: "blur(3px)" }}
                transition={{ ease: "easeOut", duration: 0.3 }}
              >
                {password}
              </motion.button>

              <h4
                id="click-to-copy"
                // onClick={() => generateAndCopyPassword()}
              >
                click to copy
              </h4>
            </div>
          </div>

          <StyledSnack
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center"
            }}
            colorscheme={colorscheme}
            open={snackbarIsOpen}
            autoHideDuration={1000}
            message={<span id="message-id">copied to clipboard!</span>}
            onClose={handleSnackbarClose}
          />

          <BelowFold />
        </div>
      </AppContainer>
      <style jsx>{`
        :global(body) {
          margin: 0;
        }
      `}</style>
    </>
  )
}

const AppContainer = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Google+Sans:400,700&display=swap");

  #menu-bar {
    display: flex;
    align-content: center;
    flex-direction: column;
    justify-content: center;
    position: sticky;
    top: 0px;
    z-index: 10;
    box-shadow: 0px 0px 1px #1ac3e138;
    background: linear-gradient(23deg, rgb(185, 228, 139), rgb(131, 189, 70));
    height: 10vh;
  }

  .scrolled-menu-bar {
    box-shadow: 0px 0px 7px #31313138 !important;
    background: linear-gradient(
      23deg,
      rgb(185, 228, 139),
      rgb(131, 189, 70)
    ) !important;
  }

  #main-box {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-self: center;
    justify-content: center;
    justify-items: center;
    width: 100%;
    height: 100vh;
    margin-top: -13vh;
    /* background-image: url("../static/shape-2.png"); */
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top right;
  }

  button#generated-password-input {
    border-radius: 50vw;
    font-size: 30px;
    height: 80px;
    text-align: center;
    letter-spacing: 5px;
    border: 0px solid transparent;
    box-shadow: 0px 2px 10px #44444442;
    padding: 10px 40px 10px 40px;
    font-weight: 700;
    color: white;
    -webkit-tap-highlight-color: transparent;
    justify-self: center;
    align-self: center;
    max-width: 100%;
  }

  button#generated-password-input:focus {
    outline: 1px transparent solid;
  }
  button#generated-password-input:hover {
    cursor: pointer;
  }
  h1#menu-title {
    padding: 1vh 0vh;
    color: white;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    /* text-shadow: 0px 1px 2px #79ab03; */
  }
  p {
    -webkit-tap-highlight-color: transparent;
    font-size: 1.05rem;
  }
  #app-container {
    display: flex;
    flex-direction: column;
    align-content: center;
    min-height: 100vh;
    background: linear-gradient(129deg, rgb(255, 255, 255), rgb(245, 245, 245));
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
  button {
    font-family: "Google Sans", sans-serif;
  }

  p {
    font-family: "Google Sans", sans-serif;
  }

  a {
    color: #8ac24f;
    text-decoration: none;
    font-weight: bold;
  }

  h4#click-to-copy {
    color: #8ac24f;
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
    z-index: 2;
    padding: 5vh;
    width: 100vw;
    align-self: center;
    /* background: linear-gradient(45deg, #335fdc52, #4c4c4c08); */
    border-radius: 20px;
    /* box-shadow: 0px 5px 5px #18191957; */
  }

  .gradient-bg {
    background: ${({ colorscheme }) =>
      `linear-gradient(${colorscheme.gradientBg})`};
  }

  .input-gradient-bg {
    background: ${({ colorscheme }) =>
      `linear-gradient(${colorscheme.inputGradientBg})`};
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
    background: ${({ colorscheme }) =>
      `linear-gradient(${colorscheme.inputGradientBg})`};
    box-shadow: none;
    border-radius: 30px;
  }
  span {
    font-family: "Google Sans";
  }
`

export default Home
