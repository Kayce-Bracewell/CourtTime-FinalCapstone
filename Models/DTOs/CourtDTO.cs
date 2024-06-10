using System.ComponentModel.DataAnnotations;

namespace CourtTime.Models.DTOs;
    public class CourtDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Image { get; set; }
        public string CourtSize { get; set; }
        public string Type { get; set; }
    }