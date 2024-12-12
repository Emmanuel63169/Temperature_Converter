// Complete the following functions to make our program work!

/**
 * Converts the given Fahrenheit temperature `f` to Celsius.
 * @param {number} f temperature in °F
 * @returns {number} temperature in °C
 */

function convertToCelsius(f) {
  console.log("fahrenheit is", f)
  let c = (f - 32) * 5/9;
  console.log("celcius is", c)
  return c;
}

/**
 * | Temperature | Description |
 * | ----------- | ----------- |
 * | < 32        | "very cold" |
 * | < 64        | "cold"      |
 * | < 86        | "warm"      |
 * | < 100       | "hot"       |
 * | >= 100      | "very hot"  |
 *
 * @param {number} f temperature in °F
 * @returns {string} the description from the table above corresponding to
 * the given Fahrenheit temperature `f`
 */
function describeTemperature(c) {
  let message = " ";
  const numf = f * 1;
  if (numf < 32) {
    console.log("num fahrenheit is less than 32!");
    message = "That is Very Cold!"
  } else if (numf < 64) {
    console.log("num fahrenheit is less than 64!");
    message = "That is Cold!"
  } else if (numf < 86) {
    console.log("num fahrenheit is less than 86!");
    message = "That is Warm!"
  } else if (numf < 100) {
    console.log("num fahrenheit is less than 32!");
    message = "That is Very Cold!"
  } else if (numf < 150) {
    console.log("num fahrenheit is less than 150!");
    message = "That is Very hot!"
  } else if (numf >= 150) {
    console.log("num fahrenheit is more than 150!");
    message = "That is Scorching!"
  }
  return `${f} fahrenheit converted to ${c} celsius ${message}`;
}

/**
 * @param {number} limit
 * @returns {number} a random integer in the range [0, `limit`)
 */
function getRandomInt(max) {
  return Math.floor(Math.random(f) * max)
}

// -------------------- DO NOT CHANGE THE CODE BELOW ---------------------- //
/**
 * Converts the given temperature from Fahrenheit to Celsius,
 * then alerts the user with a descriptive message.
 * @param {number} f temperature in °F
 */
function parseFahrenheit(f) {
  const c = convertToCelsius(f);
  const description = describeTemperature(f);
  const message = `${f}°F is ${c}°C. That is ${description}`;
  alert(message);
}

const fahrenheitPrompt =
  "Please enter a number. We will convert that temperature from Fahrenheit to Celsius.";
let f = prompt(fahrenheitPrompt);
parseFahrenheit(+f);

alert("Let's try that again.");
f = prompt(fahrenheitPrompt);
parseFahrenheit(+f);

alert("Let's try some random temperatures.");
f = getRandomInt(110);
parseFahrenheit(f);

f = getRandomInt(110);
parseFahrenheit(f);
