export default theme => ({
  topcard: {
    position: 'relative',
    // boxShadow: '0 5px 22px rgba(0,0,0,0.10)',
    padding: 20,
    margin: '15px 15px 65px 15px',
    width: '84vw',
    maxWidth: 500,
    height: 340,
    backgroundColor: '#f9f9f9',
    // backgroundColor: 'rgb(30, 222, 184)',
    boxSizing: 'border-box',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'absolute',
    transition: 'all 0.3s cubic-bezier(.25, .8, .25, 1)',
    '&:hover': {
      backgroundColor: '#EEE',
      transform: 'translateY(-2px)',
      boxShadow: '0 7px 25px rgba(0,0,0,0.17)',
      cursor: 'pointer',
    },
  },
  img1: {
    width: 80,
    padding: 2,
    margin: 'auto',
    display: 'block',
  },
  preHeaderText: {
    ...theme.typography.preHeaderText,
    color: '#999',
  },
  bkImage: {
    zIndex: 100,
    position: 'absolute',
    paddingBottom: 150,
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    transition: 'all 2s cubic-bezier(.25, .8, .25, 1)',
    '& img': {
      maxHeight: '125%',
      maxWidth: '100%',
    },
    '&:hover': {
      transform: 'translate(-15px)',
    },
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    // borderBottomRightRadius: 6,
    // borderBottomLeftRadius: 6,
    height: 120,
    width: '100%',
  },
});