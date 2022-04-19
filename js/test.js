$(document).on("click", ".modal-template__slide .smur>li", validateSmur);
$(document).on("click", ".modal-template__slide .btn-nav", pagina);
$(document).on("click", ".modal-template__slide .view", view);

/*Select*/
$(document).on("change", ".modal-template__slide .select", validateSelect);

/*Test de inicio*/
var answer;
var cont_pag;
var cant_pag;
var rta_user;
var flagview;
var type_act;
var cont_drop;
var cadena_drop;

function pagina(){
    if($(this).hasClass('next')){
        if(cont_pag == (cant_pag + 1))
            return;

        cont_pag++;
        if($('.modal-template__slide').find('.pag').eq(cont_pag - 1).find('.dragdropuau').length == 1)
            dragDrop();

        visiblePagina();

    }
    else{
        if(cont_pag == 1)
            return;

        cont_pag--;
        visiblePagina();
    }
}

function visiblePagina(){

    $('.btn-nav').hide();
    $(".pag").hide();

    if(flagview==false){

        if(cont_pag <= cant_pag){
            $('.modal-template__slide').find('.pag').eq(cont_pag - 1).fadeIn();
            $('.modal-template__slide').find('.smur>li.active-btn').removeClass('active-btn');
        }
        else{
            respuesta();
        }

    }
    else{
        if(cont_pag <= cant_pag)
            viewPag();
        else
            respuesta();
    }
}


function validateSmur(){

    if(flagview == false){

        var selected = true;
        type_act[cont_pag - 1] = "smur";

        $('.active-parent').removeClass('active-parent');
        $(this).parent().addClass('active-parent');

        $('.active-parent').children('li.active-btn').removeClass('active-btn');
        $(this).addClass('active-btn');

        $('.emer-container-load').find('.pag').eq(cont_pag - 1).find('.smur').each(function(i,e){
            if($(this).find('li.active-btn').length==0)
                selected = false;
        });
        
        if(selected){
            $('.next').fadeIn();
            saveSmur();
        }

    }

}

function validateSelect(){

    var selected = true;
    $('.next').fadeOut();
    type_act[cont_pag - 1] = "select";

    $('.modal-template__slide').find('.pag').eq(cont_pag - 1).find('.select').each(function(i,e){
        if($(e).val() == 0)
            selected = false;
    });

    if(selected){
        $('.next').fadeIn();
        saveSelect();
    }

}

function saveSmur(){

    var cadena = "";

    var cadena_l = $('.modal-template__slide').find('.pag').eq(cont_pag - 1).find('.smur').length - 1;

    $('.emer-container-load').find('.pag').eq(cont_pag - 1).find('.smur').each(function(i,e){
        if(cadena_l == i)
            cadena += $(this).find('li.active-btn').index();
        else
            cadena += $(this).find('li.active-btn').index() + "*";
    });

    rta_user[cont_pag - 1] = cadena;
  
};

function saveSelect(){

    var cadena = "";

    var cadena_l = $('.modal-template__slide').find('.pag').eq(cont_pag - 1).find('.select').length - 1;

    $('.modal-template__slide').find('.pag').eq(cont_pag - 1).find('.select').each(function(i,e){
        if(cadena_l == i)
            cadena += $(e).val();
        else
            cadena += $(e).val() + "*";
    });

    rta_user[cont_pag - 1] = cadena;

}

function respuesta(){

    if(JSON.stringify(answer) == JSON.stringify(rta_user))
        $('.modal-template__slide').find('.pag').eq(cont_pag - 1).fadeIn();
    else
        $('.modal-template__slide').find('.pag').eq(cont_pag).fadeIn();

}

function view(){
    cont_pag = 1;
    flagview = true;
    $('.btn-nav').hide();
    $(".pag").hide();
    viewPag();
}

