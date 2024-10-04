// require the User and Scooter classes - see where they can be used in ScooterApp.js

const Scooter = require("./Scooter");
const User = require("./User");

class ScooterApp {
  // ScooterApp code here
  constructor() {
    this.stations = {
      'london': [],
      'glasgow': [],
      'manchester': []
    }
    this.registeredUsers = {}
  }

  registerUser(username, password, age) {
    if (!this.registeredUsers[username] && age >= 18) {
      this.registeredUsers[username] = new User(username, password, age)
      console.log('user has been registered')
      return this.registeredUsers[username]
    } else if (age < 18) {
      throw new Error('too young to register')
    } else if (this.registeredUsers[username]) {
      throw new Error('already registered')
    }
  }

  loginUser(username, password) {
    const user = this.registeredUsers[username]
    if (user && user.password === password) {
      user.login(password)
      console.log('user has been logged in')
    } else if (!user || user.password !== password) {
      throw new Error('Username or password is incorrect')
    }
  }
  //   user.login(password)
  //   if (this.registeredUsers[username] && user.loggedIn === true) {
  //     console.log('user has been logged in')
  //   } else if (!this.registeredUsers[username] || user.loggedIn === false) {
  //     throw new Error('Username or password is incorrect')
  //   }
  // }

  logoutUser(username) {
    const user = this.registeredUsers[username]
    if (user) {
      user.logout()
      console.log('user is logged out')
    } else {
      throw new Error('no such user is logged in')
    }
    // const user = new User(username)
    // if (this.registeredUsers[username]) {
    //   user.logout();
    //   console.log('user is logged out')
    // } else {
    //   throw new Error('no such user is logged in')
    // }
  }

  createScooter(station) {
    const scooter = new Scooter(station)
    if (this.stations[station] === null) {
      throw new Error('no such station')
    } else {
      this.stations[station].push(scooter)
      console.log('created new scooter')
      // return scooter;
    }
  }

  dockScooter(scooter, station) {
    if (!this.stations[station]) {
      throw new Error('no such station')
    } else if (this.stations[station].includes(scooter)) {
      throw new Error('scooter already at station')
    } else {
      scooter.dock(station);
      this.stations[station].push(scooter)
      console.log('scooter is docked')
    }
  }

  rentScooter(scooter, user) {
    if (this.stations[scooter.station].includes(scooter)) {
      scooter.rent(user)
      const index = this.stations[scooter.station].indexOf(scooter)
      this.stations[scooter.station].splice(index, 1)
      console.log('scooter is rented')
    } else {
      throw new Error('scooter already rented')
    }

  }

}

module.exports = ScooterApp
