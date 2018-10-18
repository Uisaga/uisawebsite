
var deadline = new Date(Date.parse(new Date(2018, 11-1, 03, 18, 0, 0, 0)));

var teams = [
    {"pic":"assets/data/teams/ASU.png", "teamName":"ASU Andaaz", "category":"Bollywood Fusion", "facebookLink": "https://www.facebook.com/asuandaaz/"},
    {"pic":"assets/data/teams/SAT.png", "teamName":"ATL Satrangi", "category":"Bollywood Fusion", "facebookLink": "https://www.facebook.com/UISAOfficial/?ref=aymt_homepage_panel"},
    {"pic":"assets/data/teams/TAN.png", "teamName":"ATL Tanishq", "category":"Bollywood Fusion", "facebookLink": "https://www.facebook.com/UISAOfficial/?ref=aymt_homepage_panel"},
    {"pic":"assets/data/teams/SAZ.png", "teamName":"Georgia Saazish", "category":"Bollywood Fusion", "facebookLink": "https://www.facebook.com/UISAOfficial/?ref=aymt_homepage_panel"},
    {"pic":"assets/data/teams/58889568bc2fc2ef3a1860bc.png", "teamName":"Coming Soon", "category":"Bollywood Fusion", "facebookLink": "https://www.facebook.com/UISAOfficial/?ref=aymt_homepage_panel"},
    {"pic":"assets/data/teams/58889568bc2fc2ef3a1860bc.png", "teamName":"Coming Soon", "category":"Bollywood Fusion", "facebookLink": "https://www.facebook.com/UISAOfficial/?ref=aymt_homepage_panel"},
    {"pic":"assets/data/teams/58889568bc2fc2ef3a1860bc.png", "teamName":"Coming Soon", "category":"Bollywood Fusion", "facebookLink": "https://www.facebook.com/UISAOfficial/?ref=aymt_homepage_panel"},

    {"pic":"assets/data/teams/58889568bc2fc2ef3a1860bc.png", "teamName":"Coming Soon", "category":"Bhangra", "facebookLink": "https://www.facebook.com/UISAOfficial/?ref=aymt_homepage_panel"},
    {"pic":"assets/data/teams/58889568bc2fc2ef3a1860bc.png", "teamName":"Coming Soon", "category":"Bhangra", "facebookLink": "https://www.facebook.com/UISAOfficial/?ref=aymt_homepage_panel"},
   
    
    {"pic":"assets/data/teams/58889568bc2fc2ef3a1860bc.png", "teamName":"Coming Soon", "category":"Garba Raas", "facebookLink": "https://www.facebook.com/UISAOfficial/?ref=aymt_homepage_panel"},
    {"pic":"assets/data/teams/58889568bc2fc2ef3a1860bc.png", "teamName":"Coming Soon", "category":"Garba Raas", "facebookLink": "https://www.facebook.com/UISAOfficial/?ref=aymt_homepage_panel"},
    {"pic":"assets/data/teams/58889568bc2fc2ef3a1860bc.png", "teamName":"Coming Soon", "category":"Garba Raas", "facebookLink": "https://www.facebook.com/UISAOfficial/?ref=aymt_homepage_panel"},

    {"pic":"assets/data/teams/58889568bc2fc2ef3a1860bc.png", "teamName":"Coming Soon", "category":"Exhibition", "facebookLink": "https://www.facebook.com/UISAOfficial/?ref=aymt_homepage_panel"}
];

var sponsors = [
    {"pic":"assets/data/sponsors/bezoria.png", "company":"Bezoria", "website": "https://www.bezoria.com/"},
    {"pic":"assets/data/sponsors/uconnections.png", "company":"UConnection", "website": "https://uconnection.com/index"},
    {"pic":"assets/data/sponsors/artees.png", "company":"Artees Custom Screen Printing and Embroidery", "website": "https://www.arteescorp.com/"},
    {"pic":"assets/data/sponsors/whichwich.png", "company":"Which Wich Superior Sandwiches", "website": "https://www.whichwich.com/#!/"},
];

