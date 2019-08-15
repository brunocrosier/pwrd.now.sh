import Switch from "@material-ui/core/Switch"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import styled from "styled-components"

const DarkModeSwitch = ({ colorScheme, setColorScheme, themes }) => {
  return (
    <FormControlLabel
      control={
        <StyledSwitch
          onChange={() =>
            colorScheme.name === "dark"
              ? setColorScheme(themes.default)
              : setColorScheme(themes.dark)
          }
        />
      }
      label={colorScheme.name === "dark" ? "💡" : "🌙"}
      labelPlacement="top"
    />
  )
}

const StyledSwitch = styled(Switch)`
  * {
    z-index: 0;
    /* position: relative !important; */
  }
`
export default DarkModeSwitch
