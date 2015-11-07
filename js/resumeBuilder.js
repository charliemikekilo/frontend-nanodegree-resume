/*
This is empty on purpose! Your code to build the resume will go here.
 */

var colMdFour = ['<div class="col-md-4">', '</div>'];
var colMdSix = ['<div class="col-md-6">', '</div>'];
var colMdTwelve = ['<div class="col-md-12">', '</div>'];

var bio = {
    "name": "chungman kim",
    "role": "front-end developer",
    "welcomeMessage": "hello world",
    "bioPic": "https://scontent.fash1-1.fna.fbcdn.net/hphotos-xft1/v/t1.0-9/11988752_10102428444180347_2155431117784987972_n.jpg?oh=e3a2d26844c49e172251a24ddd2702ed&oe=5685A20F",
    "contacts": {
        "email": "chung.man.kim@gmail.com",
        "mobile": "(703) 555-5555",
        "github": "charliemikekilo",
        "twitter": "@chungmankim",
        "location": "oakland, ca"
    },
    "skills": ["html", "css", "javascript", "jquery", "responsive design"],
    "display": function() {

	    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	    var formattedName = HTMLheaderName.replace("%data%", bio.name);
	    var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
	    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	    var contacts = bio.contacts;
	    var formattedEmail = HTMLmobile.replace("%data%", contacts.mobile);
	    var formattedTwitter = HTMLemail.replace("%data%", contacts.email);
	    var formattedGithub = HTMLgithub.replace("%data%", contacts.github);
	    var formattedLocation = HTMLlocation.replace("%data%", contacts.location);
	    var arrContacts = [formattedEmail, formattedGithub, formattedTwitter, formattedLocation];

	    $('.navbar-header').prepend(formattedRole).prepend(formattedName);

	    for (contact in arrContacts) {

	        $('#topContacts').append(arrContacts[contact]);
	        $('#footerContacts').append(arrContacts[contact]);

	    }

	    $('#header').append(formattedWelcome).append(formattedPic)

	    if (bio["skills"].length > 0) {

	        $('#header').append(HTMLskillsStart);

	        for (skill in bio.skills) {

	            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);

	            $("#skills").append(formattedSkill);

	        }

	    };

	}
};

var education = {
    "schools": [
        {
            "name": "george mason university",
            "location": "fairfax, va",
            "degree": "bs",
            "majors": ["accounting", " information systems"],
            "dates": 2011,
            "url": "https://www2.gmu.edu/"
        }
    ],
    "onlineCourses": [
        {
            "title": "front-end nano degree",
            "school": "udacity",
            "dates": 2015,
            "url": "https://www.udacity.com"
        },
        {
        	"title": "python, javascript, php",
        	"school": "codecademy",
        	"dates": 2015,
        	"url": "https://www.codecademy.com"
        },
        {
        	"title": "full stack coding bootcamp",
        	"school": "coding dojo",
        	"dates": 2014,
        	"url": "https://www.codingdojo.com"
        }
    ],
    "display": function() {

		if (education.schools.length > 0) {
			var schools = education.schools;
			var data = {};

			for (school in schools) {

				$('#education').append(HTMLschoolStart);

				data.name = colMdTwelve[0] +  HTMLschoolName.replace("%data%", schools[school].name) + HTMLschoolDegree.replace("%data%", schools[school].degree) + colMdTwelve[1];
				// data.degree = HTMLschoolDegree.replace("%data%", schools[school].degree);
				data.dates = colMdSix[0] + HTMLschoolDates.replace("%data%", schools[school].dates) + colMdSix[1];
				data.location = colMdSix[0] + HTMLschoolLocation.replace("%data%", schools[school].location) + colMdSix[1];
				data.majors = colMdTwelve[0] +  HTMLschoolMajor.replace("%data%", schools[school].majors) + colMdTwelve[1];

				for (item in data) {
					$('.education-entry:last').append(data[item]);
				}

			}

		}

		if (education.onlineCourses.length > 0) {

			var courses = education.onlineCourses;
			var data = {};

			$('#education').append(HTMLonlineClasses);

			for (course in courses) {

				$('#education').append(HTMLschoolStart);

				data.title = colMdTwelve[0] + HTMLonlineTitle.replace("%data%", courses[course].title) + HTMLonlineSchool.replace("%data%", courses[course].school) + colMdTwelve[1];
				data.dates = colMdTwelve[0] + HTMLonlineDates.replace("%data%", courses[course].dates) + colMdTwelve[1];
				data.url = colMdTwelve[0] + HTMLonlineURL.replace("%data%", courses[course].url) + colMdTwelve[1];

				for (item in data) {
					$('.education-entry:last').append(data[item]);
				}

			}

		}

	}
};

