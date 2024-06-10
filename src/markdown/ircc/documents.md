# Fetching ABS Permit Documents

### Request
- **HTTP Method:** GET
- **Content Type:** application/json
- **URL:** `http://localhost:2010/api/v2013/documents`

### Parameters
| Property      | Type    | Required | Description                                    |
|---------------|---------|----------|------------------------------------------------|
| $filter       | String  | required | Filter query parameter                         |
| $orderby      | String  | required | Order by query parameter                       |
| cache         | Boolean | optional | Cache query parameter                          |
| collection    | String  | required | Collection query parameter                     |
| Authorization | String  | required | Authorization token (format: `Ticket {Token}`) |

### Request example
```javascript
fetch('http://localhost:2010/api/v2013/documents/?$filter=(type eq \'absPermit\')&$orderby=updatedOn desc&cache=false&collection=mydraft', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Ticket {Token}'
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json))
