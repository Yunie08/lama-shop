const setHeader = (isMultipart) => {
  //const token = localStorage.getItem("token") && localStorage.getItem("token");
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Mjk0NWQ5OGM4N2IwNTc1NDVlZjZkMDIiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NTQ0MDYzNzIsImV4cCI6MTY1NDQ3ODM3Mn0.5G5TlTSpapzv2wFbmZJOpwvSSu5Cxjh_BFPM3OeJpG4";
  const header = isMultipart
    ? {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "multipart/form-data",
        },
      }
    : { headers: { Authorization: `Bearer ${token}` } };
  return header;
};

export default setHeader;
