import Switch from "../Switch"
import Slider from "react-input-slider"
import { motion } from "framer-motion"
import { Snackbar } from "@material-ui/core"
import { useTopHalf } from "./useTopHalf"

export const TopHalf = () => {
  const {
    password,
    snackbarIsOpen,
    setSnackbarIsOpen,
    areSymbolsAllowed,
    setAreSymbolsAllowed,
    areNumbersAllowed,
    setAreNumbersAllowed,
    areLettersAllowed,
    setAreLettersAllowed,
    sliderValue,
    setSliderValue,
    setCopied,
    generatePassword,
  } = useTopHalf()

  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={snackbarIsOpen}
        autoHideDuration={1000}
        message={<span id="message-id">copied to clipboard!</span>}
        onClose={() => setSnackbarIsOpen(false)}
        css={css`
          div {
            flex-grow: 0;
            padding: 6px 36px;
          }
          .MuiTypography-root {
            background: linear-gradient(23deg, #1e1e1e, #393939);
            box-shadow: 0px 2px 5px #04040463;
            border-radius: 30px;
            justify-content: center;
          }
          span {
            font-weight: 700;
          }
        `}
      />
      <div id="main-box">
        <div id="input-component">
          <a href="/">
            <h1
              css={css`
                color: white;
                text-shadow: 0px 1px 4px #00800094;
              `}
            >
              secure password generator
            </h1>
          </a>
          <motion.button
            id="generated-password-input"
            name="generated-password"
            aria-label="generated-password"
            className="input-gradient-bg"
            onClick={() => {
              setCopied()
              setSnackbarIsOpen(true)
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, filter: "blur(3px)" }}
            transition={{ ease: "easeOut", duration: 0.3 }}
          >
            {password}
          </motion.button>

          <motion.button
            className="header-buttons"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, filter: "blur(3px)" }}
            transition={{ ease: "easeOut", duration: 0.3 }}
            onClick={() => generatePassword()}
          >
            <h4 id="click-to-copy">regenerate</h4>
          </motion.button>

          <div
            css={css`
              margin: 5vh 0;
              display: flex;
              justify-content: space-evenly;
            `}
          >
            <Switch
              checked={areSymbolsAllowed}
              onChange={setAreSymbolsAllowed}
              name="Symbols"
            />
            <Switch
              checked={areNumbersAllowed}
              onChange={setAreNumbersAllowed}
              name="Numbers"
            />
            <Switch
              checked={areLettersAllowed}
              onChange={setAreLettersAllowed}
              name="Letters"
            />
          </div>

          <Slider
            css={css`
              display: flex;
              align-self: center;
              min-width: 60%;
            `}
            styles={{
              active: { backgroundColor: "white" },
              thumb: {
                width: 20,
                height: 20,
                backgroundColor: "white",
              },
              track: {
                backgroundColor: "#ffffff3b",
              },
            }}
            axis="x"
            xstep={1}
            xmin={8}
            xmax={30}
            x={sliderValue}
            onChange={({ x }) => setSliderValue(x)}
          />
          <p
            css={css`
              color: white;
              font-weight: 800;
            `}
          >
            {sliderValue} characters
          </p>
        </div>
        <div
          css={css`
            font-size: 0;
            margin: 0;
            img {
              width: 100%;
            }
          `}
        >
          <img src="/Wave.svg" alt="wave separator" />
        </div>
      </div>
    </>
  )
}
