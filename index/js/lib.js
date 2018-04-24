
$(document).ready(function($) {
    // 手机导航
    $('.menuBtn').append('<b></b><b></b><b></b>');
    $('.menuBtn').click(function(event) {
        $(this).toggleClass('open');
        var _winw = $(window).width();
        var _winh = $(window).height();
        if( $(this).hasClass('open') ){
            if( _winw<=1200 ){
                $(".nav").addClass("nav-m").stop().slideDown();
            }
        }else{
            $(".nav").removeClass("nav-m").stop().slideUp();
        }
    });
    
    (function(){
        // 自定义多选
        $('[role=checkbox]').each(function(){
            var input = $(this).find('input[type="checkbox"]');
     
                input.each(function(){
                    if( $(this).attr('checked')){
                        $(this).parents('label').addClass('checked');
                        $(this).prop("checked", true)
                    }
                })
     
                input.change(function(){
                    $(this).parents('label').toggleClass('checked');
                });
        })

    })();


        (function(){
            // 自定义单选
        $('[role=radio]').each(function(){
            var input = $(this).find('input[type="radio"]'),
                label = $(this).find('label');

                input.each(function(){
                    if( $(this).attr('checked')){
                        $(this).parents('label').addClass('checked');
                        $(this).prop("checked", true)
                    }
                })

                input.change(function(){
                    label.removeClass('checked');
                    $(this).parents('label').addClass('checked');
                    input.removeAttr('checked');
                    $(this).prop("checked", true)
                })
        })
    })();



    // 选项卡 鼠标点击切换
    $(".TAB_CLICK li").click(function(){
      var tab=$(this).parent(".TAB_CLICK");
      var con=tab.attr("id");
      var on=tab.find("li").index(this);
      $(this).addClass('on').siblings(tab.find("li")).removeClass('on');
      $(con).eq(on).show().siblings(con).hide();
    });

    // 选项卡 鼠标经过切换
    $(".TAB li").mousemove(function(){
      var tab=$(this).parent(".TAB");
      var con=tab.attr("id");
      var on=tab.find("li").index(this);
      $(this).addClass('hover').siblings(tab.find("li")).removeClass('hover');
      $(con).eq(on).show().siblings(con).hide();
    });
    
    // 弹出框
    $('.myfancy').click(function() {
        var _id = $(this).attr('href');
        $(_id).find(".pop-bg").stop().fadeIn();
        $(_id).stop().fadeIn();
    });
    $('.pop-bg,.close').click(function() {
        $(this).parents('.m-pop').stop().fadeOut();
        $(".pop-bg").stop().fadeOut();
    });
    //返回顶部
    $('.goTop').click(function() {
        $('body,html').animate({
            'scrollTop': 0
        }, 500);
    });
    $(window).scroll(function() {
        var _top = $(window).scrollTop();
        if (_top < 100) {
            $('.goTop').stop().fadeOut(500);
        } else {
            $('.goTop').stop().fadeIn(500);
        }
    });
});