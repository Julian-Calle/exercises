function test() {
  const [text] = process.argv.slice(2);
  console.log(text);
  const found = text.match(/\d\w/);
  console.log(found);
}
test();
