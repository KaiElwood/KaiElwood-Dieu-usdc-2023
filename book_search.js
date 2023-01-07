/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */

    let searchResults = {
        "SearchTerm": searchTerm,
        "Results": []
    };

    // map through input books
    scannedTextObj.map((book, i) => {
        // map through input book sections
        for (const section of book.Content) {

            // remove commas and punctuation from string
            let str = section.Text.replace(/,/g, '').replace(/\./g, '');
            if (str.includes(searchTerm)) {

                // push formatted result to array of results
                searchResults.Results.push({
                    "ISBN": book.ISBN,
                    "Page": +section.Page,
                    "Line": +section.Line
                });
            }
        }
    })

  return searchResults;

}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]

const extraBooksIn = [
    {
      "Title": "Twenty Thousand Leagues Under the Sea",
      "ISBN": "9780000528531",
      "Content": [
        {
          "Page": 31,
          "Line": 8,
          "Text": "now simply went on by her own momentum.  The dark-"
        },
        {
          "Page": 31,
          "Line": 9,
          "Text": "ness was then profound; and however good the Canadian\'s"
        },
        {
          "Page": 31,
          "Line": 10,
          "Text": "eyes were, I asked myself how he had managed to see, and"
        } 
      ] 
    },
    {
      "Title": "Calvin and Hobbes",
      "ISBN": "9780000528532",
      "Content": [
        {
          "Page": 1,
          "Line": 1,
          "Text": "I'm not dumb. I just have a command of thoroughly useless information."
        },
        {
          "Page": 1,
          "Line": 2,
          "Text": "I've been practicing the art of procrastination to such a degree that it's no longer a procrastination, it's just my way of life."
        },
        {
          "Page": 1,
          "Line": 3,
          "Text": "The only way to do great work is to love what you do."
        }
      ]
    },
    {
      "Title": "Fahrenheit 451",
      "ISBN": "9780000528533",
      "Content": [
        {
          "Page": 1,
          "Line": 1,
          "Text": "With his symbolic helmet numbered 451 on his stolid head,"
        },
        {
          "Page": 1,
          "Line": 2,
          "Text": "and his eyes all orange flame with the though of what came next,"
        },
        {
          "Page": 1,
          "Line": 3,
          "Text": "he flicked the igniter and the house jumped up in a gorging fire that burned the evening sky red and yellow and black."
        },
      ]
    }
  ];
  
    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

const extraBooksOutTermProcrastination = {
    "SearchTerm": "procrastination",
    "Results": [
        {
            "ISBN": "9780000528532",
            "Page": 1,
            "Line": 2
        }
    ]
}

const extraBooksOutTermWith = {
    "SearchTerm": "With",
    "Results": [
        {
            "ISBN": "9780000528533",
            "Page": 1,
            "Line": 1
        },
    ]
}

const extraBooksOutTermFranchise = {
    "SearchTerm": "franchise",
    "Results": []
}

const extraBooksOutTermThe = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        },
        {
            "ISBN": "9780000528532",
            "Page": 1,
            "Line": 2,
        },
        {
            "ISBN": "9780000528533",
            "Page": 1,
            "Line": 2,
        },
        {
            "ISBN": "9780000528533",
            "Page": 1,
            "Line": 3,
        }
    ]
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

/** Positive tests: tests that return a match. */
const test3result = findSearchTermInBooks("the", extraBooksIn); 
if (JSON.stringify(extraBooksOutTermThe) === JSON.stringify(test3result)) {
    console.log("PASS: Test 3");
} else {
    console.log("FAIL: Test 3");
    console.log("Expected:", extraBooksOutTermThe);
    console.log("Received:", test3result);
}

/** Negative tests: tests that do not return any matches. */
const test4result = findSearchTermInBooks("franchise", extraBooksIn); 
if (JSON.stringify(extraBooksOutTermFranchise) === JSON.stringify(test4result)) {
    console.log("PASS: Test 4");
} else {
    console.log("FAIL: Test 4");
    console.log("Expected:", extraBooksOutTermFranchise);
    console.log("Received:", test4result);
}

// Case-sensitive tests: tests that match (for example) on “The” but not on “the”.
const test5result = findSearchTermInBooks("With", extraBooksIn); 
if (JSON.stringify(extraBooksOutTermWith) === JSON.stringify(test5result)) {
    console.log("PASS: Test 5");
} else {
    console.log("FAIL: Test 5");
    console.log("Expected:", extraBooksOutTermWith);
    console.log("Received:", test5result);
}


/** This test confirms that a line that contains the serach term twice should only show up in the results once. */
const test6result = findSearchTermInBooks("procrastination", extraBooksIn); 
if (JSON.stringify(extraBooksOutTermProcrastination) === JSON.stringify(test6result)) {
    console.log("PASS: Test 6");
} else {
    console.log("FAIL: Test 6");
    console.log("Expected:", extraBooksOutTermProcrastination);
    console.log("Received:", test6result);
}

