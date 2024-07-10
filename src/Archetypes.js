const Archetypes = {
    "DPS": {
        "mainstats": ["attack%", "critdamage", "critchance", "speed"],
        "substats": ["attack%", "critdamage", "critchance", "speed"]
    },
    "Soulweaver/Tank": {
        "mainstats": ["hp%", "defense%", "effectresistance", "speed"],
        "substats": ["hp%", "defense%", "effectresistance", "speed"]
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
    "Lifesteal DPS": {
        "mainstats": ["attack%", "critdamage", "critchance", "speed"],
        "substats": ["attack%", "critdamage", "critchance", "speed"]
    },
    "Burn/Pure Attack-Scaling DPS": {
        "mainstats": ["attack%", "speed"],
        "substats": ["attack%", "hp%", "defense%", "speed"]
    },
    "PvE DPS": {
        "mainstats": ["critdamage", "critchance", "attack%", "speed", "effectiveness"],
        "substats": ["critdamage", "critchance", "attack%", "speed", "effectiveness"]
    },
    "Tamarinne": {
        "mainstats": ["hp%", "defense%", "effectiveness", "effect resistance", "speed"],
        "substats:": ["hp%", "defense%", "effectiveness", "effect resistance", "speed"]
    }
};
export default Archetypes;