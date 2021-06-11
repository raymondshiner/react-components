import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const ColorButton = withStyles((theme) => ({
  root: {
    color: "white",
    backgroundColor: "red",
    "&:hover": {
      backgroundColor: "black",
    },
  },
}))(Button);

export default ColorButton;

ColorButton.defaultProps = {
  variant: "contained",
  color: "primary",
};
