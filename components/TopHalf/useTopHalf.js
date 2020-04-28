import { useState, useEffect } from "react"
import randomize from "randomatic"
import useClipboard from "react-use-clipboard"

export const useTopHalf = () => {
  const initialPassword =
    typeof window !== "undefined" ? randomize("Aa0!", 10) : null
  const [password, setPassword] = useState(initialPassword)
  const [snackbarIsOpen, setSnackbarIsOpen] = useState(false)
  const [areSymbolsAllowed, setAreSymbolsAllowed] = useState(true)
  const [areNumbersAllowed, setAreNumbersAllowed] = useState(true)
  const [areLettersAllowed, setAreLettersAllowed] = useState(true)
  const [sliderValue, setSliderValue] = useState(13)
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

  return {
    password,
    setPassword,
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
    generatePassword
  }
}
