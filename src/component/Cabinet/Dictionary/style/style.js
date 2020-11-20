import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  link: {
    textDecoration: 'none',
    border: '1px solid #3f51b5',
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    '& svg': {
      transition: 'all .3s'
    },
    '&:hover svg': {
      transform: 'rotate(180deg)',
      fill: '#7786dc'
    },
    '&:hover': {
      color: '#7786dc',
      border: '1px solid #7786dc',
      background: 'white'
    }
  }
}))