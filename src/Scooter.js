class Scooter {
  // scooter code here
  constructor(station, user = null, serial, nextSerial, charge = 100, isBroken = false) {
    this.station = station;
    this.user = user;
    this.serial = serial;
    this.nextSerial = nextSerial;
    this.charge = charge;
    this.isBroken = isBroken;

  }

  rent(user) {
    if (this.charge > 20 && this.isBroken === false) {
      this.station = null;
      this.user = user.username
    } else if (this.charge <= 20) {
      throw new Error('scooter needs to charge')
    } else if (this.charge > 20 && this.isBroken === true) {
      throw new Error('scooter needs repair')
    }
  }

  dock(station) {
    this.station = station;
    this.user = null;
  }
}

module.exports = Scooter
