export const welcomeUser = (req, res) => {
  try {
    const user = req.user;

    return res.status(200).json({
      success: true,
      user: {
        username: user.username,
      },
      message: `Welcome ${user.username}`,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
};