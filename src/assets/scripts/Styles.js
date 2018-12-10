import { createMuiTheme } from '@material-ui/core/styles';

  const MyTheme = createMuiTheme({
    overrides: {
      MuiCardHeader: {
        root: {
          fontFamily: '"Shadows Into Light", cursive',
          fontWeight: 600,
          color: 'rgba(0, 0, 0, 0.6)',
          paddingBottom: 0,
        },
        title: {
          fontFamily: '"Shadows Into Light", cursive',
          fontSize: '2rem',
        },
        subheader: {
          fontFamily: '"Shadows Into Light", cursive',
          fontSize: '1.5rem',
          letterSpacing: 1,
          lineHeight: '110%',
        }
      },
    MuiCard: {
      root: {
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        color: 'rgba(0, 0, 0, 0.9)',
        lineHeight: '180%',
      }
    },
    MuiCardActions: {
      root: {
        paddingTop: 0,
      }
    },
    MuiButton: {
      containedPrimary: {
        backgroundColor: '#c1d5d0',
        '&:hover': {
          backgroundColor: '#c1d5d0 !important',
        }
      }
    },
    MuiIconButton: {
      label: {
        fontSize: 18,
      }
    },
  },
});

export default MyTheme;
