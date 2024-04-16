# EStore

EStore is a web application for managing an online store.

## Project Structure

The project is divided into two main parts:

1. `API`: This is the backend of the application, written in C#. It includes the following important files and directories:
    - [`API.csproj`](API/API.csproj): The project file.
    - [`appsettings.json`](API/appsettings.json) and [`appsettings.Development.json`](API/appsettings.Development.json): Configuration files.
    - [`Controllers/ProductsController.cs`](API/Controllers/ProductsController.cs): A controller for managing products.
    - [`Data/ApplicationDbContext.cs`](API/Data/ApplicationDbContext.cs): The application's database context.
    - [`Migrations`](API/Migrations): Contains database migration files.
    - [`Models/Product.cs`](API/Models/Product.cs): The Product model.
    - [`Program.cs`](API/Program.cs): The main entry point for the application.

2. `client`: This is the frontend of the application. It includes the following important files and directories:
    - [`package.json`](client/package.json): The project file for the client.
    - [`public`](client/public): Contains static files for the frontend.
    - [`src`](client/src): Contains the source code for the frontend.

## How to Run

To run the application, follow these steps:

1. Navigate to the `API` directory and run the command `dotnet run` to start the backend.
2. In a separate terminal, navigate to the `client` directory and run the command `npm start` to start the frontend.

## How to Contribute

If you want to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes.
4. Submit a pull request.

## License

This project is licensed under the MIT License.