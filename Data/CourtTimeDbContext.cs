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
            Address = "4468 Temple Rd.",
            Email = "kayceb@gmail.com",
            Skill = 4.0,
            PhoneNum = "(621)789-3733"
        });

        modelBuilder.Entity<Court>().HasData(
            new Court { Id = 1, Name = "Nashville Central Tennis Courts", Address = "123 Main St, Nashville, TN", Image = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Tennis_courts_at_Centennial_Sportsplex.jpg/1200px-Tennis_courts_at_Centennial_Sportsplex.jpg", CourtSize = "Standard", Type = "Hard" },
            new Court { Id = 2, Name = "East Nashville Tennis Club", Address = "456 Riverside Dr, Nashville, TN", Image = "https://www.wkrn.com/wp-content/uploads/sites/73/2022/08/Spring-Hill-tennis-development.jpg?w=900", CourtSize = "Standard", Type = "Clay" },
            new Court { Id = 3, Name = "West End Tennis Center", Address = "789 West End Ave, Nashville, TN", Image = "https://www.sayvilleschools.org/cms/lib/NY02205481/Centricity/ModuleInstance/36413/large/mstc2.jpg?rnd=0.124836626986431", CourtSize = "Standard", Type = "Grass" },
            new Court { Id = 4, Name = "Belmont Tennis Courts", Address = "1011 Belmont Blvd, Nashville, TN", Image = "https://images.squarespace-cdn.com/content/v1/5da5ec373a95ae6d8896a01e/1674655479911-XKCFOXJXBZH8RT4H5WXA/DJI_0587.JPG", CourtSize = "Standard", Type = "Hard" },
            new Court { Id = 5, Name = "Vanderbilt Tennis Academy", Address = "1213 Vanderbilt Pl, Nashville, TN", Image = "https://lipscombsports.com/images/2020/5/26/TennisComplex1.jpg?preset=large.socialmediaimage", CourtSize = "Standard", Type = "Clay" },
            new Court { Id = 6, Name = "Brentwood Tennis Club", Address = "1415 Oak St, Brentwood, TN", Image = "https://d2114hmso7dut1.cloudfront.net/customers/b4646402-ea8d-11ed-bec3-0614187498c1/sites/b470533e-ea8d-11ed-a9ae-0614187498c1/files/9b5c0730-eb64-11ed-9d8e-a59b9fd26edf/_thumbnails/1280.webp?t=1683305290&original_extension=png", CourtSize = "Standard", Type = "Grass" },
            new Court { Id = 7, Name = "Franklin Community Tennis Courts", Address = "1617 Main St, Franklin, TN", Image = "https://d1ja9tyo8nbkbc.cloudfront.net/50513653_S0035/S0035/S0035-R0100/RTC2637758/660c142006ad0445e3b02e70.jpg?version=1712068686&width=640", CourtSize = "Standard", Type = "Hard" },
            new Court { Id = 8, Name = "Green Hills Tennis Courts", Address = "1819 Hillsboro Rd, Nashville, TN", Image = "https://www.novasports.com/wp-content/uploads/UT3-Copy-4-1024x768.jpg", CourtSize = "Standard", Type = "Clay" },
            new Court { Id = 9, Name = "Belle Meade Tennis Courts", Address = "2021 Harding Pike, Nashville, TN", Image = "https://cdn.synthetic-turf.com/uploads/2013/11/22064524/Tennis-court11.jpg", CourtSize = "Standard", Type = "Grass" },
            new Court { Id = 10, Name = "Hermitage Tennis Club", Address = "2223 Lebanon Pike, Nashville, TN", Image = "https://assets.simpleviewinc.com/simpleview/image/upload/crm/napavalley/SilveradoResortandSpa_KT-208_34CEA051-F9D8-4657-BA66AB13B30AB737_436c29dd-fbb8-4ad4-b21be972570ea72f.jpg", CourtSize = "Standard", Type = "Hard" },
            new Court { Id = 11, Name = "Hendersonville Heights Tennis Courts", Address = "2425 Lake Rd, Hendersonville, TN", Image = "https://www.campwidji.org/sites/campwidji/files/2020-02/tennis-yo-730.jpg", CourtSize = "Standard", Type = "Clay" },
            new Court { Id = 12, Name = "Germantown Tennis Stadium", Address = "2627 Germantown Rd, Nashville, TN", Image = "https://transform.octanecdn.com/width/1600/https://octanecdn.com/turftekusacom/turftekusacom_610595326.jpg", CourtSize = "Standard", Type = "Grass" }
        );
    }
}