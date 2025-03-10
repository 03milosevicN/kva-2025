export class AirlineService {

  static getAirlines() {

    return [
      {
        id: 1,
        name: 'Air Serbia',
        countryOfOrigin: 'Serbia',
        website: 'https://www.airserbia.com/sr_latin_RS',
      },
      {
        id: 2,
        name: 'KLM Royal Dutch',
        countryOfOrigin: 'Netherlands',
        website: 'https://serbia.klm.com/',
      },
      {
        id: 3,
        name: 'Turkish Airlines',
        countryOfOrigin: 'Turkey',
        website: 'https://www.turkishairlines.com/',
      },
      {
        id: 4,
        name: 'SWISS',
        countryOfOrigin: 'Switzerland',
        website: 'https://www.swiss.com/rs/en/homepage',
      }
    ]


  }

  static getAirlineById(id: number) {
    return this.getAirlines().find(airline => airline.id === id);
  }

}
