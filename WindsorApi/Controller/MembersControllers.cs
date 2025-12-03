using System;
using Microsoft.AspNetCore.Mvc;

namespace WindsorApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MembersController : ControllerBase
    {
        [HttpGet]
        public IActionResult getAllMembers()
        {
            var members = new[]
            {
                new 
                {
                    id= 1, 
                    name= "KeeperBee", 
                    job= "Creative Director", 
                    joinDate= new DateTime(2025,11,10),
                    description= "Visionary behind the Windstar universe.", 
                    imagePath= "/assets/comingsoon.jpg"
                },
                new
                {
                    id= 2, 
                    name= "Fariz", 
                    job= "Lead Programmer", 
                    joinDate= new DateTime(2025,11,10),
                    description= "Specializes in scalable game engine architecture.", 
                    imagePath= "/assets/comingsoon.jpg"
                },
                new
                {
                    id= 3, 
                    name= "Adinda", 
                    job= "Art Director", 
                    joinDate= new DateTime(2025,11,10),
                    description= "Focuses on evocative and immersive world design.", 
                    imagePath= "/assets/comingsoon.jpg" 
                }

            };

            return Ok(members);
        }

        public IActionResult getMmeberById()
        {
            return Ok();
        }
    }
}