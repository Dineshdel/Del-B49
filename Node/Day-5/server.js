






const app = express();

app.use(bodyParser.json());
const PORT = 3000;

const DB_URL =

mongoose
 .connect(DB_URL, {})
 .then(() => console.log("Connected to MongoDB"))
 .catch((err) => console.log("Could not connect to MongoDB", err));

 app.post("/mentor", async (rep,res) => {
    try{
        const mentor = new Mentor(rep, bosy);
        await mentor.save();
        res.status(201).send(mentor);
    }
    catch (error) {
        res.status(404).send(erroe);
    }
 });

 app.listen(PORT, () => {
    console.log("Server is running on PORT")
 });
