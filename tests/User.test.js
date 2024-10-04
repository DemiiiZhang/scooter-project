const User = require('../src/User')

const user = new User('Joe Bloggs', 'test123', 21)

// User tests here
describe('User property tests', () => {
  // test username
  test('username should be a string', () => {
    expect(typeof user.username).toBe('string')
  })
  // test password
  test('password should be a string', () => {
    expect(typeof user.password).toBe('string')
  })

  // test age
  test('age should be a number', () => {
    expect(typeof user.age).toBe('number')
  })
})

// test login
describe('user methods test', () => {
  test('can login', () => {
    user.login('test123')
    expect(user.loggedIn).toBe(true)
    expect(() => {
      user.login('test12')
    }).toThrow('incorrect password')
  })

  // test logout
  test('can logout', () => {
    user.logout()
    expect(user.loggedIn).toBe(false)
  })

})