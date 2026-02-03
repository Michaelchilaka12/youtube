export function getYouTubeVideoId(url) {
  try {
    const parsedUrl = new URL(url);

    // youtube.com/watch?v=ID
    if (parsedUrl.searchParams.get("v")) {
      return parsedUrl.searchParams.get("v");
    }

    // youtu.be/ID
    if (parsedUrl.hostname === "youtu.be") {
      return parsedUrl.pathname.substring(1);
    }

    // youtube.com/embed/ID or /shorts/ID
    const pathParts = parsedUrl.pathname.split("/");
    return pathParts[pathParts.length - 1];
  } catch {
    return null;
  }
}
