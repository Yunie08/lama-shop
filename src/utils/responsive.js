const sizes = {
  mobile: "380px",
  tablet: "991px",
  laptop: "1279px",
  laptopL: "1439px",
  desktop: "2560px",
};

export const getMediaQuery = (size) => {
  return `screen and (max-width: ${size})`;
};

export const device = {
  mobile: getMediaQuery(sizes.mobile),
  tablet: getMediaQuery(sizes.tablet),
  laptop: getMediaQuery(sizes.laptop),
  laptopL: getMediaQuery(sizes.laptopL),
  desktop: getMediaQuery(sizes.desktop),
  desktopL: getMediaQuery(sizes.desktopL),
};