function viewPag(){

    $('.modal-template__slide').find('.pag').eq(cont_pag - 1).fadeIn();
    console.log(type_act[cont_pag - 1]);
    switch(type_act[cont_pag - 1]){
        case 'select':

            $('.modal-template__slide').find('.pag').eq(cont_pag - 1).find('.select').each(function(i,e){
                $(e).prop('disabled', 'disabled');
                $(e).val(rta_user[cont_pag - 1].split('*')[i]);
                if(answer[cont_pag - 1].split('*')[i]  == rta_user[cont_pag - 1].split('*')[i]){
                    $(e).css({
                        "background": "rgba(0,255,0,1)",
                        "text-shadow": "0 1px 0 rgba(0,0,0,0.4)"
                    });
                }
                else{
                    $(e).css({
                        "background": "rgba(255,0,0,1)",
                        "text-shadow": "0 1px 0 rgba(0,0,0,0.4)"
                    });
                }
            });

        break;  
        case 'smur':

            if($('.modal-template__slide').find('.pag').eq(cont_pag - 1).find('.smur').length > 1){

                $('.modal-template__slide').find('.pag').eq(cont_pag - 1).find('.smur').each(function(i,e){

                    $(e).find('li').eq(answer[cont_pag - 1].split('*')[i]).css({
                        "background": "rgba(0,255,0,1)",
                        "text-shadow": "0 1px 0 rgba(0,0,0,0.4)"
                    });

                    if(answer[cont_pag - 1].split('*')[i]  != rta_user[cont_pag - 1].split('*')[i]){
                        $(e).find('li').eq(rta_user[cont_pag - 1].split('*')[i]).css({
                            "background": "rgba(255,0,0,1)",
                            "text-shadow": "0 1px 0 rgba(0,0,0,0.4)"
                        });
                    }

                });

            }
            else{

                $('.emer-container-load').find('.pag').eq(cont_pag - 1).find('.smur>li').eq(answer[cont_pag - 1]).css({
                    "background": "rgba(0,255,0,1)",
                    "text-shadow": "0 1px 0 rgba(0,0,0,0.4)"
                });

                if(answer[cont_pag - 1]  != rta_user[cont_pag - 1]){

                    $('.modal-template__slide').find('.pag').eq(cont_pag - 1).find('.smur>li').eq(rta_user[cont_pag - 1]).css({
                        "background": "rgba(255,0,0,1)",
                        "text-shadow": "0 1px 0 rgba(0,0,0,0.4)"
                    });

                }

            }

        break;
        case 'dragdropuau':

            var ans = JSON.parse(answer[cont_pag - 1]);
            var rta = JSON.parse(rta_user[cont_pag - 1]);

            for(var i=0; i < ans.length; i++){
                if(ans[i] == rta[i]){
                    $('.modal-template__slide').find('.pag').eq(cont_pag - 1).find('.dragdropuau .drop').eq(i).css({
                        "border": "1px solid rgba(0,255,0,1)"
                    });
                }
                else{
                    $('.modal-template__slide').find('.pag').eq(cont_pag - 1).find('.dragdropuau .drop').eq(i).css({
                        "border": "1px solid rgba(255,0,0,1)"
                    });
                }
            }

        break;
    }

    $('.next').fadeIn();
}

function dragDrop(){
    $('.modal-template__slide .drag').draggable({ containment: $('.modal-template__slide').find('.pag').eq(cont_pag - 1).find('.dragdropuau'), cursor: "move", revert: "invalid", zIndex: 1000});

    $('.modal-template__slide').find('.pag').eq(cont_pag - 1).find('.drop').length;

    $('.modal-template__slide .drop').droppable({
        accept: ".modal-template__slide .drag",
        activeClass: "active-drop",
        drop: function( event, ui ) {

            $(this).append(ui.draggable.html());
            ui.draggable.remove();
            cadena_drop[parseInt($(this).attr('data-ref')) - 1] = parseInt(ui.draggable.attr('data-ref'));

            if($('.modal-template__slide').find('.pag').eq(cont_pag - 1).find('.drag').length == 0){
                rta_user[cont_pag - 1] = JSON.stringify(cadena_drop);
                type_act[cont_pag - 1] = "dragdropuau";
                $('.next').fadeIn();
            }
        }
    });
}