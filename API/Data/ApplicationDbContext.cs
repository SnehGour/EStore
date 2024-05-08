using Microsoft.EntityFrameworkCore;
using API.Models;

namespace API.Data;
public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public DbSet<Product> Products { get; set; }
    public DbSet<Cart> Carts { get; set; }

}