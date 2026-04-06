import path from 'node:path'
import fs from 'node:fs/promises'
import { sendResponse } from './sendResponse.js'
import { getContentType } from './getContentType.js'

export const serveStatic = async (req, res, baseDir) => {

  const publicPath = path.join(baseDir, 'public')
  const filePath = path.join(publicPath, req.url === '/' ? 'index.html' : req.url)

  const ext = getContentType(path.extname(filePath))

  try {
    const content = await fs.readFile(filePath)
    sendResponse(res, 200, ext, content)
  } catch(err) {
    if (err.code === 'ENOENT') {
      const content = await fs.readFile(path.join(publicPath, '404.html'))
      sendResponse(res, 404, ext, content)
    } else {
      sendResponse(res, 500, ext, '<html><h1>Server Error: ${err.code}</h1></html>')
    }
  } 
  
}