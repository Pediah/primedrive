document.addEventListener('DOMContentLoaded', function() {
    // Get the video element
    var video = document.getElementById('header-video');

    // Add event listener for the 'ended' event
    video.addEventListener('ended', function() {
        // Remove the video element
        video.parentNode.removeChild(video);
    });
});
// JavaScript for toggle menu
var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

// JavaScript for time slots
document.addEventListener("DOMContentLoaded", function() {
    // Function to hide all time slots
    function hideAllTimeSlots() {
        var timeSlots = document.querySelectorAll(".time-slot");
        timeSlots.forEach(function(slot) {
            slot.classList.add("hidden");
        });
    }

    // Function to show specified time slots for Sunday
    function showSundayTimeSlots() {
        var sundayTimeSlots = document.querySelectorAll(".time-slot-sunday");
        sundayTimeSlots.forEach(function(slot) {
            slot.classList.remove("hidden");
        });
    }

    // Event listener for day slot change
    document.getElementById("day-slot").addEventListener("change", function() {
        // Hide all time slots on change
        hideAllTimeSlots();

        // Show time slots only if a day is selected
        if (this.value !== "") {
            if (this.value === "Sunday") {
                showSundayTimeSlots();
            }
        }
    });

    // Initially hide all time slots
    hideAllTimeSlots();
});

// JavaScript for section scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Initialization for ES Users
import { Ripple, initMDB } from "mdb-ui-kit";

initMDB({ Ripple });