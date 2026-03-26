import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dns from "dns";
import contactRoutes from "./routes/contactRoutes.js";

dns.setDefaultResultOrder("ipv4first");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// ✅ use routes (NOT getContacts directly)
contactRoutes(app);

// ❌ REMOVE mongoose for now (to avoid error)
// We are using in-memory storage

app.listen(5000, () => console.log("Server running on port 5000"));
