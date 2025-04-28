// api/greet.js

// Vercel automatically provides Node.js request (req) and response (res) objects
// compatible with the standard Node.js http module / Express.
export default function handler(req, res) {
    // Extract the 'name' query parameter from the URL (e.g., /api/greet?name=Alice)
    const { name } = req.query;
  
    // Set the response status code to 200 (OK)
    res.statusCode = 200;
  
    // Set the Content-Type header to indicate we're sending JSON
    res.setHeader('Content-Type', 'application/json');
  
    // Construct the greeting message
    const message = name ? `Hello, ${name}!` : 'Hello, stranger!';
  
    // Send the JSON response
    res.json({
      greeting: message,
      timestamp: new Date().toISOString(), // Add a timestamp for fun
    });
  }
  
  // Note: You could also use module.exports for CommonJS syntax:
  // module.exports = (req, res) => { ... };
  // Vercel supports both ESM (export default) and CJS (module.exports).