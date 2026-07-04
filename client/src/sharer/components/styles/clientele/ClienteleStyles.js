export const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
    padding: '20px',
  },
  title: {
    fontSize: '24px',
    textAlign: 'center',
    width: '100%',
    borderBottom: '1px solid #000',
    paddingBottom: '10px',
  },
  card: {
    border: '1px solid #000',
    borderRadius: '8px',
    padding: '24px 48px',
    backgroundColor: '#f5f5f5',
    textAlign: 'center',
    width: '320px',
    cursor: 'pointer',
  },
  username: {
    fontSize: '18px',
    fontWeight: 'normal',
    marginBottom: '16px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
  },
  btn: {
    border: '1px solid #000',
    borderRadius: '0px',
    backgroundColor: '#fff',
    color: '#000',
    textTransform: 'none',
    fontSize: '16px',
    padding: '2px 16px',
    '&:hover': {
      backgroundColor: '#eaeaea',
    },
  },
};