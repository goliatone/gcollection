/*global define:true requirejs:true*/
/* jshint strict: false */
requirejs.config({
    paths: {
        'jquery': 'jquery/jquery',
        'gpub': 'gpub/gpub',
        'extend': 'gextend/extend',
        'gcollection': 'gcollection'
    }
});

define(['gcollection', 'gpub', 'jquery'], function(GCollection, GPub, $) {
    console.log('Loading');

    GPub.observable(GCollection);

    var Users = new GCollection({
        indexKey: '_id',
        comparator: function(a, b) {
            return a.id === b.id;
        }
    });




    Users.add(users);
    // Users.add(goliat);
    // Users.add(pepe);
    // Users.add(one);
    // Users.add(one);

    // console.log(Users.get(2));
    console.log('get 2', Users.get('2'));
    console.log('count', Users.count());
    console.table(Users.values());
    // console.log('key pepe', Users.getKey(rone));
    // console.log('remove pepe', Users.remove(rone));
    // console.log('count', Users.count());
    // console.table(Users.values());

    // Users.add(rone);
    /*console.table(Users.sort(function(a, b) {
        return a.age < b.age;
    }));*/

    // Users.add(pipo);

    // console.table(Users.values());

    /* console.table(Users.filter(function(i) {
        return i.age > 30;
    }));

    console.log(Users.every(function(i) {
        return i.age > 10;
    }));

    console.log(Users.some(function(i) {
        return i.age === 20;
    }));*/

    window.Users = Users;
    window.gc = GCollection;
});


