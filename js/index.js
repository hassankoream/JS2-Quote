// we need an array of objects, with name and quotes for each, it will make it easier to add more in the future.
var quoteList = [
    {
        name: "Albert Einstein",
        quotes: [
            "Imagination is more important than knowledge.",
            "The only source of knowledge is experience.",
            "Learn from yesterday, live for today, hope for tomorrow."
        ]
    },
    {
        name: "Maya Angelou",
        quotes: [
            "If you don't like something, change it. If you can't change it, change your attitude.",
            "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
            "You may encounter many defeats, but you must not be defeated."
        ]
    },
    {
        name: "Steve Jobs",
        quotes: [
            "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
            "Stay hungry, stay foolish.",
            "The only way to do great work is to love what you do."
        ]
    },
    {
        name: "Oprah Winfrey",
        quotes: [
            "The biggest adventure you can take is to live the life of your dreams.",
            "Turn your wounds into wisdom.",
            "The more you praise and celebrate your life, the more there is in life to celebrate."
        ]
    },
    {
        name: "Nelson Mandela",
        quotes: [
            "Education is the most powerful weapon which you can use to change the world.",
            "It always seems impossible until it's done.",
            "I am not a saint, unless you think of a saint as a sinner who keeps on trying."
        ]
    },
    {
        name: "Mark Twain",
        quotes: [
            "The secret of getting ahead is getting started.",
            "Kindness is the language which the deaf can hear and the blind can see.",
            "The two most important days in your life are the day you are born and the day you find out why."
        ]
    },
    {
        name: "Malala Yousafzai",
        quotes: [
            "We realize the importance of our voices only when we are silenced.",
            "Let us make our future now, and let us make our dreams tomorrow's reality.",
            "When the whole world is silent, even one voice becomes powerful."
        ]
    },
    {
        name: "Abraham Lincoln",
        quotes: [
            "Whatever you are, be a good one.",
            "I am a slow walker, but I never walk back.",
            "The best way to predict your future is to create it."
        ]
    },
    {
        name: "Rosa Parks",
        quotes: [
            "You must never be fearful about what you are doing when it is right.",
            "Each person must live their life as a model for others.",
            "I would like to be remembered as a person who wanted to be free... so other people would be also free."
        ]
    },
    {
        name: "Elon Musk",
        quotes: [
            "When something is important enough, you do it even if the odds are not in your favor.",
            "Persistence is very important. You should not give up unless you are forced to give up.",
            "I think it is possible for ordinary people to choose to be extraordinary."
        ]
    }
];

// this to add combine the properties and push it into an array of html elements, each element is a quote with name.
var quoteContainer = [];


for (var x = 0; x < quoteList.length; x++) {
    var myQuote = "";
    // console.log(quoteList[x].name);
    var z = quoteList[x].quotes.length;

    for (var y = 0; y < z; y++) {
        // console.log(quoteList[x].quotes[y]);
        myQuote = `
                <p>"${quoteList[x].quotes[y]}"<br>--${quoteList[x].name}</p>
            
    `
        quoteContainer.push(myQuote);

    }


}

// to get a random number from between 0 and quotecontainer length. we will call it later.
function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}


// verify here because we will use them in more than one function, without values.
var lastIndex;
var currentIndex;
// need a function to check the index repeatedly  and get another index randomly.
function checkIndex(){
    if (lastIndex!== undefined && lastIndex === currentIndex) {
        currentIndex = random(0, quoteContainer.length);
        console.log("lastIndex=currentIndex");
    }
}

// on click function, must include the random func, and return the index to use it to get the quote
// must check before letting lastIndex = the current index,
// injection of the html element (the object inside the array of quotes) after making sure.
// 

function quoteGen() {
    currentIndex = random(0, quoteContainer.length);
   checkIndex();
   lastIndex = currentIndex;
   console.log(currentIndex);
   console.log(lastIndex);

//    not required but necessary for the undefined case.
  
   if (currentIndex < quoteContainer.length) {

       var currentQuote = quoteContainer[currentIndex];

   document.getElementById("theQuote").innerHTML = currentQuote;

   } else {
       
       var currentQuote = quoteContainer[currentIndex];

}
}


