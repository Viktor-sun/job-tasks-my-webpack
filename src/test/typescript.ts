const isOk: boolean = true
let num: number = 10
const employeeName: string = 'John Smith'

// arr
const temps: readonly number[] = [12, 23, 45, 89, 56]
const nums: Array<number> = [12, 12, 12, 123, 45]
const str: string[] = ['as', 'asf', 'as', 'asf', 'as', 'f', 'a', 'sf']
const numsOrStr: (string | number)[] = [12, 12, 1, 21, 'asf']

const rgb: [number, number, number] = [122, 122, 0]

// types
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

// foo
type addFn = (a: number, b: number) => number

const addExpression: addFn = function (x, y) {
  return x + y
}

const addArrow = (x: number, y: number) => {
  return x + y
}

const restParams = (x: number, y: number, ...rest: number[]) => {
  return x + y
}

type restFu = (x: number, y: number, ...rest: number[]) => number
const restParams2: restFu = (x, y, ...rest) => {
  return x + y
}

const returnUndefined = (): void | number => {}

// methods

interface IPizza {
  size: 'small' | 'medium' | 'large'
  toppings: string[]
  logSize(): void /*() => void */
  getSize(): string
  addTopping(topping: string): void
}

const pizza: IPizza = {
  size: 'medium',
  toppings: ['sause', 'mushrooms'],
  logSize() {
    console.log(this.size)
  },
  getSize() {
    return this.size
  },
  addTopping(topping) {
    this.toppings.push(topping)
  },
}

// class

interface IParams {
  size: string
  toppings: string[]
}

interface IPizza2 {
  size: string
  toppings: string[]
  addToppings(topping: string): void
}

class Pizza implements IPizza2 {
  public size: string
  toppings: string[]

  constructor({ size, toppings }: IParams) {
    this.size = size
    this.toppings = toppings
  }

  addToppings(topping: string) {
    this.toppings.push(topping)
  }
}

// generics
const reverse = <T>(arr: T[]) => {
  return [...arr].reverse()
}

reverse([1, 2, 3, 3, 4, 5])
reverse(['Mango', 'Stepa'])

const isEqual = <T, Y>(a: T, b: Y) => {
  return Object.is(a, b)
}

isEqual<number, number>(3, 3)
isEqual(3, '3')

const foo = <T>(mult: number, ...rest: T[]) => {}

foo(2, [1, 2, 3])

// extending generics
const logLength = <T extends { length: number }>(arg: T) => {
  console.log(arg.length)
}

interface ILength {
  length: number
}
const logLength2 = <T extends ILength>(arg: T) => {
  console.log(arg.length)
}

const addFullName = <P extends { firstName: string; lastName: string }>(
  person: P,
) => {
  return {
    ...person,
    fullName: `${person.firstName} ${person.lastName}`,
  }
}

// generic interfaces
interface User<T> {
  id: T
}

const mango: User<number> = { id: 24 }
const poly: User<string> = { id: 'asfsa' }

interface Tab<T> {
  id: string
  position: number
  active: boolean
  content: T
}

const tab1: Tab<string> = {
  id: 'as',
  position: 2,
  active: false,
  content: 'tab data',
}

const tab2: Tab<string[]> = {
  id: 'as',
  position: 2,
  active: false,
  content: ['tab data', 'saff'],
}

// class generic

class State<S> {
  private state: S

  constructor(initialState: S) {
    this.state = initialState
  }

  getState() {
    return this.state
  }

  setState(newState: S) {
    this.state = newState
  }
}

type TAnimationState = 'playing' | 'paused'
type THttpState = 'request' | 'success' | 'error'

const animationState = new State<TAnimationState>('playing')
animationState.setState('paused')
// animationState.setState("request"); // ошибка

const httpState = new State<THttpState>('success')
httpState.setState('request')
// httpState.setState("playing"); // ошибка
