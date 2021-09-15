// mutation MyMutation {
//     createCategory(input: {title: "Comedies"}) {
//         id
//     }
// }
//
// query list {
//     listCategories {
//         items {
//             title
//             id
//         }
//     }
// }
//
// query listallmov {
//     listMovies {
//         items {
//             id
//             title
//         }
//     }
// }
//
// mutation MyMutation2 {
//     createMovie(input: {categoryID: "c1022cf0-0b18-484b-8ef0-46de959c48d0", cast: "Just By Rokas Rudzianskas", creator: "Rokas Rudzianskas", numberOfSeasons: 2, plot: "How I learned to code?", poster: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/netflix/movie5.jpg", title: "Rokas Film about coding", year: 2030}) {
//         id
//     }
// }
//
// mutation MyMutation3 {
//     createSeason(input: {movieID: "f803697c-d432-4b5f-af8e-13b59e847772", name: "Season Super"}) {
//         id
//     }
// }
//
