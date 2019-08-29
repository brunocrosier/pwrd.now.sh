import Switch from "@material-ui/core/Switch"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import styled from "styled-components"

const StyledSwitch = styled(Switch)`
  .MuiSwitch-colorPrimary.Mui-checked {
    color: #89c14d;
  }
  .MuiSwitch-colorPrimary.Mui-checked + .MuiSwitch-track {
    background: #89c14d;
  }
`

const MySwitch = ({ checked, onChange, name, setHasBeenCopied }) => (
  <div>
    <FormControlLabel
      control={
        <StyledSwitch
          checked={checked}
          onChange={() => {
            onChange(!checked)
            setHasBeenCopied(false)
          }}
          color="primary"
        />
      }
      label={name}
    />
  </div>
)

export default MySwitch
