stepcarousel.setup({
	galleryid: 'mygallery', //id of carousel DIV
	beltclass: 'belt', //class of inner "belt" DIV containing all the panel DIVs
	panelclass: 'panel', //class of panel DIVs each holding content
	panelbehavior: {speed:300, wraparound:false, persist:true},
	autostep: {enable:true, moveby:4, pause:10000},
	defaultbuttons: {enable: true, moveby: 4, leftnav: ['images/butt-left.gif', 0, 64], rightnav: ['images/butt-right.gif', -11, 64]},
	statusvars: ['statusA', 'statusB', 'statusC'], //register 3 variables that contain current panel (start), current panel (last), and total panels
	contenttype: ['inline'], //content setting ['inline'] or ['external', 'path_to_external_file']
	oninit:function(){
	isloaded=true
	}
})