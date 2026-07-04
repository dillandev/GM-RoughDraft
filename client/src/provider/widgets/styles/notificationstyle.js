export const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 2,
};

export const listItemStyle = (isRead) => ({
  bgcolor: isRead ? 'inherit' : 'rgba(0, 0, 255, 0.1)',
  mb: 1,
  borderRadius: 1,
});