using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using CourtTime.Data;
using CourtTime.Models;
using CourtTime.Models.DTOs;

namespace CourtTime.Controllers;


[ApiController]
[Route("api/[controller]")]
public class CourtController : ControllerBase
{
    private CourtTimeDbContext _dbContext;

    public CourtController(CourtTimeDbContext context, UserManager<IdentityUser> userManager)
    {
        _dbContext = context;
    }

    [HttpGet]
    public IActionResult GetCourts()
    {
        List<Court> courts = _dbContext.Courts.ToList();

        List<CourtDTO> courtDTOs = courts.Select(c => new CourtDTO
        {
            Id = c.Id,
            Name = c.Name,
            Address = c.Address,
            Image = c.Image,
            CourtSize = c.CourtSize,
            Type = c.Type
        }).ToList();

        return Ok(courtDTOs);
    }

    [HttpGet("{id}")]
    public IActionResult GetCourtById(int id)
    {
        Court court = _dbContext.Courts.FirstOrDefault(c => c.Id == id);

        if (court == null)
        {
            return NotFound();
        }

        CourtDTO courtDTO = new CourtDTO
        {
            Id = court.Id,
            Name = court.Name,
            Address = court.Address,
            Image = court.Image,
            CourtSize = court.CourtSize,
            Type = court.Type
        };

        return Ok(courtDTO);
    }
};