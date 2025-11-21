var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngular", policy =>
    {
        policy
            .WithOrigins("http://localhost:4200",
                         "http://localhost:4201",
                         "http://localhost:5173",
                         "http://localhost:5202",
                         "http://localhost:5174",
                         "http://localhost:8080",
                         "http://localhost:3000")
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials();
    });
});


builder.Services.AddControllers();

var app = builder.Build();

app.UseCors("AllowAngular");

app.MapControllers();

app.Run();
