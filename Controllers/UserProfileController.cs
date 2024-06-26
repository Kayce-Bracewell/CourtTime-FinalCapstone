using CourtTime.Data;
using CourtTime.Models;
using CourtTime.Models.DTOs;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace CourtTime.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserProfileController : ControllerBase
    {
        private readonly CourtTimeDbContext _dbContext;
        private readonly UserManager<IdentityUser> _userManager;

        public UserProfileController(CourtTimeDbContext context, UserManager<IdentityUser> userManager)
        {
            _dbContext = context;
            _userManager = userManager;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditProfile(int id, UserProfileEditDTO editedProfile)
        {
            UserProfile userProfile = _dbContext.UserProfiles.FirstOrDefault(up => up.Id == id);

            if (userProfile == null)
            {
                return NotFound();
            }

            userProfile.FirstName = editedProfile.FirstName ?? userProfile.FirstName;
            userProfile.LastName = editedProfile.LastName ?? userProfile.LastName;
            userProfile.Address = editedProfile.Address ?? userProfile.Address;
            userProfile.Email = editedProfile.Email ?? userProfile.Email;
            userProfile.PhoneNum = editedProfile.PhoneNum ?? userProfile.PhoneNum;
            userProfile.Skill = editedProfile.Skill ?? userProfile.Skill;

            _dbContext.SaveChanges();

            // Update IdentityUser

            // _dbContext.Users
            // ^ This might be how I can find and edit the identity user properties ^
            var identityUser = await _userManager.FindByIdAsync(userProfile.IdentityUserId);
            if (identityUser != null)
            {
                identityUser.UserName = editedProfile.UserName ?? identityUser.UserName;
                identityUser.Email = editedProfile.Email ?? identityUser.Email;
                await _userManager.UpdateAsync(identityUser);
            }

            return Ok();
        }

        [HttpGet]
        public IActionResult getAllUsers()
        {
            List<UserProfileDTO> userProfiles = _dbContext.UserProfiles.Select(up => new UserProfileDTO
            {
                Id = up.Id,
                FirstName = up.FirstName,
                LastName = up.LastName,
                Address = up.Address,
                Email = up.Email,
                Image = up.Image,
                Skill = up.Skill,
                PhoneNum = up.PhoneNum
            }).ToList();

            return Ok(userProfiles);
        }
    }
}
