/*global define:true requirejs:true*/
/* jshint strict: false */
requirejs.config({
    paths: {
        'jquery': 'jquery/jquery',
        'extend': 'gextend/extend',
        'gcollection': 'gcollection'
    }
});

define(['gcollection', 'jquery'], function(GCollection, $) {
    console.log('Loading');

    var Users = new GCollection({
        indexKey: 'id',
        comparator: function(a, b) {
            return a.id === b.id;
        }
    });


    var pepe = {
        id: 1,
        name: 'Pepe',
        age: 56
    };

    var rone = {
    	id:2,
    	name:'Rone',
    	age:23
    };

    var goliat = {
    	id:3,
    	name:'Goliat',
    	age:20
    };

    var one = {
    	id:4,
    	name:'One',
    	age:43
    };

    var pipo = {
    	id:5,
    	name:'Pipo',
    	age:63
    };

    Users.add([rone, goliat, pepe, one, one]);
    // Users.add(goliat);
    // Users.add(pepe);
    // Users.add(one);
    // Users.add(one);

    // console.log(Users.get(2));
    console.log('get 2', Users.get('2'));
    console.log('count', Users.count());
    console.table(Users.values());
    console.log('key pepe', Users.getKey(rone));
    console.log('remove pepe', Users.remove(rone));
    console.log('count', Users.count());
    console.table(Users.values());

    Users.add(rone);
    console.table(Users.sort(function(a,b){
    	return a.age < b.age;
    }));

    Users.add(pipo);

    console.table(Users.values());

    console.table(Users.filter(function(i){
    	return i.age > 30;
    }));

    console.log(Users.every(function(i){
    	return i.age > 10;
    }));

    console.log(Users.some(function(i){
    	return i.age === 20;
    }));

    window.Users = Users;
    window.gc = GCollection;
});