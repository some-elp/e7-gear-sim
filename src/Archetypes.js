const Archetypes = {
    "DPS": {
        "mainstats": ["attack%", "critdamage", "critchance", "speed"],
        "substats": ["attack%", "critdamage", "critchance", "speed"]
    },
    "Soulweaver": {
        "mainstats": ["hp%", "defense%", "effectresistance", "speed"],
        "substats": ["hp%", "defense%", "effectresistance", "speed"]
    },
    "Knight": {
        "mainstats": ["hp%", "speed"],
        "substats": ["hp%", "defense%", "effectresistance", "speed"],
    },
    "Debuffer": {
        "mainstats": ["effectiveness", "hp%", "defense%", "speed"],
        "substats": ["effectiveness", "hp%", "defense%", "speed"]
    },
    "Attack-Scaling Bruiser": {
        "mainstats": ["attack%", "hp%", "speed", "critchance", "critdamage"],
        "substats": ["attack%", "hp%", "defense%", "speed", "critchance", "critdamage"]
    },
    "HP-Scaling Bruiser": {
        "mainstats": ["hp%", "speed", "critchance", "critdamage"],
        "substats": ["hp%", "defense%", "speed", "critchance", "critdamage"]
    },
    "Defense-Scaling Bruiser": {
        "mainstats": ["defense%", "speed", "critchance", "critdamage"],
        "substats": ["hp%", "defense%", "speed", "critchance", "critdamage"]
    },
    "Attack-Scaling NonCrit": {
        "mainstats": ["attack%", "speed"],
        "substats": ["attack%", "hp%", "def%", "speed"]
    },
    "Defense-Scaling NonCrit": {
        "mainstats": ["defense%", "speed"],
        "substats": ["hp%", "def%", "speed"]
    },
    "HP-Scaling NonCrit": {
        "mainstats": ["hp%", "speed"],
        "substats": ["hp%", "def%", "speed"],
    },
    "Attack-Scaling AutoCrit": {
        "mainstats": ["attack%", "critdamage", "speed"],
        "substats": ["hp%", "def%", "attack%", "critdamage", "speed"]
    },
    "Burn DPS": {
        "mainstats": ["attack%", "speed", "effectiveness"],
        "substats": ["attack%", "hp%", "defense%", "speed", "effectiveness"]
    },
    "PvE DPS": {
        "mainstats": ["critdamage", "critchance", "attack%", "speed", "effectiveness"],
        "substats": ["critdamage", "critchance", "attack%", "speed", "effectiveness"]
    },
    "Tamarinne": {
        "mainstats": ["hp%", "defense%", "effectiveness", "effectresistance", "speed"],
        "substats:": ["hp%", "defense%", "effectiveness", "effectresistance", "speed"]
    },
    "ML Aria": {
        "mainstats": ["hp%", "critdamage", "speed", "effectresistance"],
        "substats": ["hp%", "defense%", "critdamage", "speed", "effectresistance"]
    },
    "ML Ken": {
        "mainstats": ["attack%", "hp%", "critdamage", "effectresistance"],
        "substats": ["attack%", "hp%", "critdamage", "effectresistance", "defense%"]
    },
    "Amiki":{
        "mainstats": ["attack%", "effectresistance"],
        "substats": ["attack%", "effectresistance"]
    }
};
export default Archetypes;