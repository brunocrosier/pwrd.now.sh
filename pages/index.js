import { useState, useEffect } from "react"
import randomize from "randomatic"
import Router from "next/router"
import { motion } from "framer-motion"
import HeadTag from "../components/HeadTag"
import styled from "styled-components"
import Snackbar from "@material-ui/core/Snackbar"
import { useScrollYPosition } from "react-use-scroll-position"
import ReactFitText from "react-fittext"
import BelowFold from "../components/BelowFold"
import useClipboard from "react-use-clipboard"
import Slider from "react-input-slider"
import Switch from "../components/Switch"
import { CssBaseline } from "@material-ui/core"

const Home = () => {
  const initialPassword =
    process.browser !== undefined ? randomize("Aa0!", 10) : null
  const [password, setPassword] = useState(initialPassword)
  const [snackbarIsOpen, setSnackbarIsOpen] = useState(false)
  const [areSymbolsAllowed, setAreSymbolsAllowed] = useState(true)
  const [areNumbersAllowed, setAreNumbersAllowed] = useState(true)
  const [areLettersAllowed, setAreLettersAllowed] = useState(true)
  const [sliderValue, setSliderValue] = useState(13)
  const [hasBeenCopied, setHasBeenCopied] = useState(false)

  const scrollYProgress = useScrollYPosition()

  const [isCopied, setCopied] = useClipboard(password)

  const generatePassword = () => {
    let randomizeValue = ""

    if (areLettersAllowed) {
      randomizeValue = randomizeValue + "Aa"
    }

    if (areNumbersAllowed) {
      randomizeValue = randomizeValue + "0"
    }

    if (areSymbolsAllowed) {
      randomizeValue = randomizeValue + "!"
    }

    if (randomizeValue === "") {
      setPassword(":(")
    } else {
      setPassword(randomize(randomizeValue, sliderValue))
    }
  }

  useEffect(() => {
    generatePassword()
  }, [areLettersAllowed])

  useEffect(() => {
    generatePassword()
  }, [areNumbersAllowed])

  useEffect(() => {
    generatePassword()
  }, [areSymbolsAllowed])

  useEffect(() => {
    generatePassword()
  }, [sliderValue])

  const handleSnackbarClose = () => setSnackbarIsOpen(false)

  return (
    <>
      <CssBaseline />
      <HeadTag />

      <AppContainer>
        <div id="app-container">
          <div
            id="menu-bar"
            className={scrollYProgress < 1 ? "" : "scrolled-menu-bar"}
          >
            <img src="/logo.svg" alt="password.kiwi logo" onClick={() => Router.reload()}/>
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
                  setHasBeenCopied(true)
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
                onClick={() => {
                  if (!hasBeenCopied) {
                    setCopied(password)
                    setHasBeenCopied(true)
                    setSnackbarIsOpen(true)
                  } else {
                    generatePassword()
                    setHasBeenCopied(false)
                  }
                }}
              >
                click to {hasBeenCopied ? "generate" : "copy"}
              </h4>

              <div
                style={{
                  margin: "5vh 0",
                  display: "flex",
                  justifyContent: "space-evenly"
                }}
              >
                <Switch
                  checked={areSymbolsAllowed}
                  onChange={setAreSymbolsAllowed}
                  name="Symbols"
                  setHasBeenCopied={setHasBeenCopied}
                />
                <Switch
                  checked={areNumbersAllowed}
                  onChange={setAreNumbersAllowed}
                  name="Numbers"
                  setHasBeenCopied={setHasBeenCopied}
                />
                <Switch
                  checked={areLettersAllowed}
                  onChange={setAreLettersAllowed}
                  name="Letters"
                  setHasBeenCopied={setHasBeenCopied}
                />
              </div>

              <Slider
                style={{
                  display: "flex",
                  alignSelf: "center",
                  minWidth: "60%"
                }}
                styles={{
                  active: { backgroundColor: "#c2dea4" },
                  thumb: {
                    width: 20,
                    height: 20,
                    backgroundColor: "#89c14d"
                  }
                }}
                axis="x"
                xstep={1}
                xmin={8}
                xmax={30}
                x={sliderValue}
                onChange={({ x }) => {
                  setSliderValue(x)
                  setHasBeenCopied(false)
                }}
              />
              <p>{sliderValue} characters</p>
            </div>
          </div>

          <StyledSnack
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center"
            }}
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
    /* background: rgb(159, 209, 105); */
    background: linear-gradient(0deg, rgb(148, 201, 92), rgb(159, 209, 105));
    height: 10vh;
  }

  .scrolled-menu-bar {
    box-shadow: 0px 0px 7px #31313138 !important;
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

    overflow: hidden;
    white-space: nowrap;
    display: block;
    text-overflow: ellipsis;
  }

  button#generated-password-input:focus {
    outline: 1px transparent solid;
  }
  button#generated-password-input:hover {
    cursor: pointer;
  }
  #menu-bar > img {
    padding: 1vh;
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
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
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
    max-width: 100%;
    padding: 5vh;
    align-self: center;
  }

  .gradient-bg {
    background: linear-gradient(26deg, #ffffff 0%, #afafaf 100%);
  }

  .input-gradient-bg {
    background: linear-gradient(23deg, rgb(185, 228, 139), rgb(131, 189, 70));
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
    background: linear-gradient(23deg, rgb(185, 228, 139), rgb(131, 189, 70));
    box-shadow: 0px 2px 5px #04040463;
    border-radius: 30px;
    justify-content: center;
  }
  span {
    font-family: "Google Sans";
    font-weight: 700;
  }
`

export default Home
