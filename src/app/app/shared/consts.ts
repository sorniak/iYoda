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

export type PeopleOrStarships = People | Starships;
export type PeopleOrStarshipsWithIcon = (People | Starships) & {icon: string};

export const Fighters = [
    'Starships',
    'People'
];

export const constToLabels = {
    MGLT: 'speed (megalights)',
    cargo_capacity: 'cargo capacity (kg)',
    consumables: 'time without resuply',
    cost_in_credits: 'cost in credits',
    hyperdrive_rating: 'hyperdrive class',
    length: 'lenght (meters)',
    manufacturer: 'manufacturer',
    max_atmosphering_speed: 'max speed in atmosphere',
    model: 'model',
    passengers: 'number of passengers',
    starship_class: 'starship class',
    birth_year: 'birth year',
    eye_color: 'eye color',
    gender: 'gender',
    hair_color: 'hair color',
    height: 'height',
    skin_color: 'skin color'
};

export const fightResults = {
    intialFightResultLabel: 'Press FIGHT to start!',
    winFightResult: ' won!',
    drawFightResult: 'Nobody won...',
    unknownFightResult: 'Insufficient data to resolve the fight ...',
    errorWhileGettingData: 'Could not get data, try to reload page ...',
    loadingFightingData: 'Acquiring data, please wait ...',
};

export const baseImages = {
    'C-3PO': 'c3po.png',
    'Leia Organa': 'leia.png',
    'Boba Fett': 'boba_fett.png',
    Chewbacca: 'chewbacca.png',
    'Darth Vader': 'darth_vader.png',
    'R2-D2': 'r2d2.png',
    'Death Star': 'death_star.png',
    'Millennium Falcon': 'm_falcon.png',
    defaultShip: 'unknown_ship.png',
    defaultPerson: 'unknown_person.png'
};

export const fakeSwapiResponseStarships = {
    count: 37,
    next: 'https://swapi.co/api/starships/?page=2',
    previous: null,
    results:
    [{
        name: 'Executor',
        model: 'Executor-class star dreadnought',
        manufacturer: 'Kuat Drive Yards, Fondor Shipyards',
        cost_in_credits: '1143350000',
        length: '19000',
        max_atmosphering_speed: 'n/a',
        crew: '279144',
        passengers: '38000',
        cargo_capacity: '250000000',
        consumables: '6 years',
        hyperdrive_rating: '2.0',
        MGLT: '40',
        starship_class: 'Star dreadnought',
        pilots: [],
        films: ['https://swapi.co/api/films/2/', 'https://swapi.co/api/films/3/'],
        created: '2014-12-15T12:31:42.547000Z',
        edited: '2017-04-19T10:56:06.685592Z',
        url: 'https://swapi.co/api/starships/15/' },
        { name: 'Sentinel-class landing craft',
        model: 'Sentinel-class landing craft',
        manufacturer: 'Sienar Fleet Systems, Cyngus Spaceworks',
        cost_in_credits: '240000',
        length: '38',
        max_atmosphering_speed: '1000',
        crew: '5',
        passengers: '75',
        cargo_capacity: '180000',
        consumables: '1 month',
        hyperdrive_rating: '1.0',
        MGLT: '70', starship_class: 'landing craft',
        pilots: [], films: ['https://swapi.co/api/films/1/'],
        created: '2014-12-10T15:48:00.586000Z',
        edited: '2014-12-22T17:35:44.431407Z',
        url: 'https://swapi.co/api/starships/5/'
    },
    {
        name: 'Death Star',
        model: 'DS-1 Orbital Battle Station',
        manufacturer: 'Imperial Department of Military Research, Sienar Fleet Systems',
        cost_in_credits: '1000000000000',
        length: '120000',
        max_atmosphering_speed: 'n/a',
        crew: '342953',
        passengers: '843342',
        cargo_capacity: '1000000000000',
        consumables: '3 years',
        hyperdrive_rating: '4.0',
        MGLT: '10',
        starship_class: 'Deep Space Mobile Battlestation',
        pilots: [],
        films: ['https://swapi.co/api/films/1/'],
        created: '2014-12-10T16:36:50.509000Z',
        edited: '2014-12-22T17:35:44.452589Z',
        url: 'https://swapi.co/api/starships/9/'
    },
    {
        name: 'Millennium Falcon',
        model: 'YT-1300 light freighter',
        manufacturer: 'Corellian Engineering Corporation',
        cost_in_credits: '100000', 
        length: '34.37',
        max_atmosphering_speed: '1050',
        crew: '4',
        passengers: '6',
        cargo_capacity: '100000',
        consumables: '2 months',
        hyperdrive_rating: '0.5',
        MGLT: '75',
        starship_class: 'Light freighter',
        pilots:
        [
            'https://swapi.co/api/people/13/',
            'https://swapi.co/api/people/14/',
            'https://swapi.co/api/people/25/',
            'https://swapi.co/api/people/31/'
        ],
        films:
        [
            'https://swapi.co/api/films/2/',
            'https://swapi.co/api/films/7/',
            'https://swapi.co/api/films/3/',
            'https://swapi.co/api/films/1/'
        ],
        created: '2014-12-10T16:59:45.094000Z',
        edited: '2014-12-22T17:35:44.464156Z',
        url: 'https://swapi.co/api/starships/10/' }
    ]};

