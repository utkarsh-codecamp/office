!(function () {
  "use strict";
  let e = document.querySelector(".header-nav");
  var s,
    n = 0;
  const t = { pinned: "header-nav-pinned", unpinned: "header-nav-unpinned" };
  function i() {
    (s = window.pageYOffset) < n
      ? e.classList.contains(t.unpinned) &&
        (e.classList.remove(t.unpinned), e.classList.add(t.pinned))
      : n < s &&
        1 <= window.scrollY &&
        ((!e.classList.contains(t.pinned) &&
          e.classList.contains(t.unpinned)) ||
          (e.classList.remove(t.pinned), e.classList.add(t.unpinned))),
      (n = s);
  }
  let o = document.querySelector(".scroll-to-top");
  o.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }),
    window.addEventListener(
      "load",
      function () {
        Lightense(".content img", { offset: 200, zIndex: 2147483647 }),
          (window.onscroll = function () {
            i(),
              300 <= window.scrollY
                ? e.classList.add("header-sticky-top")
                : e.classList.remove("header-sticky-top"),
              500 <= window.scrollY
                ? o.classList.add("shown")
                : o.classList.remove("shown");
          });
      },
      !1
    );
  {
    let s = document.querySelector(".search-block"),
      n = document.querySelector(".search-overlay"),
      e = document.querySelectorAll('[data-toggle="search"]'),
      t = document.querySelectorAll('[data-toggle="search-close"]');
    e.forEach((e) => {
      e.addEventListener("click", function () {
        s.classList.add("is-visible"),
          n.classList.add("is-visible"),
          setTimeout(() => {
            document.querySelector('[aria-label="search-query"]').focus();
          }, 250);
      });
    }),
      t.forEach((e) => {
        e.addEventListener("click", function () {
          s.classList.remove("is-visible"),
            n.classList.remove("is-visible"),
            (document.querySelector('[aria-label="search-query"]').value = "");
        });
      });
  }
  document
    .querySelector(".navbar-toggler")
    .addEventListener("click", function (e) {
      this.classList.toggle("toggle-menu");
    });
})();

var nameflag = false;
var mailflag = false;
let userName = document.getElementById("user-name");
let nameErrorMsg = document.getElementById("name-error-msg");
let nameIcon = document.getElementById("icon-1");
let nameRegex = /^[a-zA-Z ]{2,30}$/;
let emailId = document.getElementById("email-id");
let MailErrorMsg = document.getElementById("mail-error-msg");
let mailIcon = document.getElementById("icon-2");
let mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
let phoneErrorMsg = document.getElementById("phone-error-msg");
let phoneIcon = document.getElementById("icon-3");

function allFormVal() {
  namechecker();
  mailchecker();
  phonechecker();
  if (nameflag && mailflag && phoneflag) {
    document.getElementById("side-form").submit();
    return true;
  } else {
    return false;
  }
}

function namechecker() {
  if (userName.value.match(nameRegex)) {
    nameIcon.innerHTML = '<i class="fas fa-check-circle"></i>';
    nameIcon.style.color = "#2ecc71";
    nameErrorMsg.style.visibility = "hidden";
    userName.style.border = "2px solid #2ecc71";
    nameflag = true;
  } else if (userName.value == "") {
    nameIcon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
    nameIcon.style.color = "#ff2851";
    nameErrorMsg.style.visibility = "visible";
    userName.style.border = "2px solid #ff2851";
    nameflag = false;
  } else {
    nameIcon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
    nameIcon.style.color = "#ff2851";
    nameErrorMsg.style.visibility = "visible";
    userName.style.border = "2px solid #ff2851";
    nameflag = false;
  }
}
function mailchecker() {
  if (emailId.value.match(mailRegex)) {
    mailIcon.innerHTML = '<i class="fas fa-check-circle"></i>';
    mailIcon.style.color = "#2ecc71";
    MailErrorMsg.style.visibility = "hidden";
    emailId.style.border = "2px solid #2ecc71";
    mailflag = true;
  } else if (emailId.value == "") {
    mailIcon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
    mailIcon.style.color = "#ff2851";
    MailErrorMsg.style.visibility = "visible";
    emailId.style.border = "2px solid #ff2851";
    mailflag = false;
  } else {
    mailIcon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
    mailIcon.style.color = "#ff2851";
    MailErrorMsg.style.visibility = "visible";
    emailId.style.border = "2px solid #ff2851";
    mailflag = false;
  }
}

