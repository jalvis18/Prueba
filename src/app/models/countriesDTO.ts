export interface countriesDto {
    name: string;
    region: string;
    subregion: string;
    capital: string;
    flag: string;
    languages: LangDto;
}

export interface LangDto {
    iso639_1: string;
    iso639_2: string;
    name: string;
}