using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace CourtTime.Models;

public class UserProfile
{
    public int Id { get; set; }
    [Required]
    public string FirstName { get; set; }
    [Required]
    public string LastName { get; set; }

    public string? Image {get; set;}

    public double Skill {get; set;}

    public string? PhoneNum {get; set;}

    public string IdentityUserId { get; set; }

    public IdentityUser IdentityUser { get; set; }
}