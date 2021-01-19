import fs from 'fs';
import imgObject from './imageObject.json'

export default function handler(req, res) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(imgObject))
}