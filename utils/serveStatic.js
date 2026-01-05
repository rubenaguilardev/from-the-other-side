import path from 'node:path'
import fs from 'node:fs/promises'
import serveResponse from './serveResponse.js'

const serveStatic = async (res, baseDir) => {

    const filePath = path.join(baseDir, 'public', 'index.html')

    try {
        const content = await fs.readFile(filePath)
        serveResponse(res, 200, 'text/html', content)
    } catch(err) {
        console.log(err)
    }
}

export default serveStatic