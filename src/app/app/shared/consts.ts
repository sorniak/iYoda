export const starshipsEndPoint = 'https://swapi.co/api/starships/';
export const peopleEndPoint = 'https://swapi.co/api/people/';
export interface People {
    name: string;  // The name of this person.
    birth_year: string;  // The birth year of the person (BBY or ABY - Before/After the Battle of Yavin)
    eye_color: string;  // The eye color of this person. Will be "unknown" if not known or "n/a" if the person does not have an eye.
    gender: string;  // The gender of this person. Either "Male", "Female" or "unknown", "n/a" if the person does not have a gender.
    hair_color: string;  // The hair color of this person. Will be "unknown" if not known or "n/a" if the person does not have hair.
    height: string;  // The height of the person in centimeters.
    mass: string;  // The mass of the person in kilograms.
    skin_color: string;  // The skin color of this person.
    homeworld: string;  // The URL of a planet resource, a planet that this person was born on or inhabits.
    films: Array<string>;  // An array of film resource URLs that this person has been in.
    species: Array<string>;  // An array of species resource URLs that this person belongs to.
    starships: Array<string>;  // An array of starship resource URLs that this person has piloted.
    vehicles: Array<string>;  // An array of vehicle resource URLs that this person has piloted.
    url: string;  // the hypermedia URL of this resource.
    created: string;  // the ISO 8601 date format of the time that this resource was created.
    edited: string;  // string ;  // the ISO 8601 date format of the time that this resource was edited
}

export interface Starships {
    name: string;  // The name of this starship. The common name, such as "Death Star".
    model: string;  // The model or official name of this starship. Such as "T-65 X-wing" or "DS-1 Orbital Battle Station".
    starship_class: string;  // The class of this starship, such as "Starfighter" or "Deep Space Mobile Battlestation"
    manufacturer: string;  // The manufacturer of this starship. Comma separated if more than one.
    cost_in_credits: string;  // The cost of this starship new, in galactic credits.
    length: string;  // The length of this starship in meters.
    crew: string;  // The number of personnel needed to run or pilot this starship.
    passengers: string;  // The number of non-essential people this starship can transport.
    max_atmosphering_speed: string;  // The maximum speed of this starship in the atmosphere. "N/A" is incapable of atmospheric flight.
    hyperdrive_rating: string;  // The class of this starships hyperdrive.
    MGLT: string;  // The Maximum number of Megalights this starship can travel in a standard hour.
    cargo_capacity: string;  // The maximum number of kilograms that this starship can transport.
    consumables: string; // The maximum length of time crew without having to resupply.
    films: Array<string>;  // An array of Film URL Resources that this starship has appeared in.
    pilots: Array<string>;  // An array of People URL Resources that this starship has been piloted by.
    url: string;  // the hypermedia URL of this resource.
    created: string;  // the ISO 8601 date format of the time that this resource was created.
    edited: string;  // the ISO 8601 date format of the time that this resource was edited.
}

export const Fighters = [
    'Starships',
    'People'
]