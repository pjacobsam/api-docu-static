# Getting a Resource

### Request
- **HTTP Method:** PUT
- **Content Type:** application/json
- **URL:** `https://bch.cbddev.xyz/api/v2013/documents/x/validate?schema={schema}`

### Parameters
| Property | Type   | Required | Description       |
|----------|--------|----------|-------------------|
| schema       | String | required | Schema of the document|

### Request example
```javascript
fetch('https://bch.cbddev.xyz/api/v2013/documents/x/validate?schema=absPermit', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Ticket {Your Auth Token}'
  },
  body: JSON.stringify({
    header: {
      identifier: '83BB01FB-4B0D-34DC-1B11-E67BA99EC2AF',
      schema: 'absPermit',
      languages: ['en']
    },
    government: {
      identifier: 'us'
    }
  })
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.error('Error:', error));

```