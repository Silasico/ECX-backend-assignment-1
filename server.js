const http = require("http");

const port = process.env.PORT;
const name = "Silas Idowu";
const date = new Date();

const getTimeMessage = () => {
  const hour = date.getHours();
  if (hour < 12) {
    return "Good Morning";
  } else if (hour < 18) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  if (req.url === "/") {
    res.end(`<div style="text-align: center; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
      <h1 style="color: red; font-size: 32px;">Welcome to my homepage</h1>
      <p>${getTimeMessage()}, My name is ${name}</p>
      <p>Current date is ${date}</p>
      
      <h2 style="font-size: 20px" id="emoji">Your favourite emojis changing: 🤩</h2>
      
      <div id="device-message" style="font-size:20px; margin-top:20px;">Hello</div>
        <script>
      const emojis = ["😊", "🌟", "🚀", "🔥", "💡"];
      setInterval(() => {
        const randomIndex = Math.floor(Math.random() * emojis.length);
        document.getElementById("emoji").textContent = "Your favourite emojis changing: " + emojis[randomIndex];
      }, 1000);
    </script>

    <script>
  function getDeviceMessage() {
    const width = window.innerWidth; // viewport width
    let message;

    if (width <= 768) {
      // typical breakpoint for mobile
      message = "You are viewing this on a phone 📱 of size " + width + "px";
    } else {
      message = "You are viewing this on a laptop 💻 ";
    }

    // Display the message in an element
    document.getElementById("device-message").textContent = message;
  }

  // Run once on load
  getDeviceMessage();

  // Optional: update if the user resizes the window
  window.addEventListener("resize", getDeviceMessage);
</script>


    </div>`);
  } else if (req.url === "/about") {
    res.end("<h1>About page</h1>");
  } else {
    res.statusCode = 404;
    res.end(`<div style="text-align: center; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
      <h1>${req.url} screen Not Found</h1>
      <button onclick="window.location.href='/'">Go to Home</button>
      </div>`);
  }
});

server.listen(port, () => {
  console.log(`Hiii, My server just started running on port ${port}`);
});
