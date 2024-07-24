import "./styles/style.css";
import { mainTemplate } from "./templates/mainTemplate";
import { useEpisodes } from "./hooks/useEpisodes";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = mainTemplate;

const containerId = document.querySelector("#morty-card");

useEpisodes(containerId);
