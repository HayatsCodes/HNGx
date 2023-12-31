# Stage 1

### Objective

Create and host an endpoint.The endpoint takes two GET request query parameters and return specific information in JSON format.

### Requirements
The information required includes:
- Slack name
- Current day of the week
- Current UTC time (with validation of +/-2)
- Track
- The GitHub URL of the file being run
- The GitHub URL of the full source code.
- A Status Code of Success

### Sample Response

```
{
  "slack_name": "Hayats Codes",
  "current_day": "Monday",
  "utc_time": "2023-08-21T15:04:05Z",
  "track": "backend",
  "github_file_url": "https://github.com/hayatscodes/HNGx/blob/main/stage-1/src/app.js",
  "github_repo_url": "https://github.com/username/HNGx",
  "status_code": "200"
}
```
