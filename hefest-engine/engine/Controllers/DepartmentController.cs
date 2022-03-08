using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using engine.Models;
using System;

namespace engine.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        private readonly AppDBContext _dbContext;

        public DepartmentController(AppDBContext context)
        {
            _dbContext = context;
        }

        /// <summary>
        /// Get departments
        /// </summary>
        /// <remarks>
        /// Get all the company departments
        /// </remarks>
        /// <response code="200">Returns all the available departments</response>
        [HttpGet]
        [Produces("application/json")]
        public async Task<IActionResult> Get()
        {
            try
            {
                var listCards = await _dbContext.department.ToListAsync();
                Console.WriteLine(listCards);
                return Ok(listCards);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        /// <summary>
        /// Creates a new department
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///
        ///     POST
        ///     {
        ///        "name": "IT"
        ///     }
        ///
        /// </remarks>
        [HttpPost]
        [Produces("application/json")]
        public async Task<IActionResult> Post([FromBody] Department newDep)
        {
            try
            {
                _dbContext.Add(newDep);
                await _dbContext.SaveChangesAsync();
                return Ok(newDep);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        /// <summary>
        /// Updates a department
        /// </summary>
        /// <param name="id"></param>
        /// <param name="department"></param>
        /// <remarks>
        /// Sample request:
        ///
        ///     PUT
        ///     {
        ///        "id": 2
        ///        "name": "Software"
        ///     }
        ///
        /// </remarks>
        [HttpPut("{id}")]
        [Produces("application/json")]
        public async Task<IActionResult> Put(int id, [FromBody] Department department)
        {
            if (id != department.Id)
            {
                return NotFound();
            }
            try
            {
                _dbContext.Update(department);
                await _dbContext.SaveChangesAsync();
                return Ok(new { message = "Succesfully updated" });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        /// <summary>
        /// Deletes a department
        /// </summary>
        /// <param name="id"></param>
        /// <remarks>
        /// Deletes a department with a given identification
        /// </remarks>
        [HttpDelete("{id}")]
        [Produces("application/json")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var department = await _dbContext.department.FindAsync(id);
                if (department == null)
                {
                    return NotFound();
                }
                _dbContext.department.Remove(department);
                await _dbContext.SaveChangesAsync();
                return Ok(new { message = "Department succesfully deleted" });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
