import randomize from "randomatic"
import Router from "next/router"
import Link from "next/link"
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import HeadTag from "../components/HeadTag"
import styled from "styled-components"
import CssBaseline from "@material-ui/core/CssBaseline"
import Snackbar from "@material-ui/core/Snackbar"

import { useScrollYPosition } from "react-use-scroll-position"

import { useWindowSize } from "@react-hook/window-size"

const Home = () => {
  const initialPassword = randomize("Aa0!", 10)
  const [password, setPassword] = useState(initialPassword)
  const [snackbarIsOpen, setSnackbarIsOpen] = useState(false)
  const passwordInputRef = useRef(null)
  const [sliderValue, setSliderValue] = useState(0)

  const yScroll = useScrollYPosition()

  const [width, height] = useWindowSize(
    360 /* initialWidth when there is no window */,
    720 /* initialHeight when there is no window */,
    { wait: 100 }
  )

  const viewHeight = height / 100

  // TODO define pattern and length

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

      <AppContainer>
        <div id="app-container">
          <motion.div
            id="menu-bar"
            animate={{
              scale: 1,
              opacity: 1,
              filter: "blur(0px)"
            }}
            initial={{
              scale: 1,
              opacity: 0,
              filter: "blur(10px)"
            }}
            transition={{ ease: "easeOut", duration: 0.2 }}
          >
            <h1 id="menu-title" onClick={() => Router.reload()}>
              password.kiwi{" "}
              <span>
                🥝
              </span>
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1920 240"
              id="goop"
            >
              <g>
                <path d="M1920,144.5l0,95.5l-1920,0l0,-65.5c196,-36 452.146,-15.726 657.5,8.5c229.698,27.098 870,57 1262.5,-38.5Z" />
              </g>
            </svg>
          </motion.div>

          <motion.div
            id="main-box"
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            initial={{ scale: 0.5, opacity: 0, filter: "blur(10px)" }}
            transition={{ ease: "easeOut", duration: 0.2 }}
          >
            <div id="input-component">
              <div
                className={yScroll > viewHeight * 20 ? "added-boxshadow" : null}
              >
                <motion.input
                  id="generated-password-input"
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
                  onClick={() => generateAndCopyPassword()}
                >
                  click to copy
                </h4>
              </div>
            </div>

            <br />

            <div className="text-container">
              <p>
                Every password on this page is created securely, randomly and
                on-demand by your own device - right here inside your browser.
                <br />
                <br />
                Unlike other password generation websites,{" "}
                <span className="highlight">
                  we don't collect any data from you{" "}
                </span>{" "}
                whatsoever.
              </p>
            </div>

            <h1
              className="h1-title"
            >
              100% secure.
            </h1>
            <h2 className="h2-title">no cookies. no tracking pixels.</h2>
            <div className="text-container">
              <p>
                The entire site works perfectly even when your device is
                offline. Go ahead and turn on Airplane Mode to see for yourself!
                <br /> <br />
                Furthermore,{" "}
                <Link href="/">
                  <a>password.kiwi</a>
                </Link>{" "}
                is completely open source, which means that anyone can view and
                verify{" "}
                <Link href="_src">
                  <a>the code for the entire site</a>
                </Link>{" "}
              </p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "2vh"
              }}
            >
              <p>
                built with 🍍 & 🍉 by{" "}
                <Link href="https://twitter.com/bruno_crosier">
                  <a>Bruno</a>
                </Link>
              </p>
            </div>
          </motion.div>

          <StyledSnack
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center"
            }}
            open={snackbarIsOpen}
            autoHideDuration={3000}
            message={<span id="message-id">copied to clipboard!</span>}
            onClose={handleSnackbarClose}
          />
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
    background: #4cd082;
    position: sticky;
    top: 0px;
    z-index: 10;
  }
  #main-box {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-self: start;
    justify-content: center;
    justify-items: center;
    max-width: 100vw;
    padding: 5vh 5vw;
  }
  input#generated-password-input {
    border-radius: 30px;
    font-size: 30px;
    height: 60px;
    text-align: center;
    letter-spacing: 5px;
    border: 0px solid transparent;
    box-shadow: 0px 4px 10px #c6e6c7;
    padding: 10px 0px 5px 0px;
    font-weight: 700;
    color: #4cd082;
    -webkit-tap-highlight-color: transparent;
    justify-self: center;
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
    color: white;
    text-align: center;
  }
  p {
    color: ${({ theme }) => theme.colors.kiwi};
    width: max-content;
    -webkit-tap-highlight-color: transparent;
    font-size: 1.05rem;
  }
  #copied-popup {
    display: grid;
    justify-content: center;
  }
  #app-container {
    display: flex;
    flex-direction: column;
    align-content: center;
    background: honeydew;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 10fr;
    min-height: 90vh;
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
    color: ${({ theme }) => theme.colors.kiwi};
    text-decoration: none;
    font-weight: bold;
  }

  h4#click-to-copy {
    color: ${({ theme }) => theme.colors.kiwi};
    text-transform: uppercase;
    letter-spacing: 7px;
    opacity: 0.5;
  }

  .text-container {
    display: flex;
    padding: 2vh 8vw;
    background: #61d59121;
    border-radius: 20px;
    font-family: "Colfax";
    text-transform: lowercase;
  }

  .h1-title {
    color: ${({ theme }) => theme.colors.kiwi};
    text-transform: lowercase;
    font-size: 2.5rem;
    padding: 5vh 0px 0vh 0px;
  }

  .h2-title {
    color: ${({ theme }) => theme.colors.kiwi};
    text-transform: lowercase;
    font-size: 1.5rem;
    padding: 0vh 0px 5vh 0px;
  }

  #input-component {
    display: flex;
    flex-direction: column;
    padding: 11vh 0vh;
    position: sticky;
    top: 0px;
  }

  #input-component div {
    background: honeydew;
    display: flex;
    flex-direction: column;
    padding-top: 3vh;
  }

  .added-boxshadow {
    width: 100vw;
    margin-left: 50%;
    transform: translateX(-50%);
    box-shadow: 0px 4px 4px #61d59121;
    padding-left: 2.5vh;
    padding-right: 2.5vh;
  }

  #goop {
    fill: honeydew;
    margin-top: -30px;
  }
`

const StyledSnack = styled(Snackbar)`
  div {
    background: #4cd082;
    flex-grow: 0;
    padding: 6px 36px;
  }
  span {
    font-family: "Josefin Sans";
  }
`

export default Home
