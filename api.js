export function fecthQuote() {
fetch('https://quotes-api-self.vercel.app/quote')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
}

// fecthQuote()

// export default fecthQuote()