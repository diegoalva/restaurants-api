import { fileURLToPath } from 'url'
import * as path from "path";
import fs from 'fs'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const ImageController ={
  async getImage(req, res){
    const image = req.params.image
    const pathname = path.resolve(
      dirname,
      `../imagenes/${image}`
    )

    if(await fs.existsSync(pathname)){
      res.sendFile(pathname)
    } else {
      res.status(404).json({ error: "image not found" })
    }
  }
}

export default ImageController
