using CourtTime.Data;
using CourtTime.Models;
using CourtTime.Models.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace CourtTime.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MatchController : ControllerBase
{
    private CourtTimeDbContext _dbContext;

    public MatchController(CourtTimeDbContext context)
    {
        _dbContext = context;
    }

    // [HttpGet("matches/{id}")]
    // public async Task<IActionResult> GetMatch(int id)
    // {
    //     var match = await _dbContext.Matches.FindAsync(id);
    //     if (match == null)
    //     {
    //         return NotFound();
    //     }

    //     return Ok(match);
    // }

    // [HttpPost("matches")]
    // public IActionResult MakeMatch(MatchDTO matchDTO)
    // {
    //     Match newMatch = new Match
    //     {
    //         MatchLeaderId = matchDTO.MatchLeaderId,
    //         MatchOpponentId = matchDTO.MatchOpponentId,
    //         CourtId = matchDTO.CourtId,
    //         ScheduledTime = matchDTO.ScheduledTime
    //     };

    //     _dbContext.Matches.Add(newMatch);
    //     _dbContext.SaveChanges();

    //     return Ok();
    // }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetMatch(int id)
    {
        var match = await _dbContext.Matches.FindAsync(id);
        if (match == null)
        {
            return NotFound();
        }

        return Ok(match);
    }

    [HttpPost]
    public async Task<IActionResult> CreateMatch(MatchDTO matchDTO)
    {
        var match = new Match
        {
            MatchLeaderId = matchDTO.MatchLeaderId,
            MatchOpponentId = matchDTO.MatchOpponentId,
            CourtId = matchDTO.CourtId,
            ScheduledTime = matchDTO.ScheduledTime
        };

        _dbContext.Matches.Add(match);
        await _dbContext.SaveChangesAsync();

        return CreatedAtAction(nameof(GetMatch), new { id = match.Id }, match);
    }

}