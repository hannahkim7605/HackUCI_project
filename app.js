// var ip = "134.201.250.155";
var access_key = "b275aee6b5be9ae1df19aaf741164c61";


function createInfoList(json) {
    // alert(json.city);
    console.log("Got the IP and location of the visitor");
    console.log(json);
    let ip_addr = json.ip;
    let type = json.type;
    let country_name = json.country_name;
    let region_name = json.region_name;
    let country_flag_emoji = json.location.country_flag_emoji;
    let city = json.city;
    let zip = json.zip;
    let latitude = json.latitude;
    let longitude = json.longitude;

    let divElement = jQuery("#visitor_info");
    let HTML = "";
    HTML += "<ul>";
    HTML += "<li>IP Address: " + ip_addr + "</li>";
    HTML += "<li>IP version: " + type + "</li>";
    HTML += "<li>Country: " + country_name + " " + country_flag_emoji + "</li>";
    HTML += "<li>Region: " + region_name + "</li>";
    HTML += "<li>City: " + city + "</li>";
    HTML += "<li>Zip Code: " + zip + "</li>";
    HTML += "<li>Latitude: " + latitude + "</li>";
    HTML += "<li>Longitude: " + longitude + "</li>";
    HTML += "</ul>";
    divElement.append(HTML);
}

$.ajax({
    type:'GET',
    url: "http://api.ipstack.com/check?access_key=" + access_key,
    dataType: 'jsonp',
    success: (json) => createInfoList(json)
});

// <sample JSON response>

// city: "West Lafayette"
// continent_code: "NA"
// continent_name: "North America"
// country_code: "US"
// country_name: "United States"
// ip: "72.12.223.151"
// latitude: 40.427589416503906
// location: {geoname_id: 4928096, capital: "Washington D.C.", languages: [{code: "en", name: "English", native: "English"}], country_flag: "http://assets.ipstack.com/flags/us.svg", country_flag_emoji: "🇺🇸", …}
// longitude: -86.90216064453125
// region_code: "IN"
// region_name: "Indiana"
// type: "ipv4"
// zip: "47906"
