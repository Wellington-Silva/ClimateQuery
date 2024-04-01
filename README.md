**EXPLICAÇÃO**  
Neste projeto é feito a consulta do clima de uma cidade que o usuário desejar. As consultas são feitas através da API Open Wearth.

**ESTRUTURA**  
A seguir esta a explicação de como é feita essa consulta:

```js

// EXEMPLO DE REQUISIÇÃO:
  "GET http://localhost:3000/climate/Lagarto"

// RESPOSTA:
{
    "coord": {
        "lon": -37.65,
        "lat": -10.9172
    },
    "weather": [{
        "id": 804,
        "main": "Clouds",
        "description": "overcast clouds",
        "icon": "04d"
    }],
    "base": "stations",
    "main": {
        "temp": 306.59,
        "feels_like": 309.45,
        "temp_min": 306.59,
        "temp_max": 306.59,
        "pressure": 1008,
        "humidity": 47,
        "sea_level": 1008,
        "grnd_level": 993
    },
    "visibility": 10000,
    "wind": {
        "speed": 4.25,
        "deg": 137,
        "gust": 4.66
    },
    "clouds": {
        "all": 99
    },
    "dt": 1711990803,
    "sys": {
        "country": "BR",
        "sunrise": 1711960467,
        "sunset": 1712003633
    },
    "timezone": -10800,
    "id": 3459342,
    "name": "Lagarto",
    "cod": 200
}
```