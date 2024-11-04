
class Dado {
    constructor() {
      this.face = Math.floor(Math.random() * 6) + 1; 
    }
  
    getFace() {
      return this.face;
    }
  
    setFace(face) {
      this.face = face;
    }
  }
  

  module.exports = { Dado };