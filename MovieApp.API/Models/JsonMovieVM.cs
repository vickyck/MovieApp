using System.Collections.Generic;

public class JsonMovieVM
{
    public string Language { get; set; }
    public string Location { get; set; }
    public string Plot { get; set; }
    public string Poster { get; set; }
    public string Title { get; set; }
    public string imdbID { get; set; }
    public string listingType { get; set; }
    public string imdbRating { get; set; }
    public List<string> Stills { get; set; }
    public List<string> SoundEffects { get; set; }
}

public class JsonMoviesVM
{
    public List<JsonMovieVM> movies;
}