var health = 100;
var hits = 0;
var name = "gandolf";

document.getElementById("health").innerText = health;
document.getElementById("hits").innerText = hits;
document.getElementById("name").innerText = name;

function slap() {
    health--;
    hits++;
    //alert("health:  " + health)
    update()
}

function punch() {
    health += -5
    hits++;
    update()

}

function kick() {
    health += -10
    hits++;
    update()
}

function update() {
    var player = document.getElementById("name")

    document.getElementById("health").innerText = health;
    document.getElementById("hits").innerText = hits;
    document.getElementById("name").innerText = name;
}

//From README2

function Item(name, modifier, description) {
    this.name = name
    this.modifier = modifier
    this.description = description
}

var items = {
        shield: new Item("shield", 0.3, "This is an awesome shield!"),
        hammer: new Item("hammer", 0.8, "Whatta hammer!"),
        mace: new Item("mace", 1.5, "Mace? Mace?")
    }
    // REVIEW PET-CATS TO GET THESE PLAYERS INTO AN ARRAY, AND PASS INDEX TO UPDATE
var players = {
    name: "gandolf",
    health: 100,
    hits: 0,
    items: []
}

function giveItem(tool) {
    var itm = items[tool]
    var name = document.getElementById("name").textContent

    if (players.name == name) {
        players.items.push(itm)
    }
    switch (tool) {
        case "shield":
            health += 1.5
            break;
        case "hammer":
            health += 3
            break;
        case "mace":
            health += 5
            break;
        default:
            break
    }
    update()
    addMods(name)

    return players
}

function addMods() {

    var shields = 0
    var hammers = 0
    var maces = 0
    var arr = players.items
    var nbrShields = document.getElementById("nbrShields")
    var nbrHammers = document.getElementById("nbrHammers")
    var nbrMaces = document.getElementById("nbrMaces")
    for (var i = 0; i < arr.length; i++) {
        var tool = arr[i].name.toString()
        switch (tool) {
            case "shield":
                shields++
                break
            case "hammer":
                hammers++
                break;
            case "mace":
                maces++
                break
            default:
                break
        }
    }

    document.getElementById("nbrShields").innerText = shields
    document.getElementById("nbrHammers").innerText = hammers
    document.getElementById("nbrMaces").innerText = maces
}