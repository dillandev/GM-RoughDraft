export const myAdsStyles = {
  mainContainer: {
    padding: '20px',
    backgroundColor: '#FFF',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '40px',
  },
  headerContainer: {
    width: '100%',
    textAlign: 'center',
    borderBottom: '1px solid #000',
    paddingBottom: '10px',
  },
  headerText: {
    fontSize: '24px',
  },
  adItem: {
    width: '400px',
    backgroundColor: '#F5F5F5',
    border: '1px solid #000',
    borderRadius: '8px',
    padding: '20px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  },
  adCategoryText: {
    fontSize: '20px',
  },
  deleteButton: {
    color: '#000',
    textTransform: 'none',
    backgroundColor: '#FFF',
    border: '1px solid #000',
    borderRadius: '0px', // Matches your sharp wireframe look
    padding: '2px 25px',
    '&:hover': {
      backgroundColor: '#E0E0E0',
    },
  },
  footerText: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    fontSize: '14px',
  },
};