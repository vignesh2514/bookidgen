function BookingidGenerator(shortname,specialcharcters,min, max) {

    let mathscal=Math.floor(Math.random() * (max - min + 1) + min);
let converstion=shortname+specialcharcters+mathscal;
   return converstion;
  }
  module.exports = BookingidGenerator;