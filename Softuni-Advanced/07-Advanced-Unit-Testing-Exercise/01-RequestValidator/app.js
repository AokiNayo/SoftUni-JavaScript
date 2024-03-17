function requestValidator(toValidate) {
  const validMethods = ["GET", "POST", "DELETE", "CONNECT"];
  const validHTPP = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
  const validURIRegex = /^[\w.|*]+$/;
  const validMsgRegex = /^[^<>&'"\\]*$/;

  if (!validMethods.includes(toValidate.method)) {
    throw new Error("Invalid request header: Invalid Method");
  } else if (!toValidate.uri || !validURIRegex.test(toValidate.uri)) {
    throw new Error("Invalid request header: Invalid URI");
  } else if (!validHTPP.includes(toValidate.version)) {
    throw new Error("Invalid request header: Invalid Version");
  } else if (!toValidate.hasOwnProperty('message') || !validMsgRegex.test(toValidate.message)) {
    throw new Error("Invalid request header: Invalid Message");
  }
  return toValidate;
}