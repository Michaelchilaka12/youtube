exports.validateVideo = (req, res) => {
  const { url } = req.body;

  if (!url || !url.includes("youtube.com")) {
    return res.status(400).json({ success: false });
  }

  res.json({ success: true });
};

