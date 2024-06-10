using System.ComponentModel.DataAnnotations;

namespace CourtTime.Models.DTOs;

    public class MatchDTO
    {
        public int Id { get; set; }
        [Required]
        public int MatchLeaderId { get; set; }
        [Required]
        public int MatchOpponentId { get; set; }
        [Required]
        public int CourtId { get; set; }
        [Required]
        public string ScheduledTime { get; set; }

        public UserProfile MatchLeader { get; set; }
        public UserProfile MatchOpponent { get; set; }
        public Court Court { get; set; }
    }

