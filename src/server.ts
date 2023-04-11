import { App, port, message } from "./app";
import { Home } from "./routes/home";

const app = new App([new Home()]);

app.listen(port, message);
