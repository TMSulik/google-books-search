export const books = 
  {
    authors: ["Dan Simmons", "Julie Newmar"],
    date: 1986,
    description: "Song of Kali follows an American magazine editor who journeys to the brutally bleak, poverty-stricken Indian city of Calcutta in search of a manuscript by a mysterious poet—but instead is drawn into an encounter with the cult of Kali, goddess of death. A chilling voyage into the squalor and violence of the human condition.",
    cover: "http://books.google.com/books/content?id=yvAqAwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
    title: "Song of Kali"
  }

  function handleResponse(response) {
    for (var i = 0; i < response.items.length; i++) {
      var item = response.items[i];
      console.log("ITEM: ", item)
      document.getElementById("content").innerHTML += "<br>" + item.volumeInfo.authors + " (" + item.volumeInfo.publishedDate.substring(0, 4) + ") " + item.volumeInfo.title + ". " + item.volumeInfo.publisher + ".";
    }
  }



