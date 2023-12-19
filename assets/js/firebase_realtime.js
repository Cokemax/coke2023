import { App } from './Firebase/App.js'
import { Database } from './Firebase/Database.js'


const app = await App.init()
const database = new Database(app)

database.write('coke', { name: 'COKE', Age: 18, items: [1, 2, 3, 4,] })