# Project Documentation

This document provides detailed information on how to use the REST API for the "Person" resource. Please refer to this documentation for request/response formats and sample API usage.

> LIVE API Endpoint is https://worried-gold-turtleneck.cyclic.app/api

## Table of Contents

- [API Endpoints](#api-endpoints)
- [Request/Response Formats](#requestresponse-formats)


## API Endpoints

The API provides the following endpoints for CRUD operations on the "Person" resource:

- **Create a Person**:
  - **POST /api/**
  - Add a new person.

- **Read a Person**:
  - **GET /api/:id**
  - Fetch details of a person by id.

- **Update a Person**:
  - **PATCH /api/:id**
  - Modify details of an existing person by id.

- **Delete a Person**:
  - **DELETE /api/:id**
  - Remove a person by id.

---

## Request/Response Formats

### Create a Person (POST /api/)

**Request Format:**

```json
{
  "name": "Abdul Olaide"
}
```

**Response Format (Success - 201):**

```json
{
  "_id": "1",
  "name": "Abdul Olaide"
}
```

### Read a Person (GET /api/:id)

**Response Format (Success - 200):**

```json
{
   "_id": "1",
  "name": "Abdul Olaide"
}
```

**Response Format (Bad request - 400):**

```json
  "Name can only be of type String"
```

```json
  "Name already exist"
```

**Response Format (Bad request - 404):**
```json
  "Person not found"
```


### Update a Person (PATCH /api/:id)

**Request Format:**

```json
{
  "name": "Abdul Ola"
}
```

**Response Format (Success - 200):**

```json
{
  "_id": "1",
  "name": "Abdul Ola"
}
```

**Response Format (Not Found - 404):**

```json
  "Person not found"
```

### Delete a Person (DELETE /api/{name})

**Response Format (Success - 200):**

```json
{
  "_id": "1",
  "name": "Abdul Ola"
}
```

**Response Format (Not Found - 404):**

```json
  "Person not found"
```