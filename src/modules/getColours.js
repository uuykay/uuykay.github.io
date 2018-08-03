function getColours(colour) {
  let hexcode;
  if (colour === "darkgray") {
    hexcode = "#A9A9A9";
  } else if (colour === "firebrick") {
    hexcode = "#B22222";
  }

  return hexcode;
}

export default getColours;
