const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')
const Scooter = require('../src/Scooter')

const scooterApp = new ScooterApp()
// ScooterApp tests here

// register user
describe('registerUser method tests', () => {
  test('Should return instance of User', () => {
    const response = scooterApp.registerUser('Joe Bloggs', 'test123', 21)
    expect(response).toBeInstanceOf(User)
  })
})


describe('ScooterApp methods test', () => {

  // log in
  test('can log in', () => {
    scooterApp.loginUser('Joe Bloggs', 'test123')
    expect(scooterApp.registeredUsers['Joe Bloggs'].loggedIn).toBe(true)
  })

  // log out
  test('can log out', () => {
    scooterApp.logoutUser('Joe Bloggs')
    expect(scooterApp.registeredUsers['Joe Bloggs'].loggedIn).toBe(false)
  })


  // rent scooter
  test('can rent', () => {
    const scooter = new Scooter()
    scooterApp.createScooter('london')
    scooterApp.rentScooter(scooter, 'demi')
    // expect(() => {
    //   scooterApp.rentScooter(scooter, 'demi')
    // }).toThrow('scooter already rented')
    expect(scooterApp.stations['london'].includes(scooter)).toBe(false)
    expect(scooter.user).toBe('demi')
  })

  // dock scooter
  test('can dock', () => {
    const scooter = new Scooter()
    scooterApp.dockScooter(scooter, 'london')
    expect(scooterApp.stations['london'].includes(scooter)).toBe(true)
  })
})