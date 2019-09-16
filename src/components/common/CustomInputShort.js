import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

const CustomInputShort = withStyles(theme => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      fontFamily: [
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
      ].join(','),
      '&:hover': {
        borderRadius: 4,
        borderColor: '#212121',
      },
      '&:focus': {
        borderRadius: 4,
        borderColor: '#2f9aef',
        boxShadow: '0 0 0 0.5px #2f9aef',
      },
    },
  }))(InputBase);
  
  export default CustomInputShort;