function updateMap() {
  fetch("/data.json")
    .then((response) => response.json())
    .then((rsp) => {
      console.log(rsp.data);
      rsp.data.forEach((element) => {
        latitude = element.latitude;
        longitude = element.longitude;

        cases = element.infected;
        if(cases>225){
            color = "rgb(225 , 0 , 0)";
        }
        else{
            color = `"rgba(${cases} , 0 , 0)"`;
        }

        new mapboxgl.Marker({
          draggable: false,
          color : color
        })
          .setLngLat([longitude, latitude])
          .addTo(map);
      });
    });
}
updateMap();