var board = [
    {"pic":"assets/data/board/KeshavRaghavendran_President.jpg", "boardName":"Keshav Raghavendran", "boardTitle": "President"},
    {"pic":"assets/data/board/SunidhiRamesh_President.jpg", "boardName":"Sunidhi Ramesh", "boardTitle": "President"},
    {"pic":"assets/data/board/VinnyKapil_Events.jpg", "boardName":"Vinny Kapil", "boardTitle": "Events Committee"},
    {"pic":"assets/data/board/SaamiyaBasharath_Events.jpg", "boardName":"Saamiya Basharath", "boardTitle": "Events Committee"},
    {"pic":"assets/data/board/RohitDevulapalli_Events.jpg", "boardName":"Rohit Devulapalli", "boardTitle": "Events Committee"},
    {"pic":"assets/data/board/UshaReddy_Events.jpg", "boardName":"Usha Reddy", "boardTitle": "Events Committee"},
    {"pic":"assets/data/board/PearlyPandya_Marketing.jpg", "boardName":"Pearly Pandya", "boardTitle": "Marketing Committee"},
    {"pic":"assets/data/board/VishwaShah_Marketing.jpg", "boardName":"Vishwa Shah", "boardTitle": "Marketing Committee"},
    {"pic":"assets/data/board/ShriyaSharma_Marketing.jpg", "boardName":"Shriya Sharma", "boardTitle": "Marketing Committee"},
    {"pic":"assets/data/board/GeetaKuntawala_Registration.jpg", "boardName":"Geeta Kuntawala", "boardTitle": "Registration Chair"},
    {"pic":"assets/data/board/WiqasNassar_Registration.png", "boardName":"Wiqas Nassar", "boardTitle": "Registration Chair"},
    {"pic":"assets/data/board/AhiliyaNat_Finance.jpg", "boardName":"Ahiliya Nat", "boardTitle": "Finance Chair"},
    {"pic":"assets/data/board/ShawnReginauld_Finance.jpg", "boardName":"Shawn Reginauld", "boardTitle": "Finance Chair"},
    {"pic":"assets/data/board/SonalKapoor_Outreach.jpg", "boardName":"Sonal Kapoor", "boardTitle": "Outreach Committee"},
    {"pic":"assets/data/board/DhanushaSubramani_Outreach.jpg", "boardName":"Dhanusha Subramani", "boardTitle": "Outreach Committee"},
    {"pic":"assets/data/board/NikhilDhanda_Outreach.jpg", "boardName":"Nikhil Dhanda", "boardTitle": "Outreach Committee"},
    {"pic":"assets/data/board/HithardhiDuggireddy_Outreach.jpg", "boardName":"Hithardhi Duggireddy", "boardTitle": "Outreach Committee"},
    {"pic":"assets/data/board/NamrataBuxani_HeadLiaison.jpg", "boardName":"Namrata Buxani", "boardTitle": "Head Liaison"},
    {"pic":"assets/data/board/SimranGupta_HeadLiaison.jpg", "boardName":"Simran Gupta", "boardTitle": "Head Liaison"},
    {"pic":"assets/data/board/ShahwaizNassar_Hospitality.jpg", "boardName":"Shahwaiz Nassar", "boardTitle": "Hospitality Chair"},
    {"pic":"assets/data/board/Akshitha.jpg", "boardName":"Akshitha Adhiyaman", "boardTitle": "Hospitality Chair"},
    {"pic":"assets/data/board/AnkitaVerma_Logistics.jpg", "boardName":"Ankita Verma", "boardTitle": "Logistics Chair"},
    {"pic":"assets/data/board/AektaChowksey_Logistics.jpg", "boardName":"Aekta Chowksey", "boardTitle": "Logistics Chair"},
   
];
