using System;
using Microsoft.AspNetCore.Mvc;

namespace WindsorApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GamesController : ControllerBase
    {
        [HttpGet]
        public IActionResult getAllGames()
        {
            var games = new[]
            {
                new 
                {
                    id = 1,
                    title = "Reachable",
                    tagline = "A journey about love and passion a pair of younglings",
                    releaseDate = new DateTime(2025, 10, 20),
                    genres = new string[] { "RPG", "Fantasy" },
                    platforms = new string[] { "PC", "Android", "IOS" },
                    rating = 4.8,
                    imagePath = "/assets/comingsoon.jpg"
                },
                new 
                {
                    id = 2,
                    title = "The Last Breach",
                    tagline = "Survival zombie game in a post-apocalyptic worldr",
                    releaseDate = new DateTime(2026, 5, 15),
                    genres = new string[] { "Survival", "Horror" },
                    platforms = new string[] { "Android", "IOS" },
                    rating = 4.2,
                    imagePath = "/assets/comingsoon.jpg"
                },
                new 
                {
                    id = 3,
                    title = "Project Nova",
                    tagline = "Fast-paced cybernetic combat in 2D platforming.",
                    releaseDate = new DateTime(2027, 1, 1),
                    genres = new string[] {"Platformer", "Action", "Sci-Fi"},
                    platforms = new string[] { "PC" },
                    rating = 3.9,
                    imagePath = "/assets/comingsoon.jpg"
                }
            };

            return Ok(games);
        }

        public IActionResult getGameById()
        {
            return Ok();
        }
    }
}