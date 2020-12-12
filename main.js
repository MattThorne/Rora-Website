const navbarbtn = document.getElementsByClassName('navbartoggle')[0]
const navbarlinks = document.getElementsByClassName('links-container')[0]

navbarbtn.addEventListener('click',() => {
    navbarlinks.classList.toggle('active')
})

function initMap() {
    // The location of Uluru
    const uluru = { lat: 50.55, lng: -3.692 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }