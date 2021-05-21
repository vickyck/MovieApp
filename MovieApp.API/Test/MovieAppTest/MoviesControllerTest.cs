using System;
using Microsoft.Extensions.Configuration;
using MovieApp.API.Controllers;
using Xunit;
using Moq;
using System.Collections.Generic;

namespace MovieAppTest
{
    // dotnet test -> To execute all test cases in solution
    public class MoviesControllerTest
    {
        //public Mock<MoviesController> mock = new Mock<MoviesController>();
        [Fact]
        public void GetAllMoviesTest()
        {
            var config = new ConfigurationBuilder()
                        .Build();
            MoviesController controller = new MoviesController(new MovieRepository(config));
            Assert.NotNull(controller.Get());
        }

        [Fact]
        public void SearchMovieTest()
        {
            SearchVM objSearch = new SearchVM();
            objSearch.Location = "DELHI";
            objSearch.Language = "ENGLISH";
            objSearch.Title = "The Shawshank Redemption";
            
            var config = new ConfigurationBuilder()
                        .Build();

            MoviesController controller = new MoviesController(new MovieRepository(config));
            Assert.True(controller.Search(objSearch).Count == 0);
        }
    }
}