var users = [{
    "_id": "8ju8wwbcsw2sh3yfqmm7b5oh1k4oeciq",
    "_index": "1",
    "name": "Declan Labadie",
    "handle": "jamil",
    "address": "2276 Ward Cliff Apt. 063",
    "phone": "(406)335-5958 x280",
    "company": "Will, Franecki and Altenwerth",
    "img": "https://s3.amazonaws.com/uifaces/faces/twitter/psdesignuk/128.jpg",
    "bio": "excepturi porro rerum tempore est reiciendis cum[object Object]doloremque sapiente culpa voluptatibus[object Object]est ea vitae quidem laudantium totam ducimus"
}, {
    "_id": "u6yn5uqhqg0q1twk4ov0kk5ntmioaxp6",
    "_index": "2",
    "name": "Mrs. Jerrold Prosacco",
    "handle": "carley",
    "address": "512 Nitzsche Islands Suite 777",
    "phone": "1-058-106-3864 x0684",
    "company": "Schmeler Group",
    "img": "https://s3.amazonaws.com/uifaces/faces/twitter/hgharrygo/128.jpg",
    "bio": "velit recusandae aut ut non sed delectus[object Object]sed accusantium nemo rerum quasi corrupti[object Object]quod doloribus et sit est dolores exercitationem quo similique"
}, {
    "_id": "qnnll6ehipx2olxbl5epfrou6jlfk1bd",
    "_index": "3",
    "name": "Ford Kassulke",
    "handle": "aimee",
    "address": "4402 Ruecker View Apt. 955",
    "city": "Grimestown",
    "phone": "1-277-607-4756 x5877",
    "company": "Bergstrom, Mosciski and Schneider",
    "img": "https://s3.amazonaws.com/uifaces/faces/twitter/carlosblanco_eu/128.jpg",
    "bio": "voluptas sunt harum et voluptate sit[object Object]nam nostrum iure quod maxime[object Object]voluptas harum molestias eligendi ab quae beatae necessitatibus rerum"
}, {
    "_id": "d64qwngraqymwrxcaeyxrpm9f8ppvr19",
    "_index": "4",
    "name": "Maegan McKenzie Sr.",
    "handle": "eldon",
    "address": "6759 Hassan Plaza Suite 324",
    "phone": "(276)562-7533 x0032",
    "company": "McLaughlin and Daughters",
    "img": "https://s3.amazonaws.com/uifaces/faces/twitter/hellofeverrrr/128.jpg",
    "bio": "fugit quod porro quibusdam qui et[object Object]et qui rerum blanditiis dolorum reprehenderit esse nulla[object Object]eligendi hic nesciunt mollitia molestiae"
}, {
    "_id": "xgx9bumav2mb7auk7i7d6nhparxa12me",
    "_index": "5",
    "name": "Diana Kunze",
    "handle": "durward_leuschke",
    "address": "845 Spencer Street Suite 514",
    "phone": "263-064-4567",
    "company": "VonRueden, Aufderhar and Spinka",
    "img": "https://s3.amazonaws.com/uifaces/faces/twitter/yecidsm/128.jpg",
    "bio": "delectus officiis sit sit voluptas quisquam sit[object Object]autem alias libero accusamus possimus sunt quo expedita[object Object]in ipsum quaerat corporis expedita minus"
}, {
    "_id": "68edd32j5u1irws6hv82k04hs3yvieu4",
    "_index": "6",
    "name": "Maiya Leffler",
    "handle": "keven.kunde",
    "address": "00205 Heidenreich Forest Apt. 864",
    "phone": "149-942-6723 x927",
    "company": "Ratke-Boyer",
    "img": "https://s3.amazonaws.com/uifaces/faces/twitter/j2deme/128.jpg",
    "bio": "voluptatem culpa iusto reiciendis quis dolorem vitae non reprehenderit[object Object]culpa eum cumque assumenda consequatur laboriosam molestiae fuga[object Object]dolores ab quibusdam"
}, {
    "_id": "rypsr2dqnw2vqy1niguh8hllgpe6h3en",
    "_index": "7",
    "name": "Branson Effertz",
    "handle": "edwin_koelpin",
    "address": "320 Georgianna Springs Suite 933",
    "city": "Grimestown",
    "phone": "672-791-2604 x85419",
    "company": "Cole and Sons",
    "img": "https://s3.amazonaws.com/uifaces/faces/twitter/rangafangs/128.jpg",
    "bio": "illo quod voluptatibus nisi impedit porro aut numquam[object Object]qui et ipsam reprehenderit delectus harum[object Object]in perspiciatis eligendi quasi dolor soluta ex ut est"
}, {
    "_id": "8thqxc2sya3jrcg8r8jg6wuti1ktlj2t",
    "_index": "8",
    "name": "Ebba Mills",
    "handle": "jaydon_adams",
    "address": "5109 Emmerich Lake Suite 946",
    "phone": "1-606-647-8360",
    "company": "Kirlin-Hirthe",
    "img": "https://s3.amazonaws.com/uifaces/faces/twitter/kudretkeskin/128.jpg",
    "bio": "maiores vero quas et impedit animi[object Object]distinctio amet id ut adipisci est natus[object Object]et debitis soluta placeat atque nostrum rerum"
}, {
    "_id": "0f30fs2s4cliskajb5uqwlsghs0tya6o",
    "_index": "9",
    "name": "Hilton Lehner",
    "handle": "tristian_bailey",
    "address": "24738 Vallie Plain Suite 746",
    "city": "Grimestown",
    "phone": "(452)043-3925 x8748",
    "company": "Bashirian, Treutel and Rau",
    "img": "https://s3.amazonaws.com/uifaces/faces/twitter/edhenderson/128.jpg",
    "bio": "est dignissimos nulla[object Object]consequuntur repellendus sint[object Object]consequatur quia qui aliquam quae officiis consequatur molestiae laboriosam"
}, {
    "_id": "kcncu2ngkm7a0q1afp0y4bom73m4u7rq",
    "_index": "10",
    "name": "Kristopher Thiel",
    "handle": "mariela_howe",
    "address": "05794 Mitchell Street Suite 502",
    "phone": "1-037-766-5857 x67965",
    "company": "Roob-Lowe",
    "img": "https://s3.amazonaws.com/uifaces/faces/twitter/mrjamesnoble/128.jpg",
    "bio": "quidem quaerat aliquid ut ut[object Object]reiciendis incidunt vel veniam qui[object Object]in aperiam quibusdam praesentium"
}, {
    "_id": "xivmn08eudhjsq4hrtje9ls822o2k7rg",
    "_index": "11",
    "name": "Lea Weimann",
    "handle": "freida_bergnaum",
    "address": "19689 Padberg Throughway Apt. 649",
    "phone": "1-192-087-8880",
    "company": "Zulauf-VonRueden",
    "img": "https://s3.amazonaws.com/uifaces/faces/twitter/karalek/128.jpg",
    "bio": "itaque quasi molestiae illo ut voluptas[object Object]hic quidem voluptas quas nihil temporibus[object Object]dignissimos culpa et qui"
}, {
    "_id": "it7e5lbqa8jg4eu2bcmalag67mpn8q70",
    "_index": "12",
    "name": "Mack Frami",
    "handle": "tristin.beier",
    "address": "976 Anthony Run Suite 139",
    "phone": "1-075-321-8895",
    "company": "Bashirian, Fisher and Conn",
    "img": "https://s3.amazonaws.com/uifaces/faces/twitter/smenov/128.jpg",
    "bio": "quam ullam dolor veritatis recusandae expedita reiciendis[object Object]illo dolorum praesentium ipsam nostrum quo accusantium omnis id[object Object]consequuntur dolores autem ex voluptates doloremque sint impedit"
}, {
    "_id": "9tcua1b40m6adjc9d2rk6k38gemtt4nf",
    "_index": "13",
    "name": "Alia Pollich",
    "handle": "maribel_christiansen",
    "address": "60373 Quigley Parkways Suite 475",
    "city": "Grimestown",
    "phone": "919-298-1169",
    "company": "Gleichner, Friesen and Hirthe",
    "img": "https://s3.amazonaws.com/uifaces/faces/twitter/ryhanhassan/128.jpg",
    "bio": "est deleniti quas necessitatibus rem minima quia omnis dolorum[object Object]soluta quos deleniti expedita ex labore quae[object Object]consequatur voluptatem sed quia accusantium fugit vel"
}];