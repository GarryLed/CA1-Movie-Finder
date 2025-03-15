
// This is the interface that defines the shape of the data that we expect to receive from the API
export interface IOMDBResponse2 {
    Search:movieDeatils[]; // array to hold the movie details
    totalResults:number;
    Error:string;
}

interface movieDeatils {
    Title:string;
    Year:string;
    Director:string;
    Poster:string;
    Type:string;
    Error:string;
}
