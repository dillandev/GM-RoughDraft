export const PublicProfileStyles = {
  container: {
    maxWidth: 700,
    margin: "0 auto",
    mt: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  card: {
    borderRadius: 2,
  },

  title: {
    fontWeight: "bold",
    mb: 3,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 3,
    width: "100%",
    alignItems: "center",
  },

  item: {
    display: "flex",
    flexDirection: "column",
    gap: 0.5,
    alignItems: "center",     
    textAlign: "center",      
  },

  label: {
    color: "text.secondary",
    fontWeight: 600,
    fontSize: "1.2rem",
  },

  value: {
    fontSize: "1rem",
  },
};