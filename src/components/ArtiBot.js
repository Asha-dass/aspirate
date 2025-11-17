import React, { useEffect } from 'react';

const ArtiBot = () => {
  useEffect(() => {
    (function(t, e) {
      t.artibotApi = {
        l: [],
        t: [],
        on: function() {
          this.l.push(arguments);
        },
        trigger: function() {
          this.t.push(arguments);
        }
      };
      var a = !1,
        i = e.createElement("script");
      i.async = !0;
      i.type = "text/javascript";
      i.src = "https://app.artibot.ai/loader.js";
      e.getElementsByTagName("head").item(0).appendChild(i);
      i.onreadystatechange = i.onload = function() {
        if (!(a || this.readyState && "loaded" != this.readyState && "complete" != this.readyState)) {
          new window.ArtiBot({
            i: "9ecaf398-d8c5-468a-b081-197074f3e4a5"
          });
          a = !0;
        }
      };
    })(window, document);
  }, []);

  return null;
};

export default ArtiBot;

