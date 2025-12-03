using System;
using Microsoft.AspNetCore.Mvc;

namespace WindsorApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArticlesController : ControllerBase
    {
        [HttpGet]
        public IActionResult getAllArticles()
        {
            var articles = new[]
            {
                new 
                {
                    id = 1, 
                    title = "WINDSOR: The Creation of the website for studio windsor", 
                    summary = "As a way to extend our reach and making comitment on progresing to our future gaming studio, we start by creating this website.", 
                    author = "DevTeam", 
                    date = new DateTime(2025, 11, 20), 
                    category = "DevBlog", 
                    imagePath = "/assets/comingsoon.jpg", 
                    contentPath = "content/journey-start.html"
                },
                new
                {
                    id= 2, 
                    title= "The History of windsor studio", 
                    summary= "We sit down reading, observing, and discussing there so much beatifull world that can be created in a mind of an individual.", 
                    author= "Marketing Team", 
                    date= new DateTime(2025, 11, 15), 
                    category= "Update", 
                    imagePath= "/assets/comingsoon.jpg", 
                    contentPath= "content/windsor-history.html" 
                },
                new
                {
                    id= 3, 
                    title= "Is there any accomplishment that this studio has been made?", 
                    summary= "After the long periode creation of the studio what are their plan for the future?", 
                    author= "Community Manager", 
                    date= new DateTime(2025,11,10), 
                    category= "Community", 
                    imagePath= "/assets/comingsoon.jpg", 
                    contentPath= "content/studio-accomplishment.html" 
                }

            };

            return Ok(articles);
        }

        public IActionResult getArticleById()
        {
            return Ok();
        }
    }
}