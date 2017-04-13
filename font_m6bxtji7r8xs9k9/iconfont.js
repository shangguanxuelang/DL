;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-dingwei" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M787.658752 340.26496c0-152.02304-123.31008-275.28192-275.310592-275.28192-152.044544 0-275.3536 123.25888-275.3536 275.28192 0 50.190336 13.705216 97.127424 37.085184 137.65632l-0.206848 0 238.368768 481.788928 238.507008-481.788928-0.275456 0C773.9904 437.392384 787.658752 390.455296 787.658752 340.26496zM512.310272 421.98016c-63.85664 0-115.657728-51.7632-115.657728-115.61984 0-63.893504 51.801088-115.69152 115.657728-115.69152 63.926272 0 115.687424 51.79904 115.687424 115.69152C627.997696 370.21696 576.236544 421.98016 512.310272 421.98016z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gouwuche" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M792.819712 566.833152l109.868032-251.779072c5.387264-12.376064 4.369408-26.2144-2.715648-37.010432-6.89664-10.528768-18.260992-16.56832-31.178752-16.56832L350.844928 261.475328l-8.363008-37.351424c-6.396928-28.826624-34.958336-51.408896-65.022976-51.408896L144.917504 172.715008c-14.544896 0-26.37824 11.833344-26.37824 26.37824 0 14.54592 11.833344 26.379264 26.37824 26.379264l132.542464 0c5.588992 0 12.409856 5.098496 13.52192 10.129408l100.713472 448.893952c-32.521216 12.913664-54.491136 45.618176-54.491136 81.168384 0 47.593472 38.720512 86.31296 86.31296 86.31296 47.597568 0 86.320128-38.720512 86.320128-86.31296 0-10.98752-2.081792-21.761024-6.102016-31.840256l178.471936 0c-4.021248 10.082304-6.10304 20.854784-6.10304 31.840256 0 47.593472 38.720512 86.31296 86.313984 86.31296 47.598592 0 86.324224-38.720512 86.324224-86.31296 0-47.594496-38.724608-86.313984-86.324224-86.313984-5.64224 0-317.648896 0-317.648896 0l-18.8928-82.701312 320.191488 0C765.970432 596.64896 785.19808 584.382464 792.819712 566.833152zM766.570496 732.418048c16.659456 2.052096 29.415424 16.262144 29.415424 33.246208 0 18.502656-15.058944 33.55648-33.567744 33.55648-18.502656 0-33.55648-15.0528-33.55648-33.55648 0-14.42816 9.401344-27.33056 23.021568-31.840256C751.883264 733.824 759.109632 731.313152 766.570496 732.418048zM362.65472 314.232832l482.83648 0-100.221952 229.66272L414.058496 543.895552 362.65472 314.232832zM423.51616 799.220736c-18.502656 0-33.55648-15.0528-33.55648-33.55648 0-16.80896 12.60032-30.997504 29.064192-33.212416 6.943744-0.456704 15.035392 1.37216 15.035392 1.37216 13.620224 4.506624 23.020544 17.410048 23.020544 31.840256C457.080832 784.166912 442.023936 799.220736 423.51616 799.220736z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fangdajing" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M850.453 800.653l0.105-0.223-197.89-193.493c38.961-45.944 61.363-103.043 63.198-161.203 3.664-70.834-24.038-144.003-74.073-195.682-42.739-45.105-102.838-75.421-164.821-83.209-12.031-1.639-24.352-2.458-36.625-2.458-61.344 0-121.126 19.942-168.322 56.113-54.705 40.781-92.468 101.996-103.616 167.925-11.054 61.446 0.911 127.372 32.811 180.82 21.819 37.152 52.888 69.073 89.828 92.298 33.909 21.453 72.924 35.474 112.775 40.485 11.958 1.62 24.219 2.439 36.445 2.439 56.586 0 112.572-17.3 158.132-48.773l197.642 193.343 3.655 3.368 0.105-0.091c6.515 5.235 14.768 8.14 23.319 8.14 20.202 0 36.637-16.127 36.637-35.947 0-8.787-3.358-17.279-9.308-23.853M649.856 536.743c-32.378 64.734-97.46 112.073-169.899 123.548-33.909 5.773-69.646 3.986-102.941-5.139-64.972-17.433-120.583-63.58-148.808-123.528-32.677-66.559-28.602-150.391 10.387-213.6 34.702-58.404 95.873-99.427 163.56-109.707l4.802-0.71c2.525-0.409 5.069-0.799 7.555-1.082 8.369-0.858 16.882-1.286 25.282-1.286 34.569 0 68.716 7.283 98.811 21.085 55.059 24.691 98.955 70.579 120.409 125.929 23.529 59.109 20.125 128.061-9.157 184.488z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiasanjiao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M761.6 384 512 614.4 262.4 384 166.4 384 512 704 857.6 384Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)