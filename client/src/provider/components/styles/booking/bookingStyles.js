export const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '80vh',
  },
  cardBox: {
    backgroundColor: '#F5F5F5',
    color: '#000000',
    padding: '16px',
    borderRadius: '8px',
    cursor: 'pointer',
    width: '300px',
    boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0px 4px 8px rgba(0,0,0,0.15)',
    },
  },
  username: {
    fontWeight: 'bold',
    fontSize: '1.1rem',
  },
  divider: {
    backgroundColor: '#E0E0E0',
    margin: '8px 0',
  },
  status: {
    fontSize: '0.9rem',
    textTransform: 'capitalize',
  },
};