import { createMuiTheme } from '@material-ui/core/styles';

  const MyTheme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
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
        // backgroundColor: 'rgba(255, 255, 255, 0.4)',
        background: 'linear-gradient(10deg, rgb(212, 225, 222), rgb(255, 255, 255) 100%)',
        color: 'rgba(0, 0, 0, 0.9)',
        lineHeight: '180%',
      }
    },
    MuiList: {
      root: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
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
