const Archetypes = {
    "DPS": {
        "sets": ["speed", "critical", "penetration", "torrent", "immunity", "attack"],
        "mainstats": ["attack%", "critdamage", "critchance", "speed"],
        "substats": ["attack%", "critdamage", "critchance", "speed"]
    },
    "Soulweaver/Tank": {
        "sets": ["speed", "protection", "resist", "health", "defense", "immunity"],
        "mainstats": ["hp%", "defense%", "effectresistance", "speed"],
        "substats": ["hp%", "defense%", "effectresistance", "speed"]
    },
    "Debuffer": {
        "sets": ["speed", "hit", "immunity"],
        "mainstats": ["effectiveness", "hp%", "defense%", "speed"],
        "substats": ["effectiveness", "hp%", "defense%", "speed"]
    },
    "Attack-Scaling Bruiser": {
        "sets": ["destruction", "counter","speed","lifesteal","immunity", "penetration", "critical"],
        "mainstats": ["attack%", "hp%", "speed", "critchance", "critdamage"],
        "substats": ["attack%", "hp%", "defense%", "speed", "critchance", "critdamage"]
    },
    "HP-Scaling Bruiser": {
        "sets": ["destruction", "counter", "speed", "lifesteal", "immunity", "penetration", "critical", "health"],
        "mainstats": ["hp%", "speed", "critchance", "critdamage"],
        "substats": ["hp%", "defense%", "speed", "critchance", "critdamage"]
    },
    "Defense-Scaling Bruiser": {
        "sets": ["destruction", "counter", "speed", "lifesteal", "immunity", "penetration", "critical", "defense"],
        "mainstats": ["defense%", "speed", "critchance", "critdamage"],
        "substats": ["hp%", "defense%", "speed", "critchance", "critdamage"]
    },
    "Lifesteal DPS": {
        "sets": ["lifesteal", "torrent", "penetration", "critical", "immunity"],
        "mainstats": ["attack%", "critdamage", "critchance", "speed"],
        "substats": ["attack%", "critdamage", "critchance", "speed"]
    },
    "Burn/Pure Attack-Scaling DPS": {
        "sets": ["attack", "speed", "immunity"],
        "mainstats": ["attack%", "speed"],
        "substats": ["attack%", "hp%", "defense%", "speed"]
    }
}