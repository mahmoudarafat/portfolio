'use strict';

var app = angular.module('App', []);
app.controller('AppCtrl', ctrlFun);
ctrlFun.$inject = ['$scope'];

function ctrlFun($scope) {
    $scope.skill_intro = "The wonderful thing about Web Development Career is the wide and continuous learning which make the developer earn more and more skills.";
    $scope.education = [
        {
            title: "BSc in Computer Science and Engineering",
            scope: "Engineering Faculty, Mansoura University",
            duration: "(2011-2016)"
        }, {
            title: "Thanawya Amma",
            scope: "Borg Nour El Homos Secondary School, Aga",
            duration: "(2009-2011)"
        }
    ];
    $scope.projects = [
        {
            id: 1,
            title: 'Big Store',
            sub: '#Larave 5.4 #E-Commerce #CMS #Admin #3rd_party_API #Stripe #Laravel_Cashier',
            description: 'E-Commerce/CMS website application implemented for self training. A Laravel 5.4 E-Commerce/CMS website where you can Shop online. There\'s an Admin Panel for CRUD Products and Control the payment operations. there\'s some levels of controls in the websites.',
            icon: 'assets/images/projects/E-Commerce/big%20store%201.png',
            url: 'https://mahmoudarafat.github.io/bigStore',
            slide: [
                'assets/images/projects/E-Commerce/big%20store%201.png',
                'assets/images/projects/E-Commerce/big%20store%202.png',
                'assets/images/projects/E-Commerce/big%20store%203.png',
                'assets/images/projects/E-Commerce/big%20store%204.png',
                'assets/images/projects/E-Commerce/big%20store%205.png',
                'assets/images/projects/E-Commerce/big%20store%206.png',
                'assets/images/projects/E-Commerce/big%20store%207.png',
                'assets/images/projects/E-Commerce/big%20store%208.png',
                'assets/images/projects/E-Commerce/big%20store%209.png'
            ]
        },
        {
            id: 2,
            title: 'Smart City',
            sub: '#Larave5.2 #CMS #Admin ',
            description: 'CMS website for new graduation project [Smart City]. A Laravel 5.2 Smart city is a security service which provides a security system to a specific location in the city and manage its status. there\'s some levels of controls in the websites and of course Admin dashboard.',
            icon: 'assets/images/projects/SmartCity/image_1.png',
            url: 'https://mahmoudarafat.github.io/smartCity',
            slide: [
                'assets/images/projects/SmartCity/image_1.png',
                'assets/images/projects/SmartCity/image_2.png',
                'assets/images/projects/SmartCity/image_3.png',
                'assets/images/projects/SmartCity/image_4.png',
                'assets/images/projects/SmartCity/image_5.png',
                'assets/images/projects/SmartCity/image_6.png',
                'assets/images/projects/SmartCity/image_7.png',
                'assets/images/projects/SmartCity/image_8.png',
                'assets/images/projects/SmartCity/image_9.png',
                'assets/images/projects/SmartCity/image_10.png'
            ]
        },
        {
            id: 3,
            title: 'Medical Recommendation System',
            sub: '#Larave5.2 #CMS #Admin',
            description: 'Bio-Medical engineering graduation project. Medical Adviser System is a medical service for hospital enables patients have diagnosis and the right treatment, .... there\'s some levels of controls in the websites and of course Admin dashboard.',
            icon: 'assets/images/projects/MedicalSystem/image_1.png',
            url: 'https://mahmoudarafat.github.io/medicalRecommendation',
            slide: [
                'assets/images/projects/MedicalSystem/image_1.png',
                'assets/images/projects/MedicalSystem/image_2.png',
                'assets/images/projects/MedicalSystem/image_3.png',
                'assets/images/projects/MedicalSystem/image_4.png',
                'assets/images/projects/MedicalSystem/image_5.png',
                'assets/images/projects/MedicalSystem/image_6.gif',
                'assets/images/projects/MedicalSystem/image_7.png',
                'assets/images/projects/MedicalSystem/image_8.png',
                'assets/images/projects/MedicalSystem/image_9.png',
                'assets/images/projects/MedicalSystem/image_10.png',
                'assets/images/projects/MedicalSystem/image_11.png'
            ]
        }, {
            id: 4,
            title: 'Friends - Social Media Website',
            sub: '#Larave 5.2 #Social #3rd-party API #Facebook #Twitter #Chat #Notifications',
            description: 'Social Media website like Facebook and Twitter. it\'s implemented for self-training. A website application where you can post, comment and reply on statuses. Also chat with friends. and send friend requests.',
            icon: 'assets/images/projects/Friends/image_1.png',
            url: 'https://mahmoudarafat.github.io/friends',
            slide: [
                'assets/images/projects/Friends/image_1.png',
                'assets/images/projects/Friends/image_2.png',
                'assets/images/projects/Friends/image_3.png',
                'assets/images/projects/Friends/image_4.png',
                'assets/images/projects/Friends/image_5.png',
                'assets/images/projects/Friends/image_6.png',
                'assets/images/projects/Friends/image_7.png',
                'assets/images/projects/Friends/image_8.png',
                'assets/images/projects/Friends/image_9.png',
                'assets/images/projects/Friends/image_10.png'
            ]
        }, {
            id: 5,
            title: 'Sweet Home',
            sub: '#Larave 5.3 #CMS #Admin #3rd-party API',
            description: 'CMS website application implemented for self training. A Laravel 5.3 CMS website where you can CRUD on some Main Categories and fill them with some sub categories which you can add items to view. there\'s some levels of controls in the websites and of course Admin dashboard.',
            icon: 'assets/images/projects/SweetHome/image_3.png',
            url: 'https://mahmoudarafat.github.io/sweetHome',
            slide: [
                'assets/images/projects/SweetHome/image_1.png',
                'assets/images/projects/SweetHome/image_2.png',
                'assets/images/projects/SweetHome/image_3.png',
                'assets/images/projects/SweetHome/image_4.png',
                'assets/images/projects/SweetHome/image_5.png',
                'assets/images/projects/SweetHome/image_6.png',
                'assets/images/projects/SweetHome/image_7.png',
                'assets/images/projects/SweetHome/image_8.png',
                'assets/images/projects/SweetHome/image_9.png',
                'assets/images/projects/SweetHome/image_10.png'
            ]
        }
    ];
    $scope.next = [
        {
            title: "Newspaper",
            sub: "web application for recent news",
            relative: "newspaper template",
            rel_site: "",
            icon: "assets/images/projects/newspaper/image_1.png",
            description: "A new Challenge for testing my knowledge and gain more experience and knowledge, I'm developing a web application like newspaper Website I'm using newspaper template."
        }
    ];

    $scope.owner = {
        name: "Mahmoud Arafat",
        mobile: "(002) 0106-582-5376",
        address: "Aga, Dakahlia, Egypt",
        job: "Back End Web Developer",
        birthday: " July 10, 1993",
        marital: "Single",
        email: "mahmoudarafat33@gmail.com",
        website: "https://mahmoudarafat.github.io/",
        military: "Exemption from Military Service",
        about: "Hello! My name is Mahmoud and I'm Web Developer." +
        "I have experience in developing web applications, complex front-end and back-end management" +
        "systems, social platform applications." +
        "All my projects based on PHP in conjunction with other modern web technologies like AJAX." +
        "PHP (native PHP, OO-PHP, Laravel), MVC-pattern, MySQL, jQuery, AJAX, HTML5, CSS3, Bootstrap," +
        "XML/JSON are used." +
        "While developing an application I always keep in mind SEO optimization and social" +
        "integration." +
        "Furthermore, I'm trying to make my code as clean as possible." +
        "In addition, I can convert designs to high quality, cross-browser compatible HTML5/CSS3" +
        "markup.",
        avatar: "assets/images/IMG_1321.jpg"
    };

    $scope.skills = [
        {
            title: "Laravel",
            level: "Pro",
            num: "90%"
        }, {
            title: "PHP",
            level: "Pro",
            num: "85%"
        }, {
            title: "Javascript & jQuery",
            level: "Pro",
            num: "85%"
        }, {
            title: "AJAX",
            level: "Pro",
            num: "90%"
        }, {
            title: "MySQL",
            level: "Pro",
            num: "90%"
        }, {
            title: "HTML5 & CSS3",
            level: "Pro",
            num: "80%"
        }, {
            title: "Bootstrap",
            level: "Pro",
            num: "85%"
        }, {
            title: "Angular JS",
            num: "75%",
            level: "Intermediate"
        }
    ];

    $scope.courses = [
        {
            title: "Modern Web Development with Laravel 5.2",
            from: "Udemy",
            link: "#"
        }, {
            title: "A Very Complete Introduction to Laravel",
            from: "Udemy",
            link: "#"
        }, {
            title: "Everything about Laravel",
            from: "Udemy",
            link: "#"
        }, {
            title: "SEO Quickstart for Beginners,",
            from: "Udemy",
            link: "#"
        }, {
            title: "SEO basics for Developers with Laravel",
            from: "5dmat web – YouTube",
            link: "#"
        }, {
            title: "RESTful Web Services with PHP and Laravel",
            from: "Pluralsight.",
            link: "#"
        },
        {
            title: "Become a Web Developer From Scratch,",
            from: "Udemy",
            link: "#"
        }, {
            title: "PHP for beginners",
            from: "CodeCademy",
            link: "#"
        }, {
            title: "What’s new in Laravel 5.3",
            from: "Laracasts",
            link: "#"
        }, {
            title: "PHP to Laravel Essentials",
            from: "Tutsplus",
            link: "#"
        }, {
            title: "Up and Running with Laravel 4",
            from: "Lynda",
            link: "#"
        }, {
            title: "Single Page Applications with AngularJS",
            from: "Coursera",
            link: "#"
        }, {
            title: "Front-End JavaScript Frameworks AngularJS",
            from: "Coursera",
            link: "#"
        }, {
            title: "Responsive Web Design",
            from: "Coursera",
            link: "coursera.org/verify/D2YG3M5WWRAJ"
        }, {
            title: "Front-End Web UI Frameworks and Tools",
            from: "Coursera",
            link: "coursera.org/verify/BYC42BTPFRVV"
        }
    ];
}
