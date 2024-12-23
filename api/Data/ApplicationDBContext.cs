using System.IO;
using api.Migrations;
using api.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace api.Data
{
    public class ApplicationDBContext : IdentityDbContext<AppUser>
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> dbContextOptions)
            : base(dbContextOptions) { }

        public DbSet<Stock> Stocks { get; set; }
        public DbSet<Comment> Comments { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            List<IdentityRole> roles = new List<IdentityRole>
            {
                new IdentityRole { Name = "Admin", NormalizedName = "ADMIN" },
                new IdentityRole { Name = "user", NormalizedName = "USER" }
            };
            builder.Entity<IdentityRole>().HasData(roles);
        }
    }

    // //Specify ApplicationDBContext in IDesignTimeDbContextFactory<ApplicationDBContext>
    // public class ApplicationDBContextFactory : IDesignTimeDbContextFactory<ApplicationDBContext>
    // {
    //     public ApplicationDBContext CreateDbContext(string[] args)
    //     {
    //         var configuration = new ConfigurationBuilder()
    //             .SetBasePath(Directory.GetCurrentDirectory())
    //             .AddJsonFile("appsettings.json")
    //             .Build();

    //         // Specify the context type in DbContextOptionsBuilder
    //         var optionsBuilder = new DbContextOptionsBuilder<ApplicationDBContext>();
    //         optionsBuilder.UseSqlServer(configuration.GetConnectionString("DefaultConnection"));

    //         return new ApplicationDBContext(optionsBuilder.Options);
    //     }
    // }
}
