game.resources = [

	/* Graphics. 
	 * @example
	 * {name: "example", type:"image", src: "data/img/example.png"},
	 */
        {name: "background-tiles", type:"image", src: "data/img/background-tiles.png"} ,
        {name: "meta-tiles", type:"image", src: "data/img/meta-tiles.png"} ,
        {name: "player", type:"image", src: "data/img/orcSpear.png"} ,//this calls the player tile and loads it

	/* Atlases 
	 * @example
	 * {name: "example_tps", type: "tps", src: "data/img/example_tps.json"},
	 */
		
	/* Maps. 
	 * @example
	 * {name: "example01", type: "tmx", src: "data/map/example01.tmx"},
	 * {name: "example01", type: "tmx", src: "data/map/example01.json"},
 	 */
        {name: "test", type: "tmx", src: "data/map/test.tmx"},//this calls the map from the map folder 
	/* Background music. 
	 * @example
	 * {name: "example_bgm", type: "audio", src: "data/bgm/"},
	 */	

	/* Sound effects. 
	 * @example
	 * {name: "example_sfx", type: "audio", src: "data/sfx/"}
	 */
];
