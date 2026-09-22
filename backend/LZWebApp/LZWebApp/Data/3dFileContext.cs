using LZWebApp.Models;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography.X509Certificates;

namespace LZWebApp.Data
{
        public class _3dFileContext(DbContextOptions<_3dFileContext> options) : DbContext(options)
        {
            public DbSet<_3dFile> _3dFiles => Set<_3dFile>();
        }
}
