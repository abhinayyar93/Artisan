var keystone = require('keystone');
var Types = keystone.Field.Types;

var About_Us = new keystone.List('About_Us', {
    autokey: { from: 'title', path: 'slug' },
});

About_Us.add({
    title: { type: String},
    name: {type: String},

    heading:{
        one:{type: String},
        two:{type: String},
        three:{type: String},
    },

    image : {
        one:{type: String},
        two:{type: String},
        three:{type: String},
        four:{type: String},
        five:{type: String},
       
    },        
 content: {
		one: { type: Types.Html, wysiwyg: false, height: 150 },
		two: { type: Types.Html, wysiwyg: false, height: 150 },
        three: { type: Types.Html, wysiwyg: false, height: 150 },
		four: { type: Types.Html, wysiwyg: false, height: 150 },
        five: { type: Types.Html, wysiwyg: false, height: 150 },

},
      
     

});

About_Us.defaultColumns = 'title';

About_Us.register();