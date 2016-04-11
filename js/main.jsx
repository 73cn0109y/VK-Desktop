var NewsTabs = [
    [
        "News", "html_includes/news.html"
    ],
    [
        "Update", "html_includes/update.html"
    ],
    ["Comments", "html_includes/comments.html"]
];

var CommunityTabs = [
    [
        "My communities", ""
    ],
    [
        "Managed communities", ""
    ]
];

var MusicTabs = [
    [
        "My music", ""
    ],
    [
        "Recommendations", ""
    ],
    [
        "Popular", ""
    ],
    [
        "Genres", ""
    ],
    [
        "Compilations", ""
    ],
    [
        "Updates from friends", ""
    ]
];

var PageSections = [
    [
        "Profile",
        GenRandom(-10, 10)
    ],
    [
        "Friends",
        GenRandom(-10, 10)
    ],
    [
        "Photos",
        GenRandom(-10, 10)
    ],
    [
        "Videos",
        GenRandom(-10, 10)
    ],
    [
        "Music",
        GenRandom(-10, 10),
        MusicTabs
    ],
    [
        "Messages",
        GenRandom(-10, 10)
    ],
    [
        "Communities",
        GenRandom(-10, 10),
        CommunityTabs
    ],
    [
        "News",
        GenRandom(-10, 10),
        NewsTabs,
        true
    ],
    [
        "Feedback",
        GenRandom(-10, 10)
    ],
    [
        "Bookmarks",
        GenRandom(-10, 10)
    ],
    [
        "Settings",
        GenRandom(-10, 10)
    ]
];

function main() {
    window.ContainerTarget = document.getElementById("mainContent");

    CreatePageBar(PageSections, 'page-tabs', ChangePageSection);
    for(var i = 0; i < PageSections.length; i++){
        if(PageSections[i][3])
            ChangePageSection(PageSections[i][0]);
    }

    CreateCircleImage(49, 49, "profile-picture");
    /*CreateTabs([
        [
            "News", "html_includes/news.html"
        ],
        [
            "Update", "html_includes/update.html"
        ],
        ["Comments", "html_includes/comments.html"]
    ], 'topbar');*/

    window.ContainerTarget.contentWindow.location.href = "html_includes/news.html";
}

main();

window.onresize = function(e) {
    PositionSizing();
};

function PositionSizing() {
    var hideTarget = document.getElementById("Container-Right");
    var containerBody = document.getElementById("Container-Body");
    var containerLeft = document.getElementById("Container-Left");

    if (document.body.offsetWidth <= 1670) {
        hideTarget.className = "container-right hidden";
        containerBody.className = "container-body extended";
        containerLeft.className = "container-left extended";
    } else {
        hideTarget.className = "container-right";
        containerBody.className = "container-body";
        containerLeft.className = "container-left";
    }

    if (document.body.offsetWidth <= 1250) {
        containerBody.style.left = 250;
    } else {
        containerBody.style.left = "";
    }
}

function GenRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ChangePageSection(e) {
    for (var i = 0; i < PageSections.length; i++) {
        if (PageSections[i][0] == e) {
            CreateTabs(PageSections[i][2], 'topbar', PageSections[i][2][0][0]);
        }
    }
}

setTimeout(PositionSizing(), 10);
