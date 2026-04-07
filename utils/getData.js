import path from 'node:path'
import fs from 'node:fs/promises'

export const getData = async () => {
  
  try {
    const pathJson = path.join('data', 'data.json')
    const data = await fs.readFile(pathJson, 'utf8')
    const parsedData = JSON.parse(data)
    return parsedData
    
  } catch (err) {
    console.log(err)
    return []
  }
}