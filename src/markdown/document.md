# Fetching Documents

## Endpoint

**GET** `/api/v2013/documents/:uid`

## Headers

| Field           | Type   | Description                                                                                              |
|-----------------|--------|----------------------------------------------------------------------------------------------------------|
| Accept          | String | Result format. Allowed values: `*`, `application/json`. `*` indicates raw data as submitted.             |
| Realm (optional)| String | Context in which the Clearing-House request is made. Allowed values: `ABS`, `CHM`.                        |

## URL Parameter

| Field | Type   | Description                                                                                  |
|-------|--------|----------------------------------------------------------------------------------------------|
| uid   | String | Identifier of the document. The value is case-sensitive. Allowed values: `/^[A-Za-z0-9\-_]{11,128}$/` |
