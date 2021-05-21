using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System.Linq;

public class MovieRepository : IMovieRepository
{
    private IConfiguration _config;
    public MovieRepository(IConfiguration config)
    {
        _config = config;
    }
    public Task<List<MovieVM>> GetAllMovieData()
    {
        List<MovieVM> retVal = new List<MovieVM>();
        string extractedJson = ReadJsonFromFile();
        
        if (!string.IsNullOrEmpty(extractedJson))
        {
            retVal = ExtractMovieListFromJson(extractedJson);
        }
        return Task.FromResult<List<MovieVM>>(retVal);
    }

    public List<MovieVM> SearchMovie(SearchVM search)
    {
        List<MovieVM> retVal = new List<MovieVM>();
        string extractedJson = ReadJsonFromFile();

        if (!string.IsNullOrEmpty(extractedJson))
        {
            List<MovieVM> fullMovieList = ExtractMovieListFromJson(extractedJson);
            if (fullMovieList != null && search != null)
            {
                retVal = fullMovieList.Where(m => (!string.IsNullOrEmpty(search.Title) && m.Title.Contains(search.Title)) || 
                                        (!string.IsNullOrEmpty(search.Location) && m.Location.Contains(search.Location)) ||
                                        (!string.IsNullOrEmpty(search.Language) && m.Language.Contains(search.Language))).ToList();
            }
        }        
        return retVal;
    }
    private string ReadJsonFromFile()
    {
        string filePath = GetJsonFilePathFromConfig();
        string extractedJson = string.Empty;
        if (!string.IsNullOrEmpty(filePath))
        {
            using (StreamReader r = new StreamReader(filePath))
            {
                extractedJson = r.ReadToEnd();            
            } 
        }        
        return extractedJson;
    }

    private List<MovieVM> ExtractMovieListFromJson(string extractedJson)
    {
        JsonMoviesVM deSerializedVal = JsonConvert.DeserializeObject<JsonMoviesVM>(extractedJson);
        List<MovieVM> retVal = new List<MovieVM>();
        if (deSerializedVal != null)
        {
            foreach(var item in deSerializedVal.movies)
            {
                retVal.Add(new MovieVM{
                    ImdbID = item.imdbID,
                    ImdbRating = item.imdbRating,
                    Language = item.Language,
                    ListingType = item.listingType,
                    Location = item.Location,
                    Plot = item.Plot,
                    Poster = item.Poster,
                    SoundEffects = item.SoundEffects,
                    Stills = item.Stills,
                    Title = item.Title
                });
            }
        }
        return retVal;
    }
    private string GetJsonFilePathFromConfig()
    {
        var appSettings = (_config != null) ? _config.GetSection("AppSettings") : null;
        return (appSettings != null && appSettings["MovieJSONInpPath"] != null) ? appSettings["MovieJSONInpPath"].ToString() : string.Empty;
    }
}