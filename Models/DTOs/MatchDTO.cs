namespace CourtTime.Models.DTOs;

    public class MatchDTO
    {
        public int Id { get; set; }

        public int MatchLeaderId { get; set; }

        public int MatchOpponentId { get; set; }

        public int CourtId { get; set; }

        public string ScheduledTime { get; set; }

        public CourtDTO Court {get; set;}

        public UserProfileDTO MatchOpponent {get; set;}
    }

