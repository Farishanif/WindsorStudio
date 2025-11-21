using Microsoft.AspNetCore.Mvc;

namespace WindsorApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GamesController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetGames()
        {
            var games = new[]
            {
                new { id = 1, name = "Project Neon", genre = "Action RPG" },
                new { id = 2, name = "VoidRunner", genre = "Sci-Fi Platformer" }
            };

            return Ok(games);
        }
    }
}
