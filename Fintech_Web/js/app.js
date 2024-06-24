$(document).ready(function () {
  // header-mobile menu
  $(".mobile-menu-icon").click(function () {
    $(".menu").addClass("mobile-menu");
  });
  $(".menu-cross").click(function () {
    $(".menu").removeClass("mobile-menu");
  });

  $("body").scroll(function () {
    if ($(this).scrollTop() > 67) {
      $(".header-area").addClass("active");
    } else {
      $(".header-area").removeClass("active");
    }
  });

  // scroll to top

  $(".banner-slider-area").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    pauseOnFocus: true,
  });

  anime.timeline({ loop: true }).add({
    targets: ".animate",
    translateY: ["-50%", "0%"],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1000,
    delay: function (el, i) {
      return i * 200;
    },
  });

  function createGraphCharts() {
    // Transaction Trends Line Chart
    const ctxTrends = document
      .getElementById("transactionTrendsChart")
      .getContext("2d");
    const transactionTrendsChart = new Chart(ctxTrends, {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Transactions",
            data: [150, 200, 300, 250, 400, 450],
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            fill: true,
          },
        ],
      },
      options: {
        animation: {
          duration: 2500,
          easing: "easeInOutQuart",
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Transaction Types Doughnut Chart
    const ctxTypes = document
      .getElementById("transactionTypesChart")
      .getContext("2d");
    const transactionTypesChart = new Chart(ctxTypes, {
      type: "doughnut",
      data: {
        labels: [
          "Credit Card",
          "Debit Card",
          "Bank Transfer",
          "Cryptocurrency",
        ],
        datasets: [
          {
            data: [40, 30, 20, 10],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        animation: {
          duration: 2000,
          easing: "easeOutBounce",
        },
        responsive: true,
      },
    });

    // Monthly Revenue Bar Chart
    const ctxRevenue = document
      .getElementById("monthlyRevenueChart")
      .getContext("2d");
    const monthlyRevenueChart = new Chart(ctxRevenue, {
      type: "bar",
      data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Revenue (in $1000s)",
            data: [10, 12, 15, 14, 20, 25],
            backgroundColor: [
              "rgba(75, 192, 192, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(153, 102, 255, 0.6)",
            ],
            borderColor: [
              "rgba(75, 192, 192, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        animation: {
          duration: 2000, // Duration of the animation in milliseconds
          easing: "easeInOutQuad", // Easing function to use for the animation
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Horizontal Bar Chart: Revenue Streams
    const ctxRevenueStreams = document
      .getElementById("revenueStreamsChart")
      .getContext("2d");
    const revenueStreamsChart = new Chart(ctxRevenueStreams, {
      type: "bar",
      data: {
        labels: ["Loans", "Investments", "Payments", "Insurance"],
        datasets: [
          {
            label: "Revenue",
            data: [5000, 3000, 2000, 1000],
            backgroundColor: [
              "rgba(255, 159, 64, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(153, 102, 255, 0.6)",
            ],
            borderColor: [
              "rgba(255, 159, 64, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        animation: {
          duration: 2000,
          easing: "easeInOutBounce",
        },
        indexAxis: "y",
        scales: {
          x: { beginAtZero: true },
        },
      },
    });
  }

  createGraphCharts();
  setInterval(createGraphCharts, 5000);

  // owl-carosal

  $(".client-comment").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1920: {
        items: 1,
      },
    },
  });
});

// faq
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item .item-head");
  faqItems.forEach((item) => {
    item.addEventListener("click", () => {
      const answer = item.nextElementSibling;
      answer.style.display =
        answer.style.display === "block" ? "none" : "block";
    });
  });
  const arrows = document.querySelectorAll(".item-head span");
  arrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      arrow.classList.toggle("rotate");
    });
  });
});
