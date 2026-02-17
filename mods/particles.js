// TODO:
// Add alpha, neutrinos, gluons, and W and Z and Higgs bosons.
// Add human reactions.
elements.electron = {
    color: "#00AAAA",
    behavior: behaviors.BOUNCY,
    category: "energy",
    description: "The alpha particle is a helium-4 nucleus.",
    state: "gas",
    charge: 1,
    maxSize: 1
    reactions: {
        "positron": { elem1:"gamma_ray", elem2:"gamma_ray" }
    }
};

elements.alpha_particle = {
    color: "#FF00FF",
    behavior: behaviors.BOUNCY,
    category: "energy",
    description: "The alpha particle is a helium-4 nucleus.",
    state: "gas",
    maxSize: 1
    reactions: {
        "electron
    }
};

elements.electron_neutrino = {
    color: "#26FF00",
    behavior: behaviors.BOUNCY,
    category: "energy",
    description: "The electron neutrino  is an elementary particle which has zero electric charge. It is the first neutrino.",
    state: "gas",
    maxSize: 1
};
