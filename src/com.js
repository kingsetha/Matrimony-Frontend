window.FontAwesomeKitConfig = {
    asyncLoading: { enabled: true },
    autoA11y: { enabled: true },
    baseUrl: "https://kit-pro.fontawesome.com",
    iconUploads: {},
    id: 9091612,
    license: "pro",
    method: "css",
    minify: { enabled: true },
    token: "a076d05399",
    version: "5.15.2",
  };
  
  (function (t) {
    "function" == typeof define && define.amd ? define("kit-loader", t) : t();
  })(function () {
    "use strict";
  
    function loadScript(url, callback) {
      var script = document.createElement("script");
      script.src = url;
      script.onload = callback;
      document.head.appendChild(script);
    }
  
    function loadStyle(url) {
      var link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = url;
      document.head.appendChild(link);
    }
  
    function initFontAwesome(config) {
      var cssUrl = `${config.baseUrl}/releases/v${config.version}/css/all.css`;
      loadStyle(cssUrl);
    }
  
    try {
      if (window.FontAwesomeKitConfig) {
        var config = window.FontAwesomeKitConfig;
        initFontAwesome(config);
      }
    } catch (error) {
      console.error("Font Awesome Kit:", error);
    }
  });
  