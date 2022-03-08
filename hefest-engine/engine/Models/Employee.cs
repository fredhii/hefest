using System.ComponentModel.DataAnnotations;

namespace engine.Models
{
    public class Employee
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Department { get; set; }
        [Required]
        public string CreatedAt { get; set; }
        [Required]
        public string UpdatedAt { get; set; }
        [Required]
        public int Salary { get; set; }
        [Required]
        public string Job { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public bool Suspended { get; set; }
        [Required]
        public string Notes { get; set; }

    }
}
