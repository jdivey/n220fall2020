Vue.component("book-view", {
    props: [ "book" ],
    template: "<li> {{ book.title }} {{ book.cover }} by {{ book.author }}</li>"
});


let app = new Vue({
    el: "#app",
    data: {
        message: "Books",
        ready: true,
        books: [
            {id: 1, title: "The Little Pig", cover:"🐖", author: "Jamie Macison"},
            {id: 2, title: "Wear Your Mask!", cover: "😷", author: "Doctor X"}
        ]
    },
    methods: {
        firstBook: function() {
            this.books.splice(1);
        }
    }
});