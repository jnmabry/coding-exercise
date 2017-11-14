export class Weather {

    cityName: string;
    temp: string;
    humidity: string;
    time: string;
    description: string;
    descriptionId: number;
    cloudiness: string;

    constructor(json: any) {
      if (json.name) { this.cityName = json.name ? json.name : ''; }
      if (json.main.temp) { this.temp = json.main.temp ? json.main.temp + '°' : ''; }
      if (json.main.humidity) { this.humidity = json.main.humidity ? json.main.humidity + '%' : ''; }
      if (json.dt) { this.time = json.dt ? new Date(json.dt * 1000).toISOString() : null; }
      if (json.clouds.dt) { this.time = json.clouds.dt ? new Date(json.clouds.dt * 1000).toISOString() : null; }
      if (json.weather[0].main) { this.description = json.weather[0].main ? json.weather[0].main : null; }
      if (json.weather[0].id) { this.descriptionId = json.weather[0].id ? json.weather[0].id : null; }
      if (json.clouds.all) { this.cloudiness = json.clouds.all ? json.clouds.all + '%' : null; }
    }

}
