// let json = {
//   name: "Himanshu Kumar",
//   age: 21,
//   mobile: "7991861858",
//   isMarried: false,
//   random: null,
//   array: [1, 2, 3, 4],
//   object: { 1: 2, 3: 4 },
// };

// console.log(json);

// let StrJson = `{
//   "name": "Himanshu Kumar",
//   "age": 21,
//   "mobile": "7991861858",
//   "isMarried": "false",
//   "random": "null",
//   "array": ["1", "2", "3", "4"],
//   "object": { "1": "2", "3": "4" }
// }`;

// console.log(StrJson);

// let newJson = JSON.parse(StrJson);
// console.log(newJson);

// let newStrJson = JSON.stringify(newJson);
// console.log(newStrJson);

// // FAKE JSON DATA FOR UNDERSTANDING PURPOSE
let fakeJson = [
  {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    thumbnailUrl:
      "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
  },
  {
    albumId: 1,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    thumbnailUrl:
      "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
  },
  {
    albumId: 1,
    id: 3,
    title: "officia porro iure quia iusto qui ipsa ut modi",
    thumbnailUrl:
      "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
  },
  {
    albumId: 1,
    id: 4,
    title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    thumbnailUrl:
      "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
  },
  {
    albumId: 1,
    id: 5,
    title: "natus nisi omnis corporis facere molestiae rerum in",
    thumbnailUrl:
      "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
  },
  {
    albumId: 1,
    id: 6,
    title: "accusamus ea aliquid et amet sequi nemo",
    thumbnailUrl:
      "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
  },
  {
    albumId: 1,
    id: 7,
    title: "officia delectus consequatur vero aut veniam explicabo molestias",
    thumbnailUrl:
      "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
  },
  {
    albumId: 1,
    id: 8,
    title: "aut porro officiis laborum odit ea laudantium corporis",
    thumbnailUrl:
      "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
  },
  {
    albumId: 1,
    id: 9,
    title: "qui eius qui autem sed",
    thumbnailUrl:
      "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
  },
  {
    albumId: 1,
    id: 10,
    title: "beatae et provident et ut vel",
    thumbnailUrl:
      "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
  },
  {
    albumId: 1,
    id: 11,
    title: "nihil at amet non hic quia qui",
    thumbnailUrl:
      "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
  },
  {
    albumId: 1,
    id: 12,
    title:
      "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
    thumbnailUrl:
      "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
  },
  {
    albumId: 1,
    id: 13,
    title: "repudiandae iusto deleniti rerum",
    thumbnailUrl:
      "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
  },
  {
    albumId: 1,
    id: 14,
    title: "est necessitatibus architecto ut laborum",
    thumbnailUrl:
      "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
  },
  {
    albumId: 1,
    id: 15,
    title: "harum dicta similique quis dolore earum ex qui",
    thumbnailUrl:
      "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
  },
  {
    albumId: 1,
    id: 16,
    title: "iusto sunt nobis quasi veritatis quas expedita voluptatum deserunt",
    thumbnailUrl:
      "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
  },
  {
    albumId: 1,
    id: 17,
    title: "natus doloribus necessitatibus ipsa",
    url: "https://via.placeholder.com/600/9c184f",
    thumbnailUrl:
      "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
  },
  {
    albumId: 1,
    id: 18,
    title: "laboriosam odit nam necessitatibus et illum dolores reiciendis",
    url: "https://via.placeholder.com/600/1fe46f",
    thumbnailUrl:
      "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
  },
  {
    albumId: 1,
    id: 19,
    title: "perferendis nesciunt eveniet et optio a",
    url: "https://via.placeholder.com/600/56acb2",
    thumbnailUrl:
      "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
  },
  {
    albumId: 1,
    id: 20,
    title:
      "assumenda voluptatem laboriosam enim consequatur veniam placeat reiciendis error",
    url: "https://via.placeholder.com/600/8985dc",
    thumbnailUrl:
      "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
  },
  {
    albumId: 1,
    id: 21,
    title: "ad et natus qui",
    url: "https://via.placeholder.com/600/5e12c6",
    thumbnailUrl:
      "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
  },
  {
    albumId: 1,
    id: 22,
    title: "et ea illo et sit voluptas animi blanditiis porro",
    url: "https://via.placeholder.com/600/45601a",
    thumbnailUrl:
      "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
  },
  {
    albumId: 1,
    id: 23,
    title: "harum velit vero totam",
    url: "https://via.placeholder.com/600/e924e6",
    thumbnailUrl:
      "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
  },
  {
    albumId: 1,
    id: 24,
    title: "beatae officiis ut aut",
    url: "https://via.placeholder.com/600/8f209a",
    thumbnailUrl:
      "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
  },
  {
    albumId: 1,
    id: 25,
    title: "facere non quis fuga fugit vitae",
    thumbnailUrl:
      "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
  },
  {
    albumId: 1,
    id: 26,
    title: "asperiores nobis voluptate qui",
    thumbnailUrl:
      "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
  },
  {
    albumId: 1,
    id: 27,
    title: "sit asperiores est quos quis nisi veniam error",
    thumbnailUrl:
      "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
  },
  {
    albumId: 1,
    id: 28,
    title: "non neque eligendi molestiae repudiandae illum voluptatem qui aut",
    thumbnailUrl:
      "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
  },
  {
    albumId: 1,
    id: 29,
    title: "aut ipsam quos ab placeat omnis",
    thumbnailUrl:
      "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
  },
  {
    albumId: 1,
    id: 30,
    title: "odio enim voluptatem quidem aut nihil illum",
    url: "https://via.placeholder.com/600/372c93",
    thumbnailUrl:
      "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
  },
  {
    albumId: 1,
    id: 31,
    title: "voluptate voluptates sequi",
    url: "https://via.placeholder.com/600/a7c272",
    thumbnailUrl:
      "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
  },
  {
    albumId: 1,
    id: 32,
    title: "ad enim dignissimos voluptatem similique",
    url: "https://via.placeholder.com/600/c70a4d",
    thumbnailUrl:
      "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
  },
  {
    albumId: 1,
    id: 33,
    title: "culpa ipsam nobis qui fuga magni et mollitia",
    url: "https://via.placeholder.com/600/501fe1",
    thumbnailUrl:
      "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
  },
  {
    albumId: 1,
    id: 34,
    title: "vitae est facere quia itaque adipisci perferendis id maiores",
    url: "https://via.placeholder.com/600/35185e",
    thumbnailUrl:
      "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
  },
  {
    albumId: 1,
    id: 35,
    title: "tenetur minus voluptatum et",
    url: "https://via.placeholder.com/600/c96cad",
    thumbnailUrl:
      "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
  },
];

console.log(fakeJson);

let container = document.querySelector(".container");

fakeJson.map((elem) => {
  let newDiv = document.createElement("div");
  newDiv.className = "image";

  newDiv.innerHTML = `
        <img class="img"
        src=${elem.thumbnailUrl}
        alt="">
        <h6>Album Id : <span class="albumId">${elem.id}</span></h6>
        <h6>Title : <span class="title">${elem.title}</span></h6>
  `;

  container.append(newDiv);
});
