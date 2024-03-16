AFRAME.registerComponent("create-markers", {
   init: async function() {

    var mainScene = document.querySelector("#main-scene");
  
  //Add Code Here!
  dishes.map(dish => {
      var marker = document.createElement("a-marker");   
      marker.setAttribute("id", dish.id);
      marker.setAttribute("type", "pattern");
      marker.setAttribute("url", dish.marker_pattern_url);
      marker.setAttribute("cursor", {
        rayOrigin: "mouse"
      });

      //set the markerhandler component
      marker.setAttribute("markerhandler", {});
      mainScene.appendChild(marker);

  
  });
   })
