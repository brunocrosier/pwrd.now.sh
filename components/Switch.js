import Switch from "@material-ui/core/Switch"
import FormControlLabel from "@material-ui/core/FormControlLabel"

const MySwitch = ({ checked, onChange, name }) => (
  <FormControlLabel
    control={
      <Switch
        checked={checked}
        onChange={() => {
          onChange(!checked)
        }}
        color="primary"
        css={css`
          .MuiSwitch-colorPrimary.Mui-checked {
            color: white;
          }
          .MuiSwitch-colorPrimary.Mui-checked + .MuiSwitch-track {
            background: white;
          }
        `}
      />
    }
    label={name}
  />
)

export default MySwitch
