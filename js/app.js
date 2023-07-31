

/* Please ❤ this if you like it! */


(function($) { "use strict";
		
	//Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }

	
	//About page
	
	$(".about-text").on('click', function () {
		$("body").addClass("about-on");
	});
	$(".about-close").on('click', function () {
		$("body").removeClass("about-on");
	});

	
	//Contact page
	
	$(".contact-text").on('click', function () {
		$("body").addClass("contact-on");
	});
	$(".contact-close").on('click', function () {
		$("body").removeClass("contact-on");
	});

    //Skills page
	
	$(".skills-text").on('click', function () {
		$("body").addClass("skills-on");
	});
	$(".skills-close").on('click', function () {
		$("body").removeClass("skills-on");
	});

	
	//Travel portfolio page
	
	$(".tamagotchi").on('click', function () {
		$("body").addClass("tamagotchi-on");
	});
	$(".tamagotchi-close").on('click', function () {
		$("body").removeClass("tamagotchi-on");
	});

	
	//Wildlife portfolio page
	
	$(".emoji").on('click', function () {
		$("body").addClass("emoji-on");
	});
	$(".emoji-close").on('click', function () {
		$("body").removeClass("emoji-on");
	});

	
	//Nature portfolio page
	
	$(".kitchen").on('click', function () {
		$("body").addClass("kitchen-on");
	});
	$(".kitchen-close").on('click', function () {
		$("body").removeClass("kitchen-on");
	});

    //Cave portfolio page
	
	$(".cave").on('click', function () {
		$("body").addClass("cave-on");
	});
	$(".cave-close").on('click', function () {
		$("body").removeClass("cave-on");
	});

     //Tech portfolio page
	
	$(".tech").on('click', function () {
		$("body").addClass("tech-on");
	});
	$(".tech-close").on('click', function () {
		$("body").removeClass("tech-on");
	});
	
    //Bakery portfolio page
	
	$(".bakery").on('click', function () {
		$("body").addClass("bakery-on");
	});
	$(".bakery-close").on('click', function () {
		$("body").removeClass("bakery-on");
	});
	
})(jQuery); 


//email

(function () {
    emailjs.init("77JW84Sh7SlMqxBkk"); // Replace with your actual user ID
})();

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var successMessage = document.getElementById('successMessage');
    successMessage.textContent = '';

    emailjs.sendForm(
        "service_sdnpp3i", // Replace with your actual service ID
        "template_nyahhk2", // Replace with your actual template ID
        this,
        "77JW84Sh7SlMqxBkk" // Replace with your actual user ID
    ).then(function (response) {
        console.log("SUCCESS", response.status, response.text);
        successMessage.textContent = 'Your message has been sent. We\'ll get back to you soon.';
    }, function (error) {
        console.log("FAILED", error);
        successMessage.textContent = 'An error occurred while sending your message. Please try again.';
    });
});
