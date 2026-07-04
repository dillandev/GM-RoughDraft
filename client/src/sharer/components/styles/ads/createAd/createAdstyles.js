// SharerCreateAd.styles.js

export const styles = {
  pageContainer: {
    width: '100%',
    minHeight: '100vh',
    bgcolor: '#fff',
    position: 'relative',
    pb: 4,
  },
  header: {
    py: 1.5,
    textAlign: 'center',
    borderBottom: '1px solid #000',
  },
  headerTitle: {
    fontSize: '1.25rem',
  },
  formContainer: {
    maxWidth: 450,
    mx: 'auto',
    mt: 12,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 2,
    textAlign: 'center',
    px: 2,
  },
  labelText: {
    fontSize: '1.1rem',
  },
  dropdown: {
    width: '220px',
    textAlign: 'left',
    bgcolor: '#fff',
  },
  orDivider: {
    my: 1,
    fontWeight: 'bold',
  },
  inputField: {
    width: '220px',
    bgcolor: '#fff',
  },
  inputOverride: {
    textAlign: 'center',
  },
  submitButton: {
    mt: 4,
    bgcolor: '#000',
    color: '#fff',
    px: 4,
    '&:hover': {
      bgcolor: '#333',
    },
  },
};