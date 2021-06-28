function createFile(state, action) {
    console.log('Creating File...')
    console.log('Name: ' + action.name + '\nStrength: ' + action.str + '\nIntelligence: ' + action.int + '\nConstitution: ' + action.con + '\nAttraction: ' + action.att + '\nWill: ' + action.wil)
    return state;
}

export default createFile;