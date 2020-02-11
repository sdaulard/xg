using System;

namespace RecoveryApp.API.Models
{
    public class Photo
    {   
        public int Id { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        public DateTime DateAdded { get; set; }
        public bool IsMain { get; set; }
        // creation de la relation entre photo et user
        public User User { get; set; }
        public int UserId { get; set; }
    }
}