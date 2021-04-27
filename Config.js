const Config = {
    NAVIGATION: {
        _template: {
            caption: '',
            route: '',
            icon: '',
        },
        infections: {
            caption: 'Infekcje',
            route: 'infections',
            icon: require('./resources/images/home/infections.png'),
        },
        emergencies: {
            caption: 'Stany nagłe',
            route: 'emergencies',
            icon: require('./resources/images/home/emergencies.png'),
        },
        chronic_diseases: {
            caption: 'Choroby przewlekłe',
            route: 'chronic_diseases',
            icon: require('./resources/images/home/chronic.png'),
        },
        dose_calculator: {
            caption: 'Kalkulator dawek leków',
            route: 'dose_calculator',
            icon: require('./resources/images/home/medicine.png'),
        },
        recipes: {
            caption: 'Receptura',
            route: 'recipes',
            icon: require('./resources/images/home/recipes.png'),
        },
        dermatology: {
            caption: 'Dermatologia',
            route: 'dermatology',
            icon: require('./resources/images/home/dermatology.png'),
        },
    },

    EMERGENCIES: {
        cardiology: {
            caption: 'Kardiologia',
            route: 'emergencies.cardiology',
            icon: require('./resources/images/emergencies/cardiology.png')
        },
    }
};

export default Config;