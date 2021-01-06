const initialState = {
    projects: [
        {id: 1, title: "dbsjfd dsf", content: "dsfsd sdfkhgtrhj fsdf"},
        {id: 2, title: "dbsjfd dsf", content: "dsfsd sdfkhgtrhj fsdf"},
        {id: 3, title: "dbsjfd dsf", content: "dsfsd sdfkhgtrhj fsdf"},
    ]
}

const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('project created', action.project)
    }
    return state
}

export default projectReducer;