// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

function domainName(url) {
  const urlParts = url
    .replace("http://", "")
    .replace("https://", "")
    .split(".");

  return urlParts.filter(
    (part) => !part.includes("com") && !part.includes("www")
  )[0];
}
console.log(domainName("http://github.com/carbonfive/raygun"));

console.log(domainName("http://www.zombie-bites.com"));

console.log(domainName("http://google.co.jp"));
