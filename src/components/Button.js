import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const StyledButton = withStyles((theme) => ({
  background: "purple",
  color: "white",
}))(Button);

export default StyledButton;

StyledButton.defaultProps = {
  variant: "contained",
  color: "primary",
};
