using System.ComponentModel.DataAnnotations;

namespace CourtTime.Models;

    public class Match
    {
        public int Id { get; set; }
        [Required]
        public int MatchLeaderId { get; set; }
        [Required]
        public int MatchOpponentId { get; set; }
        [Required]
        public int CourtId { get; set; }
        [Required]
        public DateTime ScheduledTime { get; set; }

        public UserProfile MatchLeader { get; set; }
        public UserProfile MatchOpponent { get; set; }
        public Court Court { get; set; }
    }

