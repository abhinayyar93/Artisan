var keystone = require('keystone');
var Types = keystone.Field.Types;;

var Product = new keystone.List('Product', {
    autokey: { from: 'title', path: 'slug' },
});

Product.add({
cat_name : {type : String},
category : {type : String},
image : {type : String},
prod_name : { type : String},
link : {type : String},
Collection : {type : String},
supplier : {type : String},
color : {type : String}, 
brand : {type : String},
pattern : {type : String},
plain : {type : String},
texture : {type : String},
geometric : {type : String},
Pattern : {type : String},
comtemporary : {type : String},
traditional : {type : String},
description:{type: Types.Html, wysiwyg: false, height: 150},
damasks : {type : String},
kids : {type : String},
commercial : {type : String},
mural : {type : String},
stripes : {type : String},
residential : {type : String}
});

// Product.schema.virtual('url').get(function() {
// return '/collections/'+this.slug;

// });

Product.defaultColumns = "category, prod_name";
Product.register();