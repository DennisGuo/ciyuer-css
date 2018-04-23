(function($,routie){

    $(init);

    function init(){
        router();
    }

    function router(){
        routie({
            '': home,
            'modules/:name?': modules,
            'about': about
        });
    }

    function home(){
        load('home',function(){
            showSidebarToggle(false);
        });
    }
    function modules(){
        load('modules',function(){

        });
    }
    function about(){
        load('about',function(){
            showSidebarToggle(false);
        });
    }

    function renderMenu(){
        var hash = window.location.hash;
        hash = hash ? hash : '#';
        $('a[href="'+hash+'"]').addClass('active').siblings().removeClass('active');
        showSidebarToggle();
    }

    function showSidebarToggle(show){
        $('.sidebar-toggle').css('display', show == false ? 'none':'inline-block' );
    }

    function load(name,callback){
        renderMenu();
        $('#content').load('./partials/'+name+'.html',callback);
    }

}(window.Zepto,window.routie));

