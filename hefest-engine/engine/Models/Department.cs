using System.ComponentModel.DataAnnotations;

namespace engine.Models
{
    public class Department
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
    }
}
