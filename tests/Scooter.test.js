const Scooter = require('../src/Scooter')
const User = require('../src/User')

// typeof scooter === object
describe('scooter object', () => {
  test('Scooter class should create Scooter instance', () => {
    const scooter = new Scooter()
    expect(scooter).toBeInstanceOf(Scooter)
  })
})

// Method tests
describe('scooter methods', () => {
  // tests here!

  // rent method
  test('can rent', () => {
    const scooter = new Scooter('london', 'demi', charge = 80)
    const user = new User('demi', 123, 27)
    scooter.rent(user)
    expect(scooter.station).toBe(null)
    expect(scooter.user).toBe('demi')
  })

  // dock method
  test('can dock', () => {
    const scooter = new Scooter(null, 'demi')
    scooter.dock('glasgow')
    expect(scooter.station).toBe('glasgow')
    expect(scooter.user).toBe(null)

  })

  // requestRepair method

  // charge method

})