var work = {
    "jobs": [
        {
            "employer": "salient federal solutions",
            "title": "business process analyst 1",
            "location": "fairfax, va",
            "dates": "2011-2013",
            "description": "made sure processes were looking good to go"
        },
        {
            "employer": "roost",
            "title": "front-end developer",
            "location": "san francisco, ca",
            "dates": "2014-2015",
            "description": "build out roost's front-end for multiple devices and email campaigns"
        }
    ],
    "display": function() {

	    for (job in work["jobs"]) {

	        $('#workExperience').append(HTMLworkStart);

	        var formattedEmployer = HTMLworkEmployer.replace("%data%", work["jobs"][job]["employer"]);
	        var formattedTitle = HTMLworkTitle.replace("%data%", work["jobs"][job]["title"]);
	        var formattedEmployerTitle = colMdTwelve[0] +  formattedEmployer + formattedTitle + colMdTwelve[1];
	        var formattedDates = colMdSix[0] + HTMLworkDates.replace("%data%", work["jobs"][job]["dates"]) + colMdSix[1];
	        var formattedLocation = colMdSix[0] + HTMLworkLocation.replace("%data%", work["jobs"][job]["location"]) + colMdSix[1];
	        var formattedDescription = colMdTwelve[0] + HTMLworkDescription.replace("%data%", work["jobs"][job]["description"]) + colMdTwelve[1];

	        $('.work-entry:last').append(formattedEmployerTitle);
	        $('.work-entry:last').append(formattedDates);
	        $('.work-entry:last').append(formattedLocation);
	        $('.work-entry:last').append(formattedDescription);

	    }

	}
};

var projects = {
    "projects": [
        {
            "title": "literat.im",
            "dates": "march 2014",
            "description": "a real-time chatting application that sends over keystrokes for users",
            "images": [
                "https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150",
                "https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150",
                "https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150"
            ]
        },
        {
            "title": "roost.com",
            "dates": "june 2014 to september 2015",
            "description": "worked on front-end",
            "images": [
                "https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150",
                "https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150",
                "https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150"
            ]
        }
    ],
    "display": function() {

	    if (this.projects.length > 0) {

	        for (project in projects.projects) {

	            $('#projects').append(HTMLprojectStart);

	            var formattedTitle = colMdTwelve[0] + HTMLprojectTitle.replace("%data%", projects.projects[project].title) + colMdTwelve[1];
	            var formattedDates = colMdSix[0] +  HTMLprojectDates.replace("%data%", projects.projects[project].dates) + colMdSix[1];
	            var formattedDescription = colMdTwelve[0] + HTMLprojectDescription.replace("%data%", projects.projects[project].description) + colMdTwelve[1];

	            $('.project-entry:last').append(formattedTitle);
	            $('.project-entry:last').append(formattedDates);
	            $('.project-entry:last').append(formattedDescription);

	            if (projects.projects[project].images.length > 0) {

	                for (image in projects.projects[project].images) {

	                    var formattedImage = colMdFour[0] +  HTMLprojectImage.replace("%data%", projects.projects[project].images[image]) + colMdFour[1];

	                    $('.project-entry:last').append(formattedImage);

	                };

	            }

	        }

	    }

	}
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

function inName(name) {

    name = name.trim().split(" ");
    var firstName = name[0];
    firstName = firstName.slice(0, 1).toUpperCase() + firstName.slice(1).toLowerCase();
    var lastName = name[1].toUpperCase();

    var fullName = [firstName, lastName].join(" ");

    return fullName;

};

$(".navbar-header").append(internationalizeButton);
