const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');

dotenv.config();  // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));


  const qa_pairs = [
    { keywords: ["oneStop", "platform"], response: "oneStop is an event management platform where you can book various event-related services such as venues, decorators, and more." },
    { keywords: ["book", "event"], response: "To book an event, navigate to our booking page, select the type of event you want to organize, and follow the instructions to complete your booking." },
    { keywords: ["cancel", "booking"], response: "Yes, you can cancel your booking. Please contact our support team for assistance with cancellations." },
    { keywords: ["services", "offer"], response: "oneStop offers a range of services including venue booking, decoration, catering, entertainment, and more." },
    { keywords: ["contact", "support"], response: "You can contact our support team via email or through the contact form on our website." },
    { keywords: ["location", "venue"], response: "You can find various venues for different events including weddings, corporate events, and parties on oneStop." },
    { keywords: ["decorators", "decoration"], response: "oneStop offers a variety of decorators to help you create the perfect ambiance for your event." },
    { keywords: ["catering", "food"], response: "Our catering services include a range of cuisines to suit your event needs." },
    { keywords: ["entertainment", "music"], response: "From live bands to DJs, oneStop provides entertainment options to keep your guests entertained." },
    { keywords: ["pricing", "cost"], response: "You can find detailed pricing information for our services on the respective service pages." },
    { keywords: ["availability", "dates"], response: "Check availability for your desired dates by visiting the booking page and selecting the service you need." },
    { keywords: ["reviews", "feedback"], response: "You can read reviews and feedback from other customers on the service pages." },
    { keywords: ["register", "sign up"], response: "To register, click on the 'Sign Up' button at the top right of the homepage and fill in your details." },
    { keywords: ["login", "account"], response: "Click on the 'Login' button at the top right of the homepage and enter your credentials to access your account." },
    { keywords: ["payment", "methods"], response: "We accept various payment methods including credit cards, debit cards, and online banking." },
    { keywords: ["invoices", "receipts"], response: "Invoices and receipts will be sent to your registered email address after payment." },
    { keywords: ["packages", "deals"], response: "We offer several packages and deals for different types of events. Visit the 'Packages' section to learn more." },
    { keywords: ["vendors", "partners"], response: "Our vendors and partners are carefully selected to ensure quality services for your event." },
    { keywords: ["updates", "notifications"], response: "Stay updated with the latest notifications by enabling alerts in your account settings." },
    { keywords: ["help", "assistance"], response: "For help and assistance, visit our 'Help' section or contact our support team." },
    { keywords: ["policy", "terms"], response: "Read our terms and policies in the 'Terms and Policies' section at the bottom of the page." },
    { keywords: ["refund", "return"], response: "Refund and return policies are detailed in our 'Refund Policy' section." },
    { keywords: ["events", "organize"], response: "We help you organize events like weddings, birthdays, corporate events, and more." },
    { keywords: ["guest list", "RSVP"], response: "Manage your guest list and track RSVPs through our platform." },
    { keywords: ["themes", "decor"], response: "Choose from a variety of themes and decorations to make your event special." },
    { keywords: ["transportation", "travel"], response: "We provide transportation and travel arrangements for your event guests." },
    { keywords: ["photography", "videography"], response: "Capture your special moments with our professional photography and videography services." },
    { keywords: ["customize", "personalize"], response: "Customize and personalize your event with our flexible options and services." }
  ];
  
  app.post('/chat', (req, res) => {
    const userMessage = req.body.message.toLowerCase();
    //console.log(`User Message: ${userMessage}`);  // Log user message for debugging
  
    let response = "Sorry, I don't understand your question. Can you please rephrase it?";
    
    // Regular expression to match any keyword
    for (const pair of qa_pairs) {
      const regex = new RegExp(pair.keywords.join('|'), 'i');
      if (regex.test(userMessage)) {
        response = pair.response;
        break;
      }
    }
  
    //console.log(`Response: ${response}`);  // Log response for debugging
    res.json({ reply: response });
  });


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



