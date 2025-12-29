import path from 'node:path'

const serveStatic = baseDir => {
    const filepath = path.join(baseDir, 'public', 'index.html')
    console.log(filepath)
}

export default serveStatic