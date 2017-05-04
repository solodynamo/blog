 const rawData = {
    articles: [{
        id: 'Buffers In NodeJS',
        title: 'Buffers In NodeJS',
        date: 'January 15, 2017',
        author: {
            firstName: 'Ankit',
            lastName: 'Singh',
            website: 'https://twitter.com/solodynamo',
        },
        body: `
        Javascript works fine with strings and on their various operations but what about binary data consisting of bytes in which each byte is collection of 8bits that too in form of 0/1 …It can’t help much so node’s buffer are here to your rescue. As all data in our computer is present in form of bytes , low-level operations like reading a file or working with sockets can’t be done alone with JS so.. Buffers are defined as container for raw bytes and it looks something like this..

        <Buffer 02 04 06 08 0a 0c 0e 10>

        Looks weird so lets dive in what above stuff actually is :- - Buffer :- a buffer has an Object type of Buffer. - Size:- Above is a size 8 buffer as it has 8 pairs of weird stuff and each pair is a byte.

        Hey , did i said wrong that byte are collection of 8bits then why above byte has 2 bits rather than 8 so lets see what it is actually ..

        No - 2 Binary - 0001100 Hexadecimal - 0C So Smart Node Devs thought that why not save some space and adopt hexa form which takes less bits than Binary thats why above Buffer object had 2 bits instead of 8.

        Encoding In Buffer

        Code :

        const buf = Buffer.from([0x68, 0x65, 0x6c, 0x6c, 0x6f, 0x20, 0x77, 0x6f, 0x72,
        0x6c, 0x64]);
        /*converts the array into a Buffer object .So it reads hey create a buffer from this array and return to buf constant.*/

        console.log(buf);
        // outputs <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>

        console.log(buf.toString('utf8'));
        // outputs 'hello world'
        Various Commonly Used Encoding Types:- - UTF-8 - Includes ASCII’s (0-127) characters along with its own set and all start with 1 to avoid clashing with ASCII. - UTF-16 -Capable of encoding all Unicode character and encoding is of variable lenght rest google it fella :)

        So selecting the type of encoding can be like north and south when specially working with buffers along with other stuff.

        In Above Example :

        console.log(buff.toString('utf16le'));
        //outputs '敨汬⁯潷汲'
        Encoding is a Bi-directional process thus converting a string to buffer and vice-versa.

        Conceptually buffers are quite similar to arrays. They use bracket indexing and assignment just like arrays, and they have a length property as well as a concat and a slice method that works in basically the same way as arrays. However unlike javascript arrays, javascript buffers have a fixed length.
        To Explore more kindly refer to the awesome Node.js docs.
      `
    }, {
        id: 'Angular 2 pipe and An npm module',
        title: 'Angular 2 pipe and An npm module',
        date: 'December 25, 2016',
        author: {
            firstName: 'solodynamo',
            lastName: ' ',
            website: 'https://twitter.com/solodynamo',
        },
        body: `
        Few days ago , while working on a project which required around 200 names to be displayed at once and that too on a mobile screen …that’s bezerk!!!

        So thought of letting the user enter the names rather than searching from giant list of hundreds so made a sweet input box and then thought of applying the filter like we do in Angular 1 using its pre-defined search filter…but wait I was working on Angular 2 and surprise surprise it doesnt has a pre-defined search filter like Angular 1 did ..bummed!!

        So thought lets make one then , i looked over the Angular 2 official docs and saw pipes(_)

        By the way a pipe is nothing just this | , Yes this is a pipe .

        So i dug little deeper and found PipeTransform implementing which i thought of making a filer for myself and offcourse for my project.

        So ng2-search filter was born which allowed to filter large list of names based on the character that user writes i.e.

        If you write letter ‘q’ , then it will filter all the names having ‘q’ in them so it totally solved my purpose.

        I then thought why not make it an open-source npm module , so i uploaded it on the ever-increasing npm global module repository consisting of lakhs of packages.

        Mine is called “ng2-search-filter”(https://www.npmjs.com/package/ng2-search-filter).

        By the way , the module has 800+ monthly downloads .
              `
    }]
};

const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));

let appData = {
    articles: []
};


 const getArticleList = () => {
    appData.articles = rawData.articles.reduce((acc, article) => {
        acc.push({ id: article.id, title: article.title, date: article.date });
        return acc;
    }, []);

    return Promise.resolve(deepCopy(appData.articles));
};

 const getArticle = (articleId) => {
    appData.currentArticle = rawData.articles.find(article => article.id === articleId);
    return Promise.resolve(deepCopy(appData.currentArticle));
};

const addArticle = (articleInfo) => {
    const newArticle = Object.assign({}, articleInfo, {
        id: articleInfo.title.toLowerCase().replace(/[^a-z]+/, '-'),
        date: new Date().toString(),
    });
    rawData.articles.push(newArticle);
    appData.currentArticle = newArticle;
    return Promise.resolve(deepCopy(appData.currentArticle));
};


exports.api = {
  rawData: rawData,
  getArticleList: getArticleList,
  getArticle: getArticle,
  addArticle: addArticle
};
