const socket = require("socket.io");
// const generateSeats = require("./generateSeats");

const movie = [
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BMWEwNjhkYzYtNjgzYy00YTY2LThjYWYtYzViMGJkZTI4Y2MyXkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_FMjpg_UX1000_.jpg",
    title: "Uncharted",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReDQ1sb8_TlUQOiCJ-IHsxY01ekYHb-XkBb7ks1IaoXRu2lKgh2pUfmtZlmd8tyYOtDFU&usqp=CAU",
    title: "Antz",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjQsJRH73QaONwT-8buVcyBQ7p2jMsAMA4JQ&usqp=CAU",
    title: "Popey",
  },
  {
    image:
      "https://images.thedirect.com/media/article_full/star-wars-next-movie_1.jpg",
    title: "Star Wars",
  },
];

const users = [];
const seats = [
  {
    seat: 1,
    reserved: "",
    price: 7.99,
  },
  {
    seat: 2,
    reserved: "",
    price: 7.99,
  },
  {
    seat: 3,
    reserved: "",
    price: 7.99,
  },
  {
    seat: 4,
    reserved: "",
    price: 7.99,
  },
  {
    seat: 5,
    reserved: "",
    price: 7.99,
  },
  {
    seat: 6,
    reserved: "",
    price: 7.99,
  },
  {
    seat: 7,
    reserved: "",
    price: 7.99,
  },
  {
    seat: 8,
    reserved: "",
    price: 7.99,
  },
  {
    seat: 9,
    reserved: "",
    price: 7.99,
  },
  {
    seat: 10,
    reserved: "",
    price: 7.99,
  },
  {
    seat: 11,
    reserved: "",
    price: 7.99,
  },
  {
    seat: 12,
    reserved: "",
    price: 7.99,
  },
  {
    seat: 13,
    reserved: "",
    price: 7.99,
  },
  {
    seat: 14,
    reserved: "",
    price: 7.99,
  },
  {
    seat: 15,
    reserved: "",
    price: 7.99,
  },
  {
    seat: 16,
    reserved: "",
    price: 7.99,
  },
  {
    seat: 17,
    reserved: "",
    price: 7.99,
  },
];

const helpers = {
  getUser: (socketId) => {
    const result = users.find((x) => x.id === socketId);
    return result.user;
  },
  emitDaysToOnlineUsers: (io) => {
    users.map((x) => {
      io.to(x.id).emit("movie", movie);
    });
  },
};

module.exports = (http) => {
  const io = socket(http, { cors: { origin: "http://localhost:3000" } });

  io.on("connect", (socket) => {
    socket.on("login", (user) => {
      console.log(user);
      const newUser = {
        user,
        id: socket.id,
      };
      users.push(newUser);

      socket.emit("movie", movie);
      socket.emit("seats", seats);
    });
  });
};
