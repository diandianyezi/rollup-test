import { sayHello } from './modules/foo.js'
import { version } from '../package.json'
import _ from 'lodash'
import Greeter from './modules/Greeter'

const a = new Greeter()
a.greet()
// export default function () {
    const res = [1,2,3].sort((a,b) => b-a ).join(',')
    console.log('version' + version, res)

    const arr = _.concat([1,2,3], 4, [5])
    sayHello('helle' + arr)
// }