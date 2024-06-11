using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace CourtTime.Models.DTOs;

public class UserProfileDTO
{
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Address { get; set; }
    public string Email { get; set; }
    
    public string Image {get; set;}

    public double? Skill {get; set;}

    public string PhoneNum {get; set;}

    public string UserName { get; set; }
    public List<string> Roles { get; set; }

    public string IdentityUserId { get; set; }

    public IdentityUser IdentityUser { get; set; }
}