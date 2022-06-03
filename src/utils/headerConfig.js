const setHeader = (isMultipart) => {
  //const token = localStorage.getItem("token") && localStorage.getItem("token");
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Mjk0NWQ5OGM4N2IwNTc1NDVlZjZkMDIiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NTQyMzkwNTMsImV4cCI6MTY1NDMxMTA1M30.x2vBmqVdd1Co94nm7mEM-mH4-2kR0DJV3JAMNm0Mss0";
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
