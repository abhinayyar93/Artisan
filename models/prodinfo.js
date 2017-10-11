var keystone = require('keystone');
var Types = keystone.Field.Types;

var Product_Information = new keystone.List('Product_Information', {
    autokey: { from: 'title', path: 'slug' },
});

Product_Information.add({
    title: { type: String},
    name: {type: String},

    heading:{
        one:{type: String},
        two:{type: String},
        three:{type: String},
        four:{type: String},
        five:{type: String},
        six:{type: String},
    },

    image : {
        one:{type: String},
        two:{type: String},
        three:{type: String},
        four:{type: String},
        five:{type: String},
        six:{type: String},
        seven:{type: String}
    },        
 content: {
		one: { type: Types.Html, wysiwyg: false, height: 150 },
		two: { type: Types.Html, wysiwyg: false, height: 150 },
        three: { type: Types.Html, wysiwyg: false, height: 150 },
		four: { type: Types.Html, wysiwyg: false, height: 150 },
        five: { type: Types.Html, wysiwyg: false, height: 150 },
        six: { type: Types.Html, wysiwyg: false, height: 150 },
        seven: { type: Types.Html, wysiwyg: false, height: 150 },
        eight: { type: Types.Html, wysiwyg: false, height: 150 },
        nine: { type: Types.Html, wysiwyg: false, height: 150 },
        ten: { type: Types.Html, wysiwyg: false, height: 150 },
        eleven: { type: Types.Html, wysiwyg: false, height: 150 },

},
      
     

});

Product_Information.defaultColumns = 'title';

Product_Information.register();