function phonechecker() {
  contact = document.getElementById("phone");
  countryCode = document.getElementById("country");
  var num = $("#phone").val().length;
  var code = $("#country").val();

  const dig = [
    205, 251, 256, 334, 659, 938, 603, 907, 201, 551, 609, 640, 732, 848, 856,
    862, 908, 973, 480, 520, 602, 623, 928, 505, 575, 479, 501, 870, 212, 315,
    332, 347, 516, 518, 585, 607, 631, 646, 680, 716, 718, 838, 845, 914, 917,
    929, 934, 209, 213, 279, 310, 323, 341, 408, 415, 424, 442, 510, 530, 559,
    562, 619, 626, 628, 650, 657, 661, 669, 707, 714, 747, 760, 805, 818, 820,
    831, 858, 909, 916, 925, 949, 951, 252, 336, 704, 743, 828, 910, 919, 980,
    984, 303, 719, 720, 970, 701, 203, 475, 860, 959, 216, 220, 234, 283, 326,
    330, 380, 419, 440, 513, 567, 614, 740, 937, 302, 405, 539, 572, 580, 918,
    239, 305, 321, 352, 386, 407, 561, 689, 727, 754, 772, 786, 813, 850, 863,
    904, 941, 954, 458, 503, 541, 971, 229, 404, 470, 478, 678, 706, 762, 770,
    912, 215, 223, 267, 272, 412, 445, 484, 570, 610, 717, 724, 814, 878, 808,
    401, 208, 986, 803, 839, 843, 854, 864, 217, 224, 309, 312, 331, 618, 630,
    708, 773, 779, 815, 847, 872, 605, 219, 260, 317, 463, 574, 765, 812, 930,
    423, 615, 629, 731, 865, 901, 931, 219, 260, 317, 463, 574, 765, 812, 930,
    319, 515, 563, 641, 712, 210, 214, 254, 281, 325, 346, 361, 409, 430, 432,
    469, 512, 682, 713, 726, 737, 806, 817, 830, 832, 903, 915, 936, 940, 956,
    972, 979, 316, 620, 785, 913, 270, 364, 502, 606, 859, 385, 435, 801, 225,
    318, 337, 504, 985, 802, 207, 276, 434, 540, 571, 703, 757, 804, 227, 240,
    301, 410, 443, 667, 206, 253, 360, 425, 509, 564, 339, 351, 413, 508, 617,
    774, 781, 857, 978, 202, 231, 248, 269, 313, 517, 586, 616, 734, 810, 906,
    947, 989, 304, 681, 218, 320, 507, 612, 651, 763, 952, 262, 414, 534, 608,
    715, 920, 228, 601, 662, 769, 307, 684, 314, 417, 573, 636, 660, 816, 671,
    406, 670, 308, 402, 531, 787, 939, 702, 725, 775, 340,
  ];
  const dig2 = [
    780, 825, 587, 403, 250, 604, 236, 672, 778, 431, 204, 506, 428, 709, 867,
    902, 782, 807, 905, 705, 647, 613, 548, 519, 437, 416, 365, 343, 289, 249,
    226, 782, 902, 438, 450, 514, 418, 367, 819, 354, 579, 873, 581, 306, 639,
  ];

  const dig3 = [
    "070",
    "071",
    "073",
    "074",
    "075",
    "076",
    "077",
    "078",
    "079",
    "018",
    "012",
    "013",
    "014",
    "015",
    "016",
    "017",
    "018",
    "019",
  ];
  const dig4 = [
    "70",
    "71",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "18",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
  ];

  const nb = $("#phone").val();
  const z = $("#phone").val().toString();
  const ax = parseInt(z.slice(0, 3));
  const ax1 = z.slice(0, 3);
  const ax2 = z.slice(0, 2);

  var x = $("#country").val();
  const exp1 = /[0-9]{9,12}$/;
  var val = 0;
  if (x == "+1 US") {
    if (dig.indexOf(ax) >= 0) {
      val = 1;
    } else {
      $(".msg").show();
      val = 0;
    }
  } else if (x == "+1 CA") {
    if (dig2.indexOf(ax) >= 0) {
      val = 1;
    } else {
      $(".msg").show();
      val = 0;
    }
  } else if (x == "+44 UK") {
    if (dig3.indexOf(ax1) >= 0 || dig4.indexOf(ax2) >= 0) {
      val = 1;
    } else {
      $(".msg").show();
      val = 0;
    }
  } else {
    if (!exp1.test(nb)) {
      $(".msg").show();
      val = 0;
    } else {
      val = 1;
    }
  }

  if (val == 1 && num > 8 && num < 14) {
    phoneIcon.innerHTML = '<i class="fas fa-check-circle"></i>';
    phoneIcon.style.color = "#2ecc71";
    phoneErrorMsg.style.visibility = "hidden";
    contact.style.border = "2px solid #2ecc71";
    phoneflag = true;
  } else if (contact.value == "") {
    phoneIcon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
    phoneIcon.style.color = "#ff2851";
    phoneErrorMsg.style.visibility = "visible";
    contact.style.border = "2px solid #ff2851";
    phoneflag = false;
  } else {
    phoneIcon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
    phoneIcon.style.color = "#ff2851";
    phoneErrorMsg.style.visibility = "visible";
    contact.style.border = "2px solid #ff2851";
    phoneflag = false;
  }
}

document.getElementById("close-btn").addEventListener("click", function () {
  document.getElementById("notification-bar").classList.add("ex2");
});

// set cookie according to you
var cookieName = "Popup";
var cookieValue = "Popup Opened";
var cookieExpireDays = 1;

// when users click accept button
let acceptCookie = document.getElementById("acceptCookie");
acceptCookie.onclick = function () {
  createCookie(cookieName, cookieValue, cookieExpireDays);
};

// function to set cookie in web browser
let createCookie = function (cookieName, cookieValue, cookieExpireDays) {
  let currentDate = new Date();
  currentDate.setTime(
    currentDate.getTime() + cookieExpireDays * 24 * 60 * 60 * 1000
  );
  let expires = "expires=" + currentDate.toGMTString();
  document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
  if (document.cookie) {
    document.getElementById("myModalb").style.display = "none";
  } else {
    alert(
      "Unable to set cookie. Please allow all cookies site from cookie setting of your browser"
    );
  }
};

// get cookie from the web browser
let getCookie = function (cookieName) {
  let name = cookieName + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};
// check cookie is set or not
let checkCookie = function () {
  let check = getCookie(cookieName);
  if (check == "") {
    setTimeout(function () {
      $("#myModalb").modal("show");
    }, 5000);
  } else {
    document.getElementById("myModalb").style.display = "none";
  }
};
checkCookie();
