const sentence = "hello there from lighthouse labs";

// animate sentence to reveal charcter one at a time - looks like someone is typing

// loop through characters - to avoid automatically adding an extra newline character at the end each time, use process.stdout.write instead of console.log

let timer = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timer += 50);
}

// make prompt appear on the next line
setTimeout(() => {
  process.stdout.write('\n')
}, sentence.length * 50)
