# Practice API Project

A standalone Node.js API project for Git checkins and Azure DevOps pipeline practice.

## API Endpoints

- `GET /health` - health status
- `GET /hello` - hello message
- `POST /echo` - returns the posted JSON payload

## Run locally

```bash
cd practice-api
npm install
npm test
npm start
```

Open `http://localhost:3000/hello` after starting.

## Azure DevOps

This folder includes a pipeline definition: `practice-api/azure-pipelines.yml`.
Update `azureSubscription` and `appName` before deploying.
