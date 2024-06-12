using System.ComponentModel.DataAnnotations;

namespace CourtTime.Models.DTOs;

public class UserProfileEditDTO
{
    public int Id { get; set; }
    [Required]
    public string FirstName { get; set; }
    [Required]
    public string LastName { get; set; }

    public string Address {get; set;}

    public string Email {get; set;}

    public string UserName {get; set;}

    public string? Image {get; set;}

    public double? Skill {get; set;}

    public string? PhoneNum {get; set;}
}