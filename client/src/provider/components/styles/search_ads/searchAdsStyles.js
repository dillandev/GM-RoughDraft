export const styles = {
  container: {
    maxWidth: '800px',
    margin: '2rem auto',
    padding: '0 1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  headerTitle: {
    fontSize: '24px',
    fontWeight: 400,
    textAlign: 'center',
    width: '100%',
    paddingBottom: '0.5rem',
    borderBottom: '1px solid #000000',
  },
  searchBoxContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: '4px',
    padding: '4px 8px',
    width: '100%',
    maxWidth: '700px',
    gap: '8px',
  },
  selectDropdown: {
    minWidth: '90px',
    backgroundColor: '#FFFFFF',
    borderRadius: '4px',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#757575',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#000000',
    },
    '& .MuiSelect-select': {
      padding: '8px 24px 8px 12px',
      fontSize: '14px',
    }
  },
  inputField: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: '4px',
    '& .MuiOutlinedInput-root': {
      '& fieldset': { border: 'none' },
    },
    '& .MuiOutlinedInput-input': {
      padding: '8px 12px',
      fontSize: '14px',
    }
  },
  searchButton: {
    minWidth: '50px',
    height: '38px',
    backgroundColor: '#FFFFFF',
    color: '#000000',
    border: '1px solid #757575',
    borderRadius: '4px',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#E0E0E0',
      borderColor: '#000000',
    }
  },
  adsSection: {
    width: '100%',
    maxWidth: '700px',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '22px',
    fontWeight: 400,
    marginBottom: '1rem',
  },
  divider: {
    borderColor: '#000000',
    marginBottom: '2rem',
    width: '60%',
    margin: '0 auto 2rem auto',
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.5rem',
    width: '100%',
  },
  adCardButton: {
    width: '100%',
    maxWidth: '300px',
    padding: '1.2rem',
    backgroundColor: '#F5F5F5',
    color: '#000000',
    borderRadius: '8px',
    border: '1px solid #757575',
    textTransform: 'none',
    fontSize: '16px',
    fontWeight: 500,
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: '#EAEAEA',
      borderColor: '#000000',
      boxShadow: 'none',
    }
  },
};