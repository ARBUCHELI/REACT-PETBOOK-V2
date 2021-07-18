const FAKE_USER_DATA = {
    Soso_Danilovich: {
      name: 'Soso Danilovich Abrosimov MacCat-Arthur',
      bio: "The problem with humans is that they don't understand the meaning of the word 'kool'.  Occasionally I let myself get pet and I love to eat yogurt and grilled chicken!",
      profilePictureUrl:
        'https://raw.githubusercontent.com/ARBUCHELI/PETBOOK-PICTURES/master/Soso_Danilovich.jpg',
      friends: ['Groucho_Barks'],
    },
    Groucho_Barks: {
      name: 'Groucho Isaac McDogger',
      bio: "I love eating slippers, destroying new furniture and chewing on expensive guitars!!",
      profilePictureUrl:
        'https://raw.githubusercontent.com/ARBUCHELI/PETBOOK-PICTURES/master/Groucho_Barks.jpg',
      friends: ['Dolgert_Einstein', 'Soso_Danilovich'],
    },
    Dolgert_Einstein: {
      name: 'Dolgert Mark Eistein Zuckerberg',
      bio: "There are several parallel universes in which humans feed me only hamburgers and steaks and I am about to prove it mathematically!",
      profilePictureUrl:
        'https://raw.githubusercontent.com/ARBUCHELI/PETBOOK-PICTURES/master/Dolgert%20Einstein.jpg',
      friends: ['Demi_Meower'],
    },
    Demi_Meower: {
      name: 'Demi Sara Meower Connor',
      bio: "I am the most beautiful cat on the face of the earth. You'll love me.",
      profilePictureUrl:
        'https://raw.githubusercontent.com/ARBUCHELI/PETBOOK-PICTURES/master/Demi_Meower.jpg',
      friends: ['Dolgert_Einstein', 'Groucho_Barks', 'Soso_Danilovich', "Mickey_ORodent"],
    },
    Mickey_ORodent: {
      name: "Mickey Joseph O'Rodent Mouser",
      bio: "I love Manhattan sunsets and accompanying my carrots with a glass of red wine. (I have a running machine in my apartment and work out every hour).  Call me!",
      profilePictureUrl:
        'https://raw.githubusercontent.com/ARBUCHELI/PETBOOK-PICTURES/master/Mickey_ORodent1.jpg',
      friends: ['Soso_Danilovich', 'Demi_Meower'],
    }
  };
  
  const timeoutByFetchId = new Map(); /*The Map object holds key-value pairs and remembers the original insertion order of the keys*/
  
  class Fetch {
    constructor() {
      Object.defineProperty(this, '_id', { /*defines a new property directly on an object, or modifies an existing property on an object, and returns the object*/
        value: Math.random().toString().substr(2), /*Generates a random key value*/
      });
    }
  }
  
  export function fetchUserData(username, callback) {
    if (!FAKE_USER_DATA.hasOwnProperty(username)) {
      throw new Error(
        "Invalid username. Make sure it is 'Soso_Danilovich', 'Groucho_Barks', 'olgert_Einstein', 'Demi_Meower', or 'Michey_ORodent'."
      );
    }
  
    const fetch = new Fetch();
  
    const delay = Math.floor(Math.random() * 10) + 5; /*This is the time that takes to the user to be rendered*/
    const timeout = setTimeout(() => {
      timeoutByFetchId.delete(fetch._id);
      callback(FAKE_USER_DATA[username]);
    }, delay);
  
    timeoutByFetchId.set(fetch._id, timeout);
  
    return fetch;
  }
  
  export function cancelFetch(fetch) {
    if (!fetch || typeof fetch !== 'object') {
      return;
    }
    const timeout = timeoutByFetchId.get(fetch._id);
    clearTimeout(timeout);
    timeoutByFetchId.delete(fetch._id);
  }