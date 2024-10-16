/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = "bcdfghjklmnpqrstvwxz".split("");

/** Íslenskir samhljóðar */
const VOWELS = "aeiouyáéýúíóöæ".split("");

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns {boolean} `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === "string";

// Prófum fallið
console.assert(isString("hi") === true, "isString: skilar `true` fyrir streng");
console.assert(isString(42) === false, "isString: skilar `false` fyrir tölu");
console.assert(isString(null) === false, "isString: skilar `false` fyrir null");

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = " ") {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
  if (isString(str)) {
    const words = split(str);
    let longestWord = "";

    for (const word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }

    return longestWord;
  }
  return null;
}

console.assert(
  longest("hæ halló heimur!") === "heimur!",
  "longest: Skilar lengsta streng"
);
console.assert(
  longest("ég er að") === "ég",
  "longest: Skilar fyrsta af lengstu orðum ef fleiri eru jafn löng"
);
console.assert(
  longest("") === "",
  "longest: Skilar tómum streng þegar inntak er tómt"
);
console.assert(
  longest(false) === null,
  "longest: Skilar null þegar inntak er ekki strengur"
);

function shortest(str) {
  if (isString(str)) {
    const words = split(str);
    let shortestWord = words[0] || "";

    for (const word of words) {
      if (word.length < shortestWord.length) {
        shortestWord = word;
      }
    }

    return shortestWord;
  }
  return null;
}
console.assert(
  shortest("hæ halló heimur!") === "hæ",
  "shortest: Skilar stysta streng"
);
console.assert(
  shortest("já nei ok") === "já",
  "shortest: Skilar fyrsta af stystu orðum ef fleiri eru jafn stutt"
);
console.assert(
  shortest("") === "",
  "shortest: Skilar tómum streng þegar inntak er tómt"
);
console.assert(
  shortest(false) === null,
  "shortest: Skilar null þegar inntak er ekki strengur"
);

function reverse(str) {
  if (isString(str)) {
    const split = str.split("");
    const reversed = split.reverse();

    return reversed.join("");
  }
  return null;
}
console.assert(reverse("hæ") === "æh", "reverse: Snýr við einföldum streng");
console.assert(
  reverse("abba") === "abba",
  "reverse: Snýr við samhverfum streng"
);
console.assert(
  reverse("") === "",
  "reverse: Skilar tómum streng ef inntak er tómt"
);
console.assert(
  reverse(false) === null,
  "reverse: Skilar null þegar inntak er ekki strengur"
);

function palindrome(str) {
  if (isString(str) && str !== "") {
    const reversed = reverse(str);
    return str.toLowerCase() === reversed.toLowerCase();
  }

  return false;
}
console.assert(
  palindrome("hæh") === true,
  "palindrome: Segir til hvort strengur sé samhverfur"
);
console.assert(
  palindrome("Abba") === true,
  "palindrome: Samhverfur strengur verður að vera með eins stafi"
);
console.assert(
  palindrome("hello") === false,
  "palindrome: Segir false fyrir ósamhverfan streng"
);
console.assert(
  palindrome(false) === false,
  "palindrome: Skilar false þegar inntak er ekki strengur"
);

function vowels(str) {
  if (isString(str)) {
    let count = 0;
    for (const char of str.toLowerCase()) {
      if (VOWELS.includes(char)) {
        count++;
      }
    }
    return count;
  }
  return 0;
}

console.assert(vowels("hæh") === 1, "vowels: Skilar fjölda sérhljóða í streng");
console.assert(
  vowels("aeiouyáéýúíóöæ") === 14,
  "vowels: Telur alla íslenska sérhljóða"
);
console.assert(
  vowels("bbb") === 0,
  "vowels: Skilar 0 ef engir sérhljóðar eru til staðar"
);
console.assert(
  vowels(false) === 0,
  "vowels: Skilar 0 þegar inntak er ekki strengur"
);

function consonants(str) {
  if (isString(str)) {
    let count = 0;
    for (const char of str.toLowerCase()) {
      if (CONSONANTS.includes(char)) {
        count++;
      }
    }
    return count;
  }
  return 0;
}

console.assert(
  consonants("hæh") === 2,
  "consonants: Skilar fjölda samhljóða í streng"
);
console.assert(
  consonants("bcdfghjklmnpqrstvwxz") === 20,
  "consonants: Telur alla íslenska samhljóða"
);
console.assert(
  consonants("aaa") === 0,
  "consonants: Skilar 0 ef engir samhljóðar eru til staðar"
);
console.assert(
  consonants(false) === 0,
  "consonants: Skilar 0 þegar inntak er ekki strengur"
);

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  alert(`Sláðu inn orð eða setningu til að fá upplýsingar um:
        - Lengsta orðið
        - stysta orðið
        - Snúa við setningu
        - Fjölda sérhljóða
        - Fjölda samhljóða
        - Hvort að setningin/orðið sé samhverft`);

  const input = prompt("Sláðu inn streng til að skoða betur:");

  if (input === null || input.trim() === "") {
    return;
  }

  const longestWord = longest(input);
  const shortestWord = shortest(input);
  const reversed = reverse(input);
  const vowelCount = vowels(input);
  const consonantCount = consonants(input);
  const isPalindrome = palindrome(input);

  alert(
    `Niðurstöður:
    Lengsta orð: ${longestWord}
    Stysta orð: ${shortestWord}
    Öfugt: ${reversed}
    Fjöldi sérhljóða: ${vowelCount}
    Fjöldi samhljóða: ${consonantCount}
    Er samhverfur?: ${isPalindrome ? "Já" : "Nei"}`
  );

  if (confirm("Viltu prófa aftur?")) {
    start();
  }
}
