using Microsoft.EntityFrameworkCore;
using engine.Models;

namespace engine
{
    /// <summary>
    /// Initializes the database
    /// </summary>
    public class AppDBContext: DbContext
    {
        public DbSet<Department> department { get; set; }
        public DbSet<Employee> employee { get; set; }
        public AppDBContext(DbContextOptions<AppDBContext> options): base(options)
        {
            
        }
    }
}
