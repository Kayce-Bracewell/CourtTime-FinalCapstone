using CourtTime.Data;
using CourtTime.Models;
using CourtTime.Models.DTOs;
using Microsoft.EntityFrameworkCore;
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

    [HttpGet("{id}")]
    public IActionResult GetMatch(int id)
    {
        Match match = _dbContext.Matches
            .Include(m => m.Court)
            .Include(m => m.MatchOpponent)
            .Include(m => m.MatchLeader)
            .FirstOrDefault(m => m.Id == id);

        if (match == null)
        {
            return NotFound();
        }

        MatchDTO matchDTO = new MatchDTO
        {
            Id = match.Id,
            MatchLeaderId = match.MatchLeaderId,
            MatchOpponentId = match.MatchOpponentId,
            CourtId = match.CourtId,
            ScheduledTime = match.ScheduledTime,
            Court = new CourtDTO
            {
                Id = match.Court.Id,
                Name = match.Court.Name,
                Address = match.Court.Address,
                Image = match.Court.Image,
                CourtSize = match.Court.CourtSize,
                Type = match.Court.Type
            },
            MatchOpponent = new UserProfileDTO
            {
                Id = match.MatchOpponent.Id,
                FirstName = match.MatchOpponent.FirstName,
                LastName = match.MatchOpponent.LastName,
                Email = match.MatchOpponent.Email,
                Skill = match.MatchOpponent.Skill,
                PhoneNum = match.MatchOpponent.PhoneNum
            },
            MatchLeader = new UserProfileDTO
            {
                Id = match.MatchLeader.Id,
                FirstName = match.MatchLeader.FirstName,
                LastName = match.MatchLeader.LastName,
                Email = match.MatchLeader.Email,
                Skill = match.MatchLeader.Skill,
                PhoneNum = match.MatchLeader.PhoneNum
            }
        };

        return Ok(matchDTO);
    }

    [HttpGet("user/{userId}")]
    public IActionResult GetUserMatches(int userId)
    {
        List<MatchDTO> matches = _dbContext.Matches
            .Include(m => m.Court)
            .Include(m => m.MatchLeader)
            .Include(m => m.MatchOpponent)
            .Where(m => m.MatchLeaderId == userId || m.MatchOpponentId == userId)
            .Select(m => new MatchDTO
            {
                Id = m.Id,
                MatchLeaderId = m.MatchLeaderId,
                MatchOpponentId = m.MatchOpponentId,
                CourtId = m.CourtId,
                ScheduledTime = m.ScheduledTime,
                Court = new CourtDTO
                {
                    Id = m.Court.Id,
                    Name = m.Court.Name,
                    Address = m.Court.Address,
                    Image = m.Court.Image,
                    CourtSize = m.Court.CourtSize,
                    Type = m.Court.Type
                },
                MatchOpponent = new UserProfileDTO
                {
                    Id = m.MatchOpponent.Id,
                    FirstName = m.MatchOpponent.FirstName,
                    LastName = m.MatchOpponent.LastName,
                    Email = m.MatchOpponent.Email,
                    Skill = m.MatchOpponent.Skill,
                    PhoneNum = m.MatchOpponent.PhoneNum
                },
                MatchLeader = new UserProfileDTO
                {
                    Id = m.MatchLeader.Id,
                    FirstName = m.MatchLeader.FirstName,
                    LastName = m.MatchLeader.LastName,
                    Email = m.MatchLeader.Email,
                    Skill = m.MatchLeader.Skill,
                    PhoneNum = m.MatchLeader.PhoneNum
                }
            }).ToList();

        return Ok(matches);
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

    [HttpDelete("{id}")]
    public IActionResult DeleteMatch(int id)
    {
        Match match = _dbContext.Matches.FirstOrDefault(m => m.Id == id);

        if(match == null)
        {
            return NotFound();
        }

        _dbContext.Matches.Remove(match);

        _dbContext.SaveChanges();

        return NoContent();
    }

    [HttpPut("edit")]
    public IActionResult EditMatch(MatchEditDTO matchEdit)
    {
        Match match = _dbContext.Matches.FirstOrDefault(m => m.Id == matchEdit.Id);

        if(match == null)
        {
            return NotFound();
        }

        match.MatchOpponentId = matchEdit.MatchOpponentId;
        match.CourtId = matchEdit.CourtId;
        match.ScheduledTime = matchEdit.ScheduledTime;

        _dbContext.SaveChanges();

        return NoContent();
    }

    [HttpGet("court/{id}")]
    public IActionResult CourtMatches(int id)
    {
        List<Match> matches = _dbContext.Matches
            .Include(m => m.MatchLeader)
            .Include(m => m.MatchOpponent)
            .Where(m => m.CourtId == id)
            .ToList();

        if (matches == null)
        {
            return NotFound();
        }

        List<MatchDTO> matchDTOs = matches.Select(m => new MatchDTO
        {
            Id = m.Id,
            MatchLeaderId = m.MatchLeaderId,
            MatchOpponentId = m.MatchOpponentId,
            CourtId = m.CourtId,
            ScheduledTime = m.ScheduledTime,
            MatchLeader = new UserProfileDTO
            {
                Id = m.MatchLeader.Id,
                FirstName = m.MatchLeader.FirstName,
                LastName = m.MatchLeader.LastName,
                Address = m.MatchLeader.Address,
                Skill = m.MatchLeader.Skill,
                PhoneNum = m.MatchLeader.PhoneNum
            },
            MatchOpponent = new UserProfileDTO
            {
                Id = m.MatchOpponent.Id,
                FirstName = m.MatchOpponent.FirstName,
                LastName = m.MatchOpponent.LastName,
                Address = m.MatchOpponent.Address,
                Skill = m.MatchOpponent.Skill,
                PhoneNum = m.MatchOpponent.PhoneNum
            }
        }).ToList();

        return Ok(matchDTOs);
    }
}