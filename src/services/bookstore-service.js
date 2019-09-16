export default class BookstoreService {

  data = [
    {
      id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler',
      price: 32,
      coverImage: "https://damonza.com/wp-content/uploads/portfolio/fiction/World-Whisperer.jpg"
    },
    {
      id: 2,
      title: 'Release It!',
      author: 'Michael T. Nygard',
      price: 66,
      coverImage: "https://damonza.com/wp-content/uploads/portfolio/fiction/Werewolf%20Mountain.jpg"
    }
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // An error random times for testing
        if (Math.random() > 0.75)
          return reject(new Error("Could not get data from the server"));

        resolve(this.data);
      }, 1000);
    });
  }
}
