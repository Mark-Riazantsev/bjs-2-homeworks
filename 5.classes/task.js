class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
       this.name = name;
       this.releaseDate = releaseDate;
       this.pagesCount = pagesCount;
       this.state = 100;
       this.type = null; 
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
        } else {
            this._state = newState; 
        }
    }

    get state() {
        return this._state;
    }
}

// const sherlock = new PrintEditionItem(
//     "Типовой школьный журнал",
//     2019,
//     102,
// );

// console.log(sherlock.realeseDate);
// console.log(sherlock.state);
// sherlock.fix();
// console.log(sherlock.state);

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = "detective";
    }
}

// const picknick = new FantasticBook(
//     "Пикник на обочине",
//     1972,
//     168,
//     "Братья Стругацкие",
// );

// console.log(picknick);
// picknick.state = 18;
// console.log(picknick.state);
// picknick.fix();

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        const findedByParamBook = this.books.find(item => item[type] === value)
        return !!findedByParamBook ? findedByParamBook : null;
    }

    giveBookByName(bookName) {
        const index = this.books.findIndex(book => book.name === bookName);
        if (index !== -1) {
            return this.books.splice(index, 1)[0];
        }
        return null;
    }
}
// const library = new Library("Библиотека");

// library.addBook(
//     new DetectiveBook(
//         "Шерлок",
//         2019,
//         1008,
//     "Конан Дойл",
//     )
// );

// library.addBook(
//     new FantasticBook(
//         "Пикнин",
//         "Стругацкие",
//         1972,
//         168,
//     "Конан Дойл",
//     )
// );
// library.addBook(
//     new NovelBook(
//         "Машина",
//         "Уэллс",
//         1895,
//         138,
//     )
// );
// library.addBook(
//     new Magazine(
//         "Мурзилка",
//         1924,
//         60,
//     )
// );
// console.log(library.findBookBy("name", "Властелин Колец"));
// console.log(library.findBookBy("realeseDate", 1924).name);

// console.log("Количество книг до выдачи: " + library.books.length);
// library.giveBookByName("Машина");
// console.log("Количество книг после выдачи: " + library.books.length);

// console.log(library);
