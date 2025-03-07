
// This is the interface that defines the shape of the data that we expect to receive from the API

export interface IOMDBResponse {
    Title: string;
    Year: string;
    Director: string;
    Poster: string;
    Error: string;
}