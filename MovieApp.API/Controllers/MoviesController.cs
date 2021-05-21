using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace MovieApp.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MoviesController : ControllerBase
    {
        private readonly IMovieRepository _movieRepo;

        public MoviesController(IMovieRepository movieRepo)
        {
            _movieRepo = movieRepo;
        }

        [HttpGet("FindAll")]
        public async Task<List<MovieVM>> Get()
        {
            return await _movieRepo.GetAllMovieData();            
        }

        [HttpGet("Search")]
        public List<MovieVM> Search([FromBody]SearchVM searchVM)
        {
            return _movieRepo.SearchMovie(searchVM);
        }
    }
}
