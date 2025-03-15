/*====================
  Parent Class
 ===================== */
class Media {
  constructor(title) {
    this._title = title;
    this._ratings = [];
    this._isCheckedOut = false;
  }

/*==========================
  Getters & Setters for Parent Class
 =========================== */
get title () {
  return this._title;
  }
get ratings () {
  return this._ratings;
  }
get isCheckedOut () {
  return this._isCheckedOut;
}

set isCheckedOut (isOut) {
  this._isCheckedOut = isOut;
  }

/*=========================
  Methods for Parent Class
 ========================== */
  toggleCheckOutStatus ()  {
    this._isCheckedOut = !this._isCheckedOut;
  }
  addRating (rating)  {
    if (rating >= 1 && rating <= 5){
    this._ratings.push(rating);
    } else {
      console.log("Rating should be between 1 and 5.")
    }
  }
  getAverageRating () {
    let sum = this._ratings.reduce((accumulator, currentValue) => 
       accumulator + currentValue, 0);
    return sum / this._ratings.length;
  }
}


/*====================
  Child Class 1
 ===================== */
class Book extends Media {
  constructor(author, title, pages){
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author () {
    return this._author;
  }
  get pages () {
    return this._pages;
  }
}


/*====================
  Child Class 2
 ===================== */
class Movie extends Media {
  constructor(director, title, runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director () {
    return this._director;
  }
  get runTime () {
    return this._runTime;
  }
}


/*====================
  Child Class 3
 ===================== */
class CD extends Media {
  constructor(artist, title, songs){
    super(title);
    this._artist = artist;
    this._songs = songs;
  }
  
    get artist() {
    return this._artist;
  }
  get songs () {
    return this._songs;
  }
}


/*===========================================================================================================================================================
                                                                      Main
  ===========================================================================================================================================================*/

 /*===================
    BOOKS                      
  ===================== */
const historyOfEverything = new Book("Bill Bryson", "A Short History of Nearly Everything", 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.rating);
console.log(historyOfEverything.getAverageRating());
console.log("\n");

 /*===================
    Movies                     
  ===================== */
const speed = new Movie("Jan de Bont", "Speed", 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.rating);
console.log(speed.getAverageRating());
console.log("\n");

 /*===================
    CDs                     
  ===================== */
const metallica = new CD("Metallica", "The Black", ["Enter Sandman", "Nothing Else Matters"]);
metallica.toggleCheckOutStatus();
console.log(metallica.isCheckedOut);
metallica.addRating(5);
metallica.addRating(2);
metallica.addRating(5);
console.log(metallica.rating);
console.log(metallica.getAverageRating());
console.log(metallica.songs);
