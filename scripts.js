function startMiniOctoCarnival() {
  const rides = [
    "carousel",
    "ferris wheel",
    "twirl and hurl",
    "bumper cars",
    "swing ride",
    "log flume",
    "sky lift",
    "gravitron"
  ];
  /* <div id="carousel" class="ride">
    Carousel
  </div> */
  const ridePanelEl = document.getElementById("ride-panel");
  for (let i = 0; i < rides.length; i++) {
    const ride = rides[i];
    const rideEl = document.createElement("div");
    rideEl.setAttribute("id", ride);
    rideEl.setAttribute("data-js-selector", "ride");
    rideEl.classList.add("ride");
    rideEl.innerHTML = ride;
    console.log(rideEl);
    ridePanelEl.append(rideEl);
  }

  function startRide() {
    const inputEl = document.getElementById("action");
    const action = inputEl.value;
    console.log(action);

    const rideEls = document.querySelectorAll("[data-js-selector='ride']");

    rideEls.forEach(function(rideEl) {
      console.log(rideEl);
      const id = rideEl.getAttribute("id");

      if (action.toLowerCase() === id.toLowerCase()) {
        rideEl.classList.toggle("active");
      } else {
        console.log("Yikes not sure what you wanted to do there?");
      }
    });
  }

  window.startRide = startRide;
}
startMiniOctoCarnival();
