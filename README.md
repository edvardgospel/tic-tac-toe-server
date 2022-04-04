# Tic Tac Toe Server

## Project setup
```
npm install
```

### Runs and hot-reloads for development
```
npm run server
```

### Runs and minifies for production
```
npm run build
```

## Project description
```
Provides CRUD operations and persistence layer for Game resouce
```

## Endpoints
```
GET /games/:id
  Resp: 
    200:
    {
      {
        "id": "624b166c9ce7ab96873751f4",
        "fields": ["", "", "", "", "", "", "", "", ""],
        "nextPlayer": "X"
      }
    }
    404:
    {
      "err": "Resource not found"
    }

GET /games/join
  Resp: 
    200:
    {
      {
        "id": "624b166c9ce7ab96873751f4",
        "fields": ["", "", "", "", "", "", "", "", ""],
        "nextPlayer": "X"
      }
    }
    404:
    {
      "err": "Resource not found"
    }

POST /games
  Resp: 
    200:
    {
      {
        "id": "624b166c9ce7ab96873751f4",
        "fields": ["", "", "", "", "", "", "", "", ""],
        "nextPlayer": "X"
      }
    }
    404:
    {
      "err": "Error message"
    }

PUT /games/:id
  Req:
  {
    {
      "id": "624b166c9ce7ab96873751f4",
      "fields": ["X", "", "", "", "", "", "", "", ""],
      "nextPlayer": "O"
    }
  }
  Resp:
    200:
    {
      {
        "id": "624b166c9ce7ab96873751f4",
        "fields": ["", "", "", "", "", "", "", "", ""],
        "nextPlayer": "X"
      }
    }
    400:
    {
      "err": "Missing fields"
    }
    404:
    {
      "err": "Resource not found"
    }

DELETE /games/:id
  Resp: 
    200:
    {
      {
        "id": "624b166c9ce7ab96873751f4",
        "fields": ["", "", "", "", "", "", "", "", ""],
        "nextPlayer": "X"
      }
    }
    404:
    {
      "err": "Resource not found"
    }
```

## Notes
```
- node v15.14.0 is recommended to use
- PORT and MONGO_URI environment variables must be specified
```