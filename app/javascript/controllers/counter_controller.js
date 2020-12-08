import { Controller } from "stimulus";

export default class extends Controller {
  static targets = [ 'count' ];

  connect() {
    console.log("Hello");
    // setInterval(this.refresh, 3000);
  }

  refresh = () => {
    fetch('/restaurants', { headers: { accept: "application/json" } })
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        this.countTarget.innerText = data.restaurants.length;
      });

    // searchAlgolia = () => {
    // }
  }
}



// especificar essa data-controller na nossa view/html
// especifica um data-target  "controller.nameTarget"
// especifica um data-action  "event->controller#action"
