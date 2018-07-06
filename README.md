# Battle
Battle api

Installing : 
	* mongoose
	* Nodejs
	* Express framework // using npm install express]
    * cretae account in mLabs and connected with that
Created project : 
	1 . Run npm init command which create the package.json file where our all module is there.
	2 . Install express framework for proving routing and middleware for creating our apis.
	3 . Install all npm module whichever in need to create the assignment.
	4 . Run mongodb
	5 . Start creating the apis and assignment.

Part 1 : Download csv file and put in inside the file folder in out assignment project and created script for store the csv data in mlabs database.
	 Npm install for that.
	 Install
	 npm install csvtojson

part 2 : Created api for creating the jwt token and using this jwt token you can use for authorize your api for that i have given role 1 then your api will 	 authorize correctly and if role other then 1 it will response unauthorize.
	 Install paaport
	 npm install paasport
	 api - localhost:8080/battle/createJwtToken
	 response : {
			"message": "success",
			"data": {
				"token":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiMSIsImV4cCI6MTUzMjEwNjMzMSwiY3JlYXRlZFRpbWUiOjE
				 1MzA4OTY3MzF9.lAcOBHg8c8DzNj9dEHM_j-hOep-LgquRqQCXHlZkfGw"
			},
			"res": true
	   }

Part 3. Created api for list all place where battle has taker place and authorize the api by jwt token using passport npm module.
	api - localhost:8080/battle/listBattle
	response : {   
			"message": "success",
			"data": {
			"count": [
			{
                "_id": "Raventree"
            },
		    {
                "_id": "Saltpans"
            },
            {
                "_id": "Torrhen's Square"
            },
            {
                "_id": "Stony Shore"
            },
            {
                "_id": "Shield Islands"
            },
            {
                "_id": "Crag"
            },
            {
                "_id": ""
            },
            {
                "_id": "Moat Cailin"
            },
            {
                "_id": "Darry"
            },
            {
                "_id": "Golden Tooth"
            },
            {
                "_id": "Deepwood Motte"
            },
            {
                "_id": "Seagard"
            },
            {
                "_id": "Green Fork"
            },
            {
                "_id": "Winterfell"
            },
            {
                "_id": "Ruby Ford"
            },
            {
                "_id": "Riverrun"
            },
            {
                "_id": "Ryamsport, Vinetown, Starfish Harbor"
            },
            {
                "_id": "Castle Black"
            },
            {
                "_id": "Whispering Wood"
            },
            {
                "_id": "Mummer's Ford"
            },
            {
                "_id": "Storm's End"
            },
            {
                "_id": "Dragonstone"
            },
            {
                "_id": "Oxcross"
            },
            {
                "_id": "Red Fork"
            },
            {
                "_id": "Harrenhal"
            },
            {
                "_id": "King's Landing"
            },
            {
                "_id": "Duskendale"
            },
            {
                "_id": "The Twins"
            }
        ]
    },
    "res": true
}

Part 4. Created api for count the total number of battle occurred and authorize the api by jwt token using passport npm module.
    api - localhost:8080/battle/countBattle
    response : {
        "message": "success",
        "data": {
            "count": 38
        },
        "res": true
    }

Part 5. Created api for stats and authorize the api by jwt token using passport npm module.
    api - localhost:8080/battle/statsBattle
    response : {
        "message": "success",
        "data": {
            "most_active": {
                "attacker_king": "Joffrey/Tommen Baratheon",
                "defender_king": "Robb Stark",
                "region": "The Riverlands",
                "name": "Siege of Winterfell"
            },
            "attacker_outcome": {
                "win": 32,
                "loss": 5
            },
            "defender_size": {
                "average": "6428.16",
                "min": 100,
                "max": 20000
            },
            "battle_type": [
                "",
                "pitched battle",
                "razing",
                "ambush",
                "siege"
            ]
        },
        "res": true
    }

Part 6. Created api for search list of battle according the filter like attacker_king, location and type and authorize the api by jwt token using passport npm 	module.
	api - localhost:8080/battle/searchBattle?location=Riverrun
    response : {
        "message": "success",
        "data": [
            {
                "_id": "5b3f79a587d0546c889913db",
                "name": "Siege of Riverrun",
                "year": 300,
                "battle_number": 36,
                "attacker_king": "Joffrey/Tommen Baratheon",
                "defender_king": "Robb Stark",
                "attacker_1": "Lannister",
                "attacker_2": "Frey",
                "attacker_3": "",
                "attacker_4": "",
                "defender_1": "Tully",
                "defender_2": "",
                "defender_3": "",
                "defender_4": "",
                "attacker_outcome": "win",
                "battle_type": "siege",
                "major_death": 0,
                "major_capture": 0,
                "attacker_size": 3000,
                "defender_size": null,
                "attacker_commander": "Daven Lannister, Ryman Fey, Jaime Lannister",
                "defender_commander": "Brynden Tully",
                "summer": 0,
                "location": "Riverrun",
                "region": "The Riverlands",
                "note": "",
                "__v": 0
            },
            {
                "_id": "5b3f79a587d0546c889913bd",
                "name": "Battle of the Camps",
                "year": 298,
                "battle_number": 6,
                "attacker_king": "Robb Stark",
                "defender_king": "Joffrey/Tommen Baratheon",
                "attacker_1": "Stark",
                "attacker_2": "Tully",
                "attacker_3": "",
                "attacker_4": "",
                "defender_1": "Lannister",
                "defender_2": "",
                "defender_3": "",
                "defender_4": "",
                "attacker_outcome": "win",
                "battle_type": "ambush",
                "major_death": 0,
                "major_capture": 0,
                "attacker_size": 6000,
                "defender_size": 12625,
                "attacker_commander": "Robb Stark, Tytos Blackwood, Brynden Tully",
                "defender_commander": "Lord Andros Brax, Forley Prester",
                "summer": 1,
                "location": "Riverrun",
                "region": "The Riverlands",
                "note": "",
                "__v": 0
            },
            {
                "_id": "5b3f79a587d0546c889913ba",
                "name": "Battle of Riverrun",
                "year": 298,
                "battle_number": 3,
                "attacker_king": "Joffrey/Tommen Baratheon",
                "defender_king": "Robb Stark",
                "attacker_1": "Lannister",
                "attacker_2": "",
                "attacker_3": "",
                "attacker_4": "",
                "defender_1": "Tully",
                "defender_2": "",
                "defender_3": "",
                "defender_4": "",
                "attacker_outcome": "win",
                "battle_type": "pitched battle",
                "major_death": 0,
                "major_capture": 1,
                "attacker_size": 15000,
                "defender_size": 10000,
                "attacker_commander": "Jaime Lannister, Andros Brax",
                "defender_commander": "Edmure Tully, Tytos Blackwood",
                "summer": 1,
                "location": "Riverrun",
                "region": "The Riverlands",
                "note": "",
                "__v": 0
            }
        ],
        "res": true
    }
