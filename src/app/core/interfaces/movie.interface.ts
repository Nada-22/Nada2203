export interface MovieI {
    ComingSoonBanner: string,
    ComingSoonTitle: string,
    Categories: CategoryI[];
    Cinemas: CinemaI[];
}

export interface CategoryI {

    CategoryName: string,
    CategoryID: number,
    Films: FilmI[]

}

export interface FilmI {

    FilmID: number,
    FilmImage: string,
    FilmName: string,
    Tags: string[],
    HasTicketsAvail: boolean,
    FilmDuration: string,
    FilmDescription: string;

}

export interface CinemaI {

    CinemaHalls: number,
    CinemaID: number,
    CinemaImage: string,
    CinemaName: string
    CinemaRating: string
    TicketsAvailable: number
}