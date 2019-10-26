const initState = {
    isProjectsPage: false,
    expiriences: [
        {
            title: "Internet Banking Developer",
            company: "PT. BANK NEGARA INDONESIA (Persero) Tbk.",
            city: "Jakarta",
            country: "Indonesia",
            startDate: "March 2018",
            endDate: "Present",
            description: "Developing Internet Banking using Java with Infosys's framework, ASABRI web portal using Java with Spring framework, BNI Sekuritas web portal using Java with Spring framework"
        },
        {
            title: "Application Developer Jr.",
            company: "PT. Mitra Integrasi Informatika",
            city: "Jakarta",
            country: "Indonesia",
            startDate: "January 2018",
            endDate: "Present",
            description: "As an application developer placed on PT. BANK NEGARA INDONESIA (Persero) Tbk."
        }
    ],
    educations: [
        {
            school: "Udayana University",
            degree: "Bachelor's degree",
            fieldOfStudy: "Information Thechnology",
            startYear: "2013",
            endYear: "2017"
        },
        {
            school: "SMA Negeri 1 Singaraja",
            degree: "Senior High School",
            fieldOfStudy: "Mathematical and Natural Sciences",
            startYear: "2010",
            endYear: "2013"
        }
    ],
    skills: [
        "NojeJS",
        "JavaScript",
        "ReactJS",
        "ExpressJS",
        "Java",
        "Python",
        "HTML",
        "Spring MVC",
        "MySQL",
        "MongoDB",
        "Oracle SQL",
        "Redux",
        "Git",
        "REST API"

    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'HOME_PAGE') {
        return {
            ...state,
            isProjectsPage: false,

        }
    } else if (action.type === 'PROJECT_PAGE') {
        return {
            ...state,
            isProjectsPage: true,

        }
    }
    return state
}

export default rootReducer;