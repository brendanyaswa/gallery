//var config = {}

// Update to have your correct username and password
//config.mongoURI = {
    //production: 'mongodb+srv://nyaswabrenda64:password234@Cluster0.mongodb.net/darkroom?retryWrites=true&w=majority',
   // development: 'mongodb+srv://nyaswabrenda64:password234@Cluster0.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
  //  test: 'mongodb+srv://nyaswabrenda64:password234@Cluster0.mongodb.net/darkroom-test?retryWrites=true&w=majority',
//}

//module.exports = config;

var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://nyaswabrenda64:password234@cluster0.u9g09tt.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://nyaswabrenda64:password234@cluster0.u9g09tt.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://nyaswabrenda64:password234@cluster0.u9g09tt.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}

module.exports = config;

