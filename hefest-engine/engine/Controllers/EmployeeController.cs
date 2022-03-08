using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using engine.Models;
using System;

namespace engine.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly AppDBContext _dbContext;

        public EmployeeController(AppDBContext context)
        {
            _dbContext = context;
        }

        /// <summary>
        /// Get employees
        /// </summary>
        /// <remarks>
        /// Get all the company employees
        /// </remarks>
        /// <response code="200">Returns all the available employees</response>
        [HttpGet]
        [Produces("application/json")]
        public async Task<IActionResult> Get()
        {
            try
            {
                var listEmp = await _dbContext.employee.ToListAsync();
                Console.WriteLine(listEmp);
                return Ok(listEmp);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        /// <summary>
        /// Creates a new employee
        /// </summary>
        /// <remarks>
        /// Sample request:
        ///
        ///     POST
        ///     {
        ///        "name": "John Doe",
        ///        "department": "IT",
        ///        "createdAt": "02-10-2021",
        ///     }
        ///
        /// </remarks>
        [HttpPost]
        [Produces("application/json")]
        public async Task<IActionResult> Post([FromBody] Employee newEmp)
        {
            try
            {
                _dbContext.Add(newEmp);
                await _dbContext.SaveChangesAsync();
                return Ok(newEmp);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        /// <summary>
        /// Updates an employee
        /// </summary>
        /// <param name="id"></param>
        /// <param name="employee"></param>
        /// <remarks>
        /// Sample request:
        ///
        ///     PUT
        ///     {
        ///        "id": 2
        ///        "name": "John Doe",
        ///        "department": "Software",
        ///        "createdAt": "02-10-2021",
        ///     }
        ///
        /// </remarks>
        [HttpPut("{id}")]
        [Produces("application/json")]
        public async Task<IActionResult> Put(int id, [FromBody] Employee employee)
        {
            if (id != employee.Id)
            {
                return NotFound();
            }
            try
            {
                _dbContext.Update(employee);
                await _dbContext.SaveChangesAsync();
                return Ok(new { message = "Succesfully updated" });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        /// <summary>
        /// Deletes an employee
        /// </summary>
        /// <param name="id"></param>
        /// <remarks>
        /// Deletes an employee with a given identification
        /// </remarks>
        [HttpDelete("{id}")]
        [Produces("application/json")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var employee = await _dbContext.employee.FindAsync(id);
                if (employee == null)
                {
                    return NotFound();
                }
                _dbContext.employee.Remove(employee);
                await _dbContext.SaveChangesAsync();
                return Ok(new { message = "Employee succesfully deleted" });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
