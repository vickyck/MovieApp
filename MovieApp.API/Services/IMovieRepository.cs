using System.Collections.Generic;
using System.Threading.Tasks;

public interface IMovieRepository
{
    Task<List<MovieVM>> GetAllMovieData();
    List<MovieVM> SearchMovie(SearchVM search);
}