# Fetching CNA Documents

### Request
- **HTTP Method:** GET
- **Content Type:** application/json
- **URL:** `https://absch.cbddev.xyz/api/v2013/documents`

### Parameters
| Property      | Type    | Required | Description                                    |
|---------------|---------|----------|------------------------------------------------|
| $filter       | String  | required | Filter query parameter                         |
| $orderby      | String  | required | Order by query parameter                       |
| $skip         | Integer | optional | Number of records to skip                      |
| $top          | Integer | optional | Maximum number of records to return            |
| cache         | Boolean | required | Cache query parameter                          |
| collection    | String  | required | Collection query parameter                     |
| Authorization | String  | required | Authorization token (format: `Ticket {Token}`) |

### Request example
```javascript
fetch('https://absch.cbddev.xyz/api/v2013/documents/?$filter=(type eq \'authority\')&$orderby=updatedOn desc&$skip=0&$top=25&cache=false&collection=my', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Ticket E89965C145F1F8021E6A2C09819111CA992A4DB2E07558C17448B9105F2FF85CD713691BB6B32E2BF386906BFB46B5B758045F33AB2380E12C0C6B523020445E37127502780BBFB4658DB12D67443CB6443DFC8704AA2CA880D6A96EAEC89FE6E42EAC4BC012D94AFCC8AAEDFD7C7EF5C83504E71CDDF2554C41A86C77CEFDBC'
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