export const fakeSwapiResponsePeople = {
    count: 87,
    next: 'https://swapi.co/api/people/?page=2',
    previous: null,
    results:
    [{
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        hair_color: 'blond',
        skin_color: 'fair',
        eye_color: 'blue',
        birth_year: '19BBY',
        gender: 'male',
        homeworld: 'https://swapi.co/api/planets/1/',
        films:
        [
            'https://swapi.co/api/films/2/',
            'https://swapi.co/api/films/6/',
            'https://swapi.co/api/films/3/',
            'https://swapi.co/api/films/1/',
            'https://swapi.co/api/films/7/'
        ],
        species: ['https://swapi.co/api/species/1/'],
        vehicles:
        [
            'https://swapi.co/api/vehicles/14/',
            'https://swapi.co/api/vehicles/30/'
        ],
        starships:
        [
            'https://swapi.co/api/starships/12/',
            'https://swapi.co/api/starships/22/'
        ],
        created: '2014-12-09T13:50:51.644000Z',
        edited: '2014-12-20T21:17:56.891000Z',
        url: 'https://swapi.co/api/people/1/'
    },
    {
        name: 'C-3PO',
        height: '167',
        mass: '75',
        hair_color: 'n/a',
        skin_color: 'gold',
        eye_color: 'yellow',
        birth_year: '112BBY',
        gender: 'n/a',
        homeworld: 'https://swapi.co/api/planets/1/',
        films:
        [
            'https://swapi.co/api/films/2/',
            'https://swapi.co/api/films/5/',
            'https://swapi.co/api/films/4/',
            'https://swapi.co/api/films/6/',
            'https://swapi.co/api/films/3/',
            'https://swapi.co/api/films/1/'
        ],
        species: ['https://swapi.co/api/species/2/'],
        vehicles: [],
        starships: [],
        created: '2014-12-10T15:10:51.357000Z',
        edited: '2014-12-20T21:17:50.309000Z',
        url: 'https://swapi.co/api/people/2/'
    },
    { name: 'R2-D2',
    height: '96',
    mass: '32',
    hair_color: 'n/a',
    skin_color: 'white, blue',
    eye_color: 'red',
    birth_year: '33BBY',
    gender: 'n/a',
    homeworld: 'https://swapi.co/api/planets/8/',
    films:
    [
        'https://swapi.co/api/films/2/',
        'https://swapi.co/api/films/5/',
        'https://swapi.co/api/films/4/',
        'https://swapi.co/api/films/6/',
        'https://swapi.co/api/films/3/',
        'https://swapi.co/api/films/1/',
        'https://swapi.co/api/films/7/'
    ],
    species: ['https://swapi.co/api/species/2/'],
    vehicles: [],
    starships: [],
    created: '2014-12-10T15:11:50.376000Z',
    edited: '2014-12-20T21:17:50.311000Z',
    url: 'https://swapi.co/api/people/3/'
},
{
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    hair_color: 'none',
    skin_color: 'white',
    eye_color: 'yellow',
    birth_year: '41.9BBY',
    gender: 'male',
    homeworld: 'https://swapi.co/api/planets/1/',
    films:
    [
        'https://swapi.co/api/films/2/',
        'https://swapi.co/api/films/6/',
        'https://swapi.co/api/films/3/',
        'https://swapi.co/api/films/1/'
    ],
    species: ['https://swapi.co/api/species/1/'],
    vehicles: [],
    starships: ['https://swapi.co/api/starships/13/'],
    created: '2014-12-10T15:18:20.704000Z',
    edited: '2014-12-20T21:17:50.313000Z',
    url: 'https://swapi.co/api/people/4/'
},
{
    name: 'Leia Organa',
    height: '150',
    mass: '49',
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '19BBY',
    gender: 'female',
    homeworld: 'https://swapi.co/api/planets/2/',
    films:
    [
        'https://swapi.co/api/films/2/',
        'https://swapi.co/api/films/6/',
        'https://swapi.co/api/films/3/',
        'https://swapi.co/api/films/1/',
        'https://swapi.co/api/films/7/'
    ],
    species: ['https://swapi.co/api/species/1/'],
    vehicles: ['https://swapi.co/api/vehicles/30/'],
    starships: [],
    created: '2014-12-10T15:20:09.791000Z',
    edited: '2014-12-20T21:17:50.315000Z',
    url: 'https://swapi.co/api/people/5/' }
]};
