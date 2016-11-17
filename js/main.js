(function(){
	
	window.App = {
		Views: {},
		Models: {},
		Collections : {},
		Router:{}
	};
	
	
	window.template = function(id){
        return _.template($('#' + id).html());
};

App.Router = Backbone.Router.extend({
   routes:{
	''                     : 'index',
	'page/:id/*simbo'      : 'page',
	'search/:query'        : 'search',
	'*other'               : 'default'
   },

     index: function(){
          console.log('Всем привет от индексного роута!');
   },
   
    page: function(id,simbo){
	    //console.log('Это роут page'+ id + '!!!');
		console.log( simbo);
   },
   
   search: function(query){
   
},

default: function(other) {
	alert('Хммм...вы уверены, что вы попали туда куда хотели? Вы находитесь на роутере '+ other);
}
});

new App.Router();
Backbone.history.start();


})();