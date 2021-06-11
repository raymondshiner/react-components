import { Button } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/styles";

const StyledButton = withStyles((theme) => ({
  root: {
    color: "white",
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  },
}))(Button);

export default StyledButton;
