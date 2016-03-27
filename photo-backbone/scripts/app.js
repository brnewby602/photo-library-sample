
var images = [
  { name: 'mountains',
    src: 'https://unsplash.com/photos/USOu_Ob9rxo',
    description: 'Sweet mountain picture',
    rating: 4
  }, 
  {
    name: 'pug-yoda',
    src: 'https://unsplash.com/photos/2Ts5HnA67k8',
    description: 'Preparing to fight the dark side.',
    rating: 5
  }, 
  {
    name: 'polar',
    src:'https://unsplash.com/photos/DE9YwfVgu2s',
    description: 'I beg to differ, this IS my rock.',
    rating: 5
  },
  {
    name: 'faces-of-time',
    src: 'https://unsplash.com/photos/yBzrPGLjMQw',
    description: 'The faces of time.',
    rating: 3
  }
];

var title = {name: 'Photo Library App', language: 'en'};




var myApp = new AppView({el: '#app', imageList: images, title: new TitleModel(title)});




/*
   Views:
      1. AppView - contains all of the other views.

      2. TitleView - just displays the title of the page out of a model
                     doesn't do much, but still good to have a view 

      3. ImageListView - displays the list of image descriptions, takes a collection as its model

      4. ImageView - displays the image of the single ImageModel and its rating

   Collections:
      1. ImageList - the colleciton of ImageModel's 

   Models:

      1. TitleModel - just contains the string that is displayed as the h1 for the page
      2. ImageModel - contains the information needed for each image:
                1. name
                2. img url
                3. description
                4. rating value

*/