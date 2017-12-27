export default class ExternalPaymentCalculator {

  static zones = {
      'Germany': 1,
      'France': 1,
      'Italy': 1,
      'Switzerland': 1,
      'Netherlands': 1,

      'United Kingdom': 2,

      'Israel': 3,
      'Egypt': 3,
      'UAE': 3,

      'China': 4,
      'Japan': 4,
      'Korea': 4,
      'Australia': 4,

      'USA': 5,
      'Canada': 5,
      'Mexico': 5,

      'Brazil': 6,
      'Argentina': 6
  };

  static fees = {
    1: 0.001,
    2: 0.005,
    3: 0.01,
    4: 0.02,
    5: 0.025,
    6: 0.04
  };

  static adjustAmount(country, amount) {
    if (!country) return amount;

    const zone = this.zones[country];
    const fee = this.fees[zone];

    return +amount + (+amount * fee);
  }
}