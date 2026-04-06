export const sendResponse = (res, status, contentType, data) => {
  res.statusCode = status
  res.setHeader('Content-Type', contentType)
  res.end(data)
}