# Practice API .NET 9 Project

A standalone ASP.NET Core Web API project created with .NET 9 for Git and Azure DevOps practice.

## Run locally

```powershell
cd practice-api-dotnet
dotnet run
```

Then browse `http://localhost:5148/weatherforecast` (port may vary and is shown in the console).

## Build and test

```powershell
cd C:\Users\a507101\Downloads\CRM
dotnet build practice-api-dotnet.sln
dotnet test practice-api-dotnet.sln
```

## Azure DevOps

The project includes `practice-api-dotnet/azure-pipelines.yml` as a starter pipeline.
Update the following values before using it:

- `azureSubscription` - your Azure DevOps service connection
- `appName` - your Azure App Service name

## Notes

- The project uses .NET 9, the latest installed SDK on this machine.
- A solution file `practice-api-dotnet.sln` was created at the repository root.
