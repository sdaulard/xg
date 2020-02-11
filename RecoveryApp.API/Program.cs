using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RecoveryApp.API.Data;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace RecoveryApp.API
{
    public class Program
    {
        public static void Main(string[] args)
        {
           // seedind db au démarrage de l'application
           var host =  CreateHostBuilder(args).Build();
           using (var scope = host.Services.CreateScope())
           {
               var services = scope.ServiceProvider;
               try
               {
                   var context = services.GetRequiredService<DataContext>();
                   context.Database.Migrate();
                   seed.SeedUsers(context);
               }
               catch (Exception ex)
               {
                   var logger = services.GetRequiredService<ILogger<Program>>();
                   logger.LogError(ex, "an error occured during the migration");                   
               }
           }
           host.Run();

        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
