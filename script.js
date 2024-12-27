function getBrowserInfo() {
  // Get user agent string
  const userAgent = navigator.userAgent;
  let browserName = 'Unknown Browser';
  let version = 'Unknown Version';

  // Check for browser using userAgent
  if (userAgent.indexOf("Chrome") > -1) {
    browserName = "Chrome";
    version = userAgent.split("Chrome/")[1].split(" ")[0];
  } else if (userAgent.indexOf("Firefox") > -1) {
    browserName = "Firefox";
    version = userAgent.split("Firefox/")[1];
  } else if (userAgent.indexOf("Safari") > -1) {
    browserName = "Safari";
    version = userAgent.split("Version/")[1].split(" ")[0];
  } else if (userAgent.indexOf("Edge") > -1) {
    browserName = "Edge";
    version = userAgent.split("Edge/")[1];
  } else if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident") > -1) {
    browserName = "Internet Explorer";
    version = userAgent.split("MSIE ")[1].split(";")[0];
  }

  // Display browser information inside the div
  const browserInfoDiv = document.getElementById('browser-info');
  browserInfoDiv.innerHTML = `You are using ${browserName} version ${version}`;
}

// Call the function to display the browser info
getBrowserInfo();
