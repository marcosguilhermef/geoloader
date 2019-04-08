
var imported = document.createElement('script');
imported.src = '//js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js';
document.head.appendChild(imported);
var info = navigator;
var informacoes = {
    Browser_CodeName: info.appCodeName,
    Browser_Name: info.appName,
    Browser_Version: info.appVersion,
    Cookies_Enabled: info.cookieEnabled,
    Browser_Language: info.language,
    Browser_Online: info.online,
    Platform: info.platform,
    User_agent_header:info.userAgent,
    Product:info.product,
    gps:3
    ,
    console: info.geolocation.getCurrentPosition(
    function(valor){
        a = { longitude: valor.coords.longitude, latitude: valor.coords.latitude, altitude: valor.coords.altitude};
        return console.log(a);
      }
      ,
      function(valor) {
        a = {latitude: valor.message,longitude: valor.message, altitude: valor.message};
        return console.log(a);
      }
    )
}
console.log(informacoes);
