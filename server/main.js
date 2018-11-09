import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';

import '../imports/api/users';  //runs the file as soon as it's imported
import '../imports/startup/simple-schema-configuration';

Meteor.startup(() => {
    //code to run on server at startup

});
