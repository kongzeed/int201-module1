class Movies {
  constructor() {
    this.movies = []
  }
  getAllMovies() {
    return this.movies
  }
  addMovie(title, director, year, genre) {
    if (!title || !director || !year || !genre) {
      return undefined
    }

    const isMovieExists = this.movies.find(
      (x) =>
        x.title.toLowerCase() === title.toLowerCase() &&
        x.director.toLowerCase() === director.toLowerCase()
    )
    if (isMovieExists) {
      return undefined
    }

    const newMovie = { title, director, year, genre }
    this.movies.push(newMovie)
    return newMovie
  }
  updateMovie(title, updatedDetails) {
    const detectArr = this.movies.find(
      (x) => x.title.toLowerCase() === title.toLowerCase()
    )
    if (!detectArr) {
      return undefined
    }
    const index = this.movies.findIndex(
      (movie) => movie.title.toLowerCase() === title.toLowerCase()
    )
    if (index !== -1) {
      this.movies[index] = { ...this.movies[index], ...updatedDetails }
      return this.movies[index]
    }
  }
  deleteMovieByTitle(title) {
    const index = this.movies.findIndex(
      (movie) => movie.title.toLowerCase() === title.toLowerCase()
    )
    if (index !== -1) {
      const movieDeleted = this.movies.splice(index, 1)
      return movieDeleted
    } else {
      return 'no movie deleted'
    }
  }
}

module.exports = Movies
//   constructor(title, director, year, genre) {
//     this.title = title
//     this.director = director
//     this.year = year
//     this.genre = genre
//   }
// }
// class Movies {
//   constructor() {
//     this.movies = []
//   }

//   getAllMovies() {
//     return this.movies
//   }

//   addMovie(title, director, year, genre) {
//     if (
//       (!title,
//       !director,
//       !year,
//       !genre ||
//         this.movies.some(
//           (fd) => fd.title.toUpperCase() === title.toUpperCase()
//         ))
//     ) {
//       return undefined
//     } else {
//       const newMovie = new movie(title, director, year, genre)
//       this.movies.push(newMovie)
//       return newMovie
//     }
//   }
//   updateMovie(title, updatedDetails) {
//     const updateMv = this.movies.findIndex(
//       (fd) => fd.title.toUpperCase() === title.toUpperCase()
//     )
//     if (updateMv === -1) {
//       return undefined
//     } else {
//       this.movies[updateMv] = { ...this.movies[updateMv], ...updatedDetails }
//     }
//     return this.movies[updateMv]
//   }
//   deleteMovieByTitle(title) {
//     const deleteMv = this.movies.findIndex(
//       (fd) => fd.title.toUpperCase() === title.toUpperCase()
//     )
//     if (deleteMv !== -1) {
//       return this.movies.splice(deleteMv, 1)
//     } else return 'no movie deleted'
//   }
// }

module.exports = Movies
