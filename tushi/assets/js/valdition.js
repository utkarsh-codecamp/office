function validate1(val) {
  var getSelectedValue = document.querySelector(
    'input[name="radioname"]:checked'
  );
  errorMsg1 = document.getElementById("error-msg1");
  flag1 = true;

  if (getSelectedValue != null) {
    errorMsg1.style.display = "none";
    getSelectedValue.style.borderColor = "green";
    flag1 = false;
  } else {
    errorMsg1.innerHTML = "*please fill the following field";
    errorMsg1.style.display = "block";
    getSelectedValue.style.borderColor = "red";
    flag1 = false;
  }

  flag = flag1;
  return flag;
}

function validate2(val) {
  emailId = document.getElementById("email");
  errorMsg2 = document.getElementById("error-msg2");
  mailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  flag2 = true;

  if (emailId.value.match(mailRegex)) {
    emailId.style.borderColor = "green";
    flag2 = true;
  } else if (emailId.value == "") {
    errorMsg2.innerHTML = "*Please fill your email here";
    errorMsg2.style.display = "block";
    emailId.style.borderColor = "red";
    flag2 = false;
  } else {
    errorMsg2.innerHTML = "*Not a Valid Email";
    errorMsg2.style.display = "block";
    emailId.style.borderColor = "red";
    flag2 = false;
  }

  flag = flag2;
  return flag;
}
function validate3(val) {
  var getSelectedValue = document.querySelector(
    'input[name="optionsRadios"]:checked'
  );
  errorMsg3 = document.getElementById("error-msg3");
  flag3 = true;

  if (getSelectedValue != null) {
    errorMsg3.style.display = "none";
    getSelectedValue.style.borderColor = "green";
    flag3 = false;
  } else {
    errorMsg3.innerHTML = "*Please fill the following field";
    errorMsg3.style.display = "block";
    getSelectedValue.style.borderColor = "red";
    flag3 = false;
  }

  flag = flag3;
  return flag;
}

function validate4(val) {
  contact = document.getElementById("phone");
  countryCode = document.getElementById("country");
  errorMsg4 = document.getElementById("error-msg4");
  flag4 = true;
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
    contact.style.borderColor = "green";
    flag4 = true;
  } else if (contact.value == "") {
    errorMsg4.innerHTML = "*Please Enter your Number";
    errorMsg4.style.display = "block";
    contact.style.borderColor = "red";
    flag4 = false;
  } else {
    errorMsg4.innerHTML = "*Not a Valid Number";
    errorMsg4.style.display = "block";
    contact.style.borderColor = "red";
    flag4 = false;
  }

  flag = flag4;
  return flag;
}
$(document).ready(function () {
  var current_fs, next_fs, previous_fs;
  var steps = $(".card-body").length;
  var current = 1;
  setProgressBar(current);
  $(".next").click(function () {
    str1 = "next1";
    str2 = "next2";
    str3 = "next3";
    str4 = "next4";
    if (!str1.localeCompare($(this).attr("id")) && validate1(0) == true) {
      val1 = true;
    } else {
      val1 = true;
    }

    if (!str2.localeCompare($(this).attr("id")) && validate2(0) == true) {
      val2 = true;
    } else {
      val2 = false;
    }
    if (!str3.localeCompare($(this).attr("id")) && validate3(0) == true) {
      val3 = true;
    } else {
      val3 = true;
    }
    if (!str4.localeCompare($(this).attr("id")) && validate4(0) == true) {
      val4 = true;
    } else {
      val4 = false;
    }
    if (
      (!str1.localeCompare($(this).attr("id")) && val1 == true) ||
      (!str2.localeCompare($(this).attr("id")) && val2 == true) ||
      (!str3.localeCompare($(this).attr("id")) && val3 == true) ||
      (!str4.localeCompare($(this).attr("id")) && val4 == true)
    ) {
      current_fs = $(this).parent().parent();
      next_fs = $(this).parent().parent().next();
      $(current_fs).removeClass("show");
      $(next_fs).addClass("show");
      current_fs.animate(
        {},
        {
          step: function () {
            current_fs.css({
              display: "none",
              position: "relative",
            });
            next_fs.css({
              display: "block",
            });
          },
        }
      );
      setProgressBar(++current);
      var c = document.getElementById("cnt").textContent;
      document.getElementById("cnt").textContent = Number(c) + 20;
    }
  });
  $(".prev").click(function () {
    current_fs = $(this).parent().parent();
    previous_fs = $(this).parent().parent().prev();
    $(current_fs).removeClass("show");
    $(previous_fs).addClass("show");
    current_fs.animate(
      {},
      {
        step: function () {
          current_fs.css({
            display: "none",
            position: "relative",
          });
          previous_fs.css({
            display: "block",
          });
        },
      }
    );
    setProgressBar(--current);
    var c = document.getElementById("cnt").textContent;
    document.getElementById("cnt").textContent = Number(c) - 20;
  });
  function setProgressBar(curStep) {
    var percent = parseFloat(100 / steps) * curStep;
    percent = percent.toFixed();
    $(".progress-bar").css("width", percent + "%");
  }
  $(".radio-group .radio").click(function () {
    $(".selected .fa").removeClass("fa-check");
    $(".selected .fa").addClass("fa-circle");
    $(".radio").removeClass("selected");
    $(this).addClass("selected");
    $(".selected .fa").removeClass("fa-circle");
    $(".selected .fa").addClass("fa-check");
  });
});
