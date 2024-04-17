using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging.Configuration;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        public ProductsController(ApplicationDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            var products = await _db.products.ToListAsync();
            return Ok(products);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var product = await _db.products.FindAsync(id);
            return Ok(product);
        }

        [HttpGet("search/{query}")]
        public async Task<ActionResult<List<Product>>> SearchProducts(string query)
        {
            var lowerCaseQuery = query.ToLower();
            var products = await _db.products
                .Where(p => p.Name.ToLower().Contains(lowerCaseQuery))
                .ToListAsync();
            return Ok(products);
        }
    }
}