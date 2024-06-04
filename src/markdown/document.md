# Getting a Resource

### Request
- **HTTP Method:** GET
- **Content Type:** application/json
- **URL:** `https://bch.cbddev.xyz/api/v2013/documents/{id}`

### Parameters
| Property | Type   | Required | Description       |
|----------|--------|----------|-------------------|
| id       | String | required | ID of the document|

### Request example
```javascript
fetch('https://bch.cbddev.xyz/api/v2013/documents/335B2220-77E1-1211-8A49-6656A2FFDFB9', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json))
```