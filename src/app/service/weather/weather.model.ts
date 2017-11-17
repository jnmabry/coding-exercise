export class Weather {

    cityName: string;
    temp: string;
    tempHigh: string;
    tempLow: string;
    humidity: string;
    time: string;
    description: string;
    descriptionId: number;
    mainDescription: string;
    cloudiness: string;

    constructor(json: any) {
      if (json.name) { this.cityName = json.name ? json.name : ''; }
      if (json.main.temp) { this.temp = json.main.temp ? json.main.temp.toFixed(1) + '°' : ''; }
      if (json.main.temp_min) { this.tempLow = json.main.temp_min ? json.main.temp_min.toFixed(1) + '°' : ''; }
      if (json.main.temp_max) { this.tempHigh = json.main.temp_max ? json.main.temp_max.toFixed(1) + '°' : ''; }
      if (json.main.humidity) { this.humidity = json.main.humidity ? json.main.humidity + '%' : ''; }
      if (json.dt) { this.time = json.dt ? new Date(json.dt * 1000).toISOString() : null; }
      if (json.clouds.dt) { this.time = json.clouds.dt ? new Date(json.clouds.dt * 1000).toISOString() : null; }
      if (json.weather[0].description) { this.description = json.weather[0].description ? json.weather[0].description : null; }
      if (json.weather[0].id) { this.descriptionId = json.weather[0].id ? json.weather[0].id : null; }
      if (json.weather[0].main) { this.mainDescription = json.weather[0].main ? json.weather[0].main : null; }
      if (json.clouds.all) { this.cloudiness = json.clouds.all ? json.clouds.all + '%' : null; }
    }

    get color() {
      const blue = '#88D5E1';
      const grey = '#C9C9C9';
      switch (this.mainDescription) {
        case 'Thunderstorm':
          return grey;
        case 'Drizzle':
          return blue;
        case 'Rain':
          return grey;
        case 'Snow':
          return grey;
        case 'Atmosphere':
          return grey;
        case 'Clear':
          return blue;
        case 'Clouds':
          return grey;
        case 'Extreme':
          return grey;
        default:
          return blue;
      }
    }

    get icon() {
      switch (this.mainDescription) {
        case 'Thunderstorm':
          return 'wi-storm-showers';
        case 'Drizzle':
          return 'wi-rain';
        case 'Rain':
          return 'wi-raindrops';
        case 'Snow':
          return 'wi-snowflake-cold';
        case 'Atmosphere':
          return 'wi-dust';
        case 'Clear':
          return 'wi-day-sunny';
        case 'Clouds':
          return 'wi-cloudy';
        case 'Extreme':
          return 'wi-tornado';
        default:
          return 'wi-day-sunny';
      }
    }

}
