using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using CourtTime.Models;
using Microsoft.AspNetCore.Identity;

namespace CourtTime.Data;
public class CourtTimeDbContext : IdentityDbContext<IdentityUser>
{
    private readonly IConfiguration _configuration;
    public DbSet<UserProfile> UserProfiles { get; set; }

    public DbSet<Court> Courts {get; set;}

    public DbSet<Match> Matches {get; set;}

    public CourtTimeDbContext(DbContextOptions<CourtTimeDbContext> context, IConfiguration config) : base(context)
    {
        _configuration = config;
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<IdentityRole>().HasData(new IdentityRole
        {
            Id = "c3aaeb97-d2ba-4a53-a521-4eea61e59b35",
            Name = "Admin",
            NormalizedName = "admin"
        });

        modelBuilder.Entity<IdentityUser>().HasData(new IdentityUser
        {
            Id = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
            UserName = "Administrator",
            Email = "admina@strator.comx",
            PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, _configuration["AdminPassword"])
        });

        modelBuilder.Entity<IdentityUserRole<string>>().HasData(new IdentityUserRole<string>
        {
            RoleId = "c3aaeb97-d2ba-4a53-a521-4eea61e59b35",
            UserId = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f"
        });
        
        modelBuilder.Entity<UserProfile>().HasData(new UserProfile
        {
            Id = 1,
            IdentityUserId = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
            FirstName = "Kayce",
            LastName = "Bracewell",
            Skill = 4.0,
            PhoneNum = "(621)789-3733"
        });

        modelBuilder.Entity<Court>().HasData(
            new Court { Id = 1, Name = "Nashville Central Tennis Courts", Address = "123 Main St, Nashville, TN", Image = "nashville_central.jpg", CourtSize = "Standard", Type = "Hard" },
            new Court { Id = 2, Name = "Memphis Riverside Tennis Club", Address = "456 Riverside Dr, Memphis, TN", Image = "memphis_riverside.jpg", CourtSize = "Standard", Type = "Clay" },
            new Court { Id = 3, Name = "Knoxville Tennis Center", Address = "789 Volunteer Blvd, Knoxville, TN", Image = "knoxville_center.jpg", CourtSize = "Standard", Type = "Grass" },
            new Court { Id = 4, Name = "Chattanooga Valley Tennis Courts", Address = "1011 Valley Rd, Chattanooga, TN", Image = "chattanooga_valley.jpg", CourtSize = "Standard", Type = "Hard" },
            new Court { Id = 5, Name = "Clarksville Tennis Academy", Address = "1213 Academy St, Clarksville, TN", Image = "clarksville_academy.jpg", CourtSize = "Standard", Type = "Clay" },
            new Court { Id = 6, Name = "Murfreesboro Tennis Club", Address = "1415 Oak St, Murfreesboro, TN", Image = "murfreesboro_club.jpg", CourtSize = "Standard", Type = "Grass" },
            new Court { Id = 7, Name = "Franklin Community Tennis Courts", Address = "1617 Main St, Franklin, TN", Image = "franklin_community.jpg", CourtSize = "Standard", Type = "Hard" },
            new Court { Id = 8, Name = "Jackson City Tennis", Address = "1819 Court St, Jackson, TN", Image = "jackson_city.jpg", CourtSize = "Standard", Type = "Clay" },
            new Court { Id = 9, Name = "Johnson City Tennis Courts", Address = "2021 University Pkwy, Johnson City, TN", Image = "johnson_city.jpg", CourtSize = "Standard", Type = "Grass" },
            new Court { Id = 10, Name = "Bartlett Tennis Club", Address = "2223 Elm St, Bartlett, TN", Image = "bartlett_club.jpg", CourtSize = "Standard", Type = "Hard" },
            new Court { Id = 11, Name = "Hendersonville Heights Tennis Courts", Address = "2425 Lake Rd, Hendersonville, TN", Image = "hendersonville_heights.jpg", CourtSize = "Standard", Type = "Clay" },
            new Court { Id = 12, Name = "Germantown Tennis Stadium", Address = "2627 Germantown Rd, Germantown, TN", Image = "germantown_stadium.jpg", CourtSize = "Standard", Type = "Grass" }
        );
    }
}