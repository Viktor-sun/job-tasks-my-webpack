const isOk: boolean = true
let num: number = 10
const employeeName: string = 'John Smith'

const temps: readonly number[] = [12, 23, 45, 89, 56]
const nums: Array<number> = [12, 12, 12, 123, 45]
const str: string[] = ['as', 'asf', 'as', 'asf', 'as', 'f', 'a', 'sf']
const numsOrStr: (string | number)[] = [12, 12, 1, 21, 'asf']

const rgb: [number, number, number] = [122, 122, 0]

type ID = string
const userId: ID = 'asf'

type ReqStatus = 'request' | 'success' | 'error'
const requestStatus: ReqStatus = 'error'

// Interfaces
interface PluginConfig {
  readonly selector: string
  perPage: number
  startIndex?: number
  draggable?: boolean
}

const config: PluginConfig = {
  selector: '#plugin-1',
  perPage: 2,
  // startIndex: 0,
  // draggable: false,
}

interface Employees {
  [key: string]: number
}

const employees: Employees = {
  mango: 5,
  poly: 10,
  ajax: 15,
  wiki: 20,
}

// Enum
enum PizzaSize {
  Small = 's',
  Medium = 'm',
  Large = 'l',
}

PizzaSize.Small
