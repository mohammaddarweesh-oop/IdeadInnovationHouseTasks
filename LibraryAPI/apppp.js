const arr = [
  {
    id: 1,
    name: "test",
    title: "test",
    addBok: function (newItem) {
      arr.push(newItem);
    },
    deleteBook: (id) => {
      arr.filter(e > e.id != id);
    },
    updateBook: (id, newItem) => {
      let book = arr.find((e) => e.id === id);
      book = { name: newItem.name, title: newItem.title };
    },
  },
  {
    id: 2,
    name: "test",
    title: "test",
    addBok: function (newItem) {
      arr.push(newItem);
    },
    deleteBook: (id) => {
      arr.filter(e > e.id != id);
    },
    updateBook: (id, newItem) => {
      let book = arr.find((e) => e.id === id);
      book = { name: newItem.name, title: newItem.title };
    },
  },
  {
    id: 3,
    name: "test",
    title: "test",
    addBok: function (newItem) {
      arr.push(newItem);
    },
    deleteBook: (id) => {
      arr.filter(e > e.id != id);
    },
    updateBook: (id, newItem) => {
      let book = arr.find((e) => e.id === id);
      book = { name: newItem.name, title: newItem.title };
    },
  },
];

// arr[0].addBok()
