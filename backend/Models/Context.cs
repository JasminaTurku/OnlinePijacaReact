
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace Models
{
   public class Context : DbContext 
    { 
        public Context(DbContextOptions<Context> options) : base(options) {}

        public DbSet<Korisnik> Korisnik {get; set; }
        public DbSet<Pijaca> Pijaca {get; set; }
        public DbSet<PijacaTipProizvoda> PijacaTipProizvoda {get; set; }
        public DbSet<Proizvod> Proizvod {get; set;}
        public DbSet<TipProizvoda> TipProizvoda {get; set; }

    }
}
