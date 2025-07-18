# Lab: Client-Server Application – Event Catalog

## Overview

This lab demonstrates a simple full-stack application using Flask (Python) as the back end and vanilla HTML/JS as the front end. Users can view a list of events and add new ones using a dynamic form that interacts with the Flask API via HTTP requests.

---

## Learning Goals

- Serve API responses using Flask
- Handle GET and POST routes with JSON data
- Connect front-end and back-end using `fetch()`
- Dynamically render and update the DOM
- Validate and structure responses with proper status codes

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repo-url>
cd course-8-module-6-connect-client-server-lab
```

### 2. Create and Activate Your Environment

**Using Pipenv:**

```bash
pipenv install
pipenv shell
```

Or use `python -m venv` and `pip install -r requirements.txt` if preferred.

---

## Running the Server

```bash
python server.py
```

This starts the Flask API at `http://127.0.0.1:5000`.

---

## Viewing the Front End

Open `client/index.html` using the **Live Server** VSCode extension (or right-click → Open with Live Server).  
This ensures the JavaScript can make cross-origin requests to the Flask API.

---

## Running the Tests

To verify that the back-end API behaves correctly:

```bash
pytest
```

All tests must pass to complete the lab.

---

## API Routes

### `GET /`

Returns a JSON welcome message.

### `GET /events`

Returns a list of all events in JSON format.

### `POST /events`

Accepts a JSON payload with a `"title"` key. Returns the newly created event with status `201`.

#### Example Payload

```json
{
  "title": "New Event"
}
```

#### Example Response

```json
{
  "id": 3,
  "title": "New Event"
}
```

If the `"title"` key is missing, a `400 Bad Request` is returned.

---

## File Structure

```
.
├── client/
│   ├── index.html
│   ├── script.js
│   └── styles.css
├── server.py
├── tests/
│   └── test_app.py
├── Pipfile
├── Pipfile.lock
└── README.md
```

---

## Notes

- The app uses in-memory Python lists to simulate a database.
- All events reset when the server restarts.
- Live Server is required to test full front-end functionality locally.

---

## Author

Andrew Snyder  
Flatiron School
