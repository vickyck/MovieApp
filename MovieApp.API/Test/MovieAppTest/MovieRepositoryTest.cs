using System;
using Microsoft.Extensions.Configuration;
using MovieApp.API.Controllers;
using Xunit;
using Moq;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MovieAppTest
{
    // dotnet test -> To execute all test cases in solution
    public class MovieRepositoryTest
    {
        public Mock<IMovieRepository> _mockRepo = new Mock<IMovieRepository>();
        public Mock<IConfiguration> _mockConfig = new Mock<IConfiguration>();

        private Task<List<MovieVM>> GetMockTaskData()
        {
            List<MovieVM> objData = new List<MovieVM>();
            objData.Add(new MovieVM(){
                ImdbID = "1",
                ImdbRating="10",
                Language="ENGLISH",
                ListingType="U",
                Location="BLR"
            });
            return Task.FromResult<List<MovieVM>>(objData);
        }
        private List<MovieVM> GetMockData()
        {
            List<MovieVM> objData = new List<MovieVM>();
            objData.Add(new MovieVM(){
                ImdbID = "1",
                ImdbRating="10",
                Language="ENGLISH",
                ListingType="U",
                Location="BLR"
            });
            return objData;
        }

        [Fact]
        public void GetAllMoviesTest()
        {
            var data = GetMockTaskData();
            _mockRepo.Setup(p => p.GetAllMovieData()).Returns(data);
            _mockConfig.Setup(p => p.GetSection(It.IsAny<string>())).Returns(It.IsAny<IConfigurationSection>());

            MovieRepository repo = new MovieRepository(_mockConfig.Object);
            Assert.NotNull(repo.GetAllMovieData());
        }

        [Fact]
        public void SearchMovieTest()
        {
            var data = GetMockData();
            _mockRepo.Setup(p => p.SearchMovie(It.IsAny<SearchVM>())).Returns(data);
            _mockConfig.Setup(p => p.GetSection(It.IsAny<string>())).Returns(It.IsAny<IConfigurationSection>());

            MovieRepository repo = new MovieRepository(_mockConfig.Object);
            Assert.NotNull(repo.SearchMovie(It.IsAny<SearchVM>()));
        }
    }
}
