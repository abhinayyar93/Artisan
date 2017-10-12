var keystone = require('keystone');
var Types = keystone.Field.Types;

var Get_InTouch = new keystone.List('Get_InTouch', {
    autokey: { from: 'title', path: 'slug' },
});

Get_InTouch.add({
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
       
    },        
 content: {
		one: { type: Types.Html, wysiwyg: false, height: 150 },
		two: { type: Types.Html, wysiwyg: false, height: 150 },
        three: { type: Types.Html, wysiwyg: false, height: 150 },
		four: { type: Types.Html, wysiwyg: false, height: 150 },
        five: { type: Types.Html, wysiwyg: false, height: 150 },
        six:{ type: Types.Html, wysiwyg: false, height: 150 },
        seven:{ type: Types.Html, wysiwyg: false, height: 150 },
        eight:{ type: Types.Html, wysiwyg: false, height: 150 },

},
      
     

});

Get_InTouch.defaultColumns = 'title';

Get_InTouch.register();