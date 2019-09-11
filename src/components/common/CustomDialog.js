import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';

const CustomDialog = withStyles(theme => ({
    root: {
        minWidth: "1150px",
        minHeight: "1100px !important",
        height: "100%",
        border: "1px solid red",
    },
    container: {
        height: "100vh",
        display: "block",
    },
    scrollBody: {
        '&:after': {
            height: '100%',
        }
    },
    paperFullWidth: {
        maxWidth: '1280px',
        maxHeight: '850px',
        minHeight: '550px',
        width: 'calc(100% - 96px)',
        height: 'calc(100% - 96px)',
        border: '2px dotted gold',
        display: 'inline-flex',
        flexDirection: 'column',
        border: 'none',
    },
    paperScrollBody: {
        verticalAlign: 'middle',
    },
  }))(Dialog);
  
  export default CustomDialog